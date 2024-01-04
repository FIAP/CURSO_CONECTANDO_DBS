// consulta2.js
const { Livro, Autor } = require('./models');

async function consulta2() {
  const resultado = await Livro.findAll({
    attributes: ['titulo'],
    include: {
      model: Autor,
      attributes: [],
      where: { nome: 'Machado de Assis' },
    },
  });
  console.log(resultado);
}

consulta2();
