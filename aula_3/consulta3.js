// consulta3.js
const { Op } = require('sequelize');
const { Autor, Livro, sequelize } = require('./models');

async function consulta3() {
  try {
    const resultado = await Autor.findAll({
      attributes: ['nome'],
      include: {
        model: Livro,
        attributes: ['titulo', 'ano_publicacao'],
        where: { ano_publicacao: { [Op.gt]: 1899 } },
      },
    });

    resultado.forEach(item => {
    
      const resultadoFormatado = {
        autor: item.nome,
        livros: item.Livros.map(livro => ({
          titulo: livro.titulo,
          ano_publicacao: livro.ano_publicacao,
        })),
      };

   
      console.log(resultadoFormatado);
    });

  } catch (error) {
    console.error('Erro na consulta:', error);
  } finally {
    await sequelize.close(); 
  }
}

consulta3();
