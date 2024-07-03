'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    level_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Levels',
        key: 'id'
      }
    },
    department_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Departments',
        key: 'id'
      }
    }
  }, {});
  
  User.associate = function(models) {
    User.belongsTo(models.Level, { foreignKey: 'level_id' });
    User.belongsTo(models.Department, { foreignKey: 'department_id' });
    User.hasOne(models.UserProfile, { foreignKey: 'user_id' });
  };

  return User;
};
