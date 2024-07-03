'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    department_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  
  Department.associate = function(models) {
    Department.hasMany(models.User, { foreignKey: 'department_id' });
  };

  return Department;
};
