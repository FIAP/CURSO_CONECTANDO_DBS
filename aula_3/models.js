// models.js
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'a3VYW6A2pTCIXO0i', {
  host: 'db.amxduunjluxnrlnhxnan.supabase.co',
  dialect: 'postgres',
});

const Autor = sequelize.define('Autor', {
  autor_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  nacionalidade: {
    type: DataTypes.STRING(50),
  },
}, {
  tableName: 'autores',
});

const Livro = sequelize.define('Livro', {
  livro_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  ano_publicacao: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'livros', 
});

Autor.hasMany(Livro, { foreignKey: 'autor_id' });
Livro.belongsTo(Autor, { foreignKey: 'autor_id' });

module.exports = { Autor, Livro, sequelize };
