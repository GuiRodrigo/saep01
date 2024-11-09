const Sequelize = require("sequelize");
const database = require("../db");
const Usuario = database.define(
  "usuario",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
    },
    nickname: {
      type: Sequelize.TEXT,
    },
    senha: {
      type: Sequelize.INTEGER,
    },
    foto: {
      type: Sequelize.TEXT,
    },
    createdAt: {
      type: Sequelize.TEXT,
    },
    updatedAt: {
      type: Sequelize.TEXT,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Usuario;
