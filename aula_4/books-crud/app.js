const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 3030;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/books', bookRoutes);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
  sequelize.close().then(() => {
    console.log('Conexão com o banco de dados fechada.');
    process.exit();
  });
});
