const { User, Level, Department, UserProfile } = require('../models');
const bcrypt = require('bcryptjs');

exports.getAllUser = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        { model: Level },
        { model: Department },
        { model: UserProfile }
      ]
    });
    res.status(200).json(users);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
}

exports.createUser = async (req, res) => {
  const { username, password, email, level_id, department_id, first_name, last_name, address, phone_number } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword, email, level_id, department_id });
    await UserProfile.create({ user_id: user.id, first_name, last_name, address, phone_number });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, level_id, department_id, first_name, last_name, address, phone_number } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.username = username || user.username;
    user.email = email || user.email;
    user.level_id = level_id || user.level_id;
    user.department_id = department_id || user.department_id;
    await user.save();

    const userProfile = await UserProfile.findOne({ where: { user_id: id } });
    if (userProfile) {
      userProfile.first_name = first_name || userProfile.first_name;
      userProfile.last_name = last_name || userProfile.last_name;
      userProfile.address = address || userProfile.address;
      userProfile.phone_number = phone_number || userProfile.phone_number;
      await userProfile.save();
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: [
        { model: Level },
        { model: Department },
        { model: UserProfile }
      ]
    });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
