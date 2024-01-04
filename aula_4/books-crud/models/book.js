const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  publicationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  availability: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  tableName: 'Books', // Defina explicitamente o nome da tabela para 'livros'
});

// Sincroniza o modelo com o banco de dados
// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Tabela criada com sucesso!');
//     // Pode adicionar aqui lógica adicional, se necessário
//   })
//   .catch((error) => {
//     console.error('Erro ao criar tabela:', error);
//   })
//   .finally(() => {
//     // Fecha a conexão com o banco de dados
//     sequelize.close();
//   });


module.exports = { Book, sequelize };
