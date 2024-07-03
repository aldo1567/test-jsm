const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { Validator } = require("node-input-validator");

exports.login = async (req, res) => {
	const v = new Validator(req.body, {
		email: "required|email",
		password: "required",
	});

	const matched = await v.check();
	if (!matched) {
		return res.status(422).json({ errors: v.errors });
	}
	const { email, password } = req.body;
	try {
		if ([null, undefined, ""].includes(email)) {
			return res.status(400).json({ message: "Email required" });
		}
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res
				.status(400)
				.json({ message: "Invalid email or password." });
		}

		const validPassword = await bcrypt.compare(password, user.password);
		if (!validPassword) {
			return res
				.status(400)
				.json({ message: "Invalid email or password." });
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});
		res.json({ token });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.logout = (req, res) => {
	res.json({ message: "Logout successful" });
};
