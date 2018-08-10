//deal with ssl to for server to connect to database
const pg = require('pg');
pg.defaults.ssl = true;

//getting started
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://rjwmhjniowntso:5e2aa604f4a3ef4d1f8911546724f44a316dbedce86c589484b0173e1079b317@ec2-54-235-212-58.compute-1.amazonaws.com:5432/dbrav6l2t706kh');

sequelize
  .authenticate()
  .then(() => {
    console.log('CONNECTION IS SUCCESSFUL');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });