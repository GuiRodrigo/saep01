const Sequelize = require("sequelize");
const database = require("../db");
const Comentario = database.define(
  "comentario",
  {
    id_comentario: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      references: "usuario",
      referencesKey: "id",
    },
    id_curso: {
      type: Sequelize.INTEGER,
      references: "curso",
      referencesKey: "id_curso",
    },
    mensagem: {
      type: Sequelize.TEXT,
    },
    curtidas: {
      type: Sequelize.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = Comentario;
