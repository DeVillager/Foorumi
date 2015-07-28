var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://zhmpuykjzlszmy:3_CMc8cXXMrGiVWKWLWo0qIJCK@ec2-54-204-3-188.compute-1.amazonaws.com:5432/df20igrqptuog7', {
  dialect: 'postgres',
  protocol: 'postgres'
});

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
