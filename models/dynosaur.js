const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Dynosaur = sequelize.define("Dynosaure", {
    name: {
      type: DataTypes.STRING,
    },
    scienticName: {
      type: DataTypes.STRING,
    },
    appearanceYear: {
      type: DataTypes.INTEGER,
    },
    disappearanceYear: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    color: {
      type: DataTypes.STRING,
    },
  });

  return Dynosaur;
};
