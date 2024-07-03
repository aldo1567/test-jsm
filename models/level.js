'use strict';
module.exports = (sequelize, DataTypes) => {
  const Level = sequelize.define('Level', {
    level_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  
  Level.associate = function(models) {
    Level.hasMany(models.User, { foreignKey: 'level_id' });
  };

  return Level;
};
