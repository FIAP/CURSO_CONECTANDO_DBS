// consulta1.js
const { Livro, Autor } = require('./models');

async function consulta1() {
  const resultado = await Livro.findAll({
    attributes: ['titulo', 'ano_publicacao'],
    include: {
      model: Autor,
      attributes: ['nome'],
    },
  });
  console.log(resultado);
}

consulta1();
