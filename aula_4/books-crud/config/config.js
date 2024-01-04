const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres', 
  username: 'postgres',
  password: 'a3VYW6A2pTCIXO0i',
  database: 'postgres',
  host: 'db.amxduunjluxnrlnhxnan.supabase.co',
  port: 5432,
});

module.exports = sequelize;