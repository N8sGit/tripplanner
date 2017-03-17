const Sequelize = require('sequelize');
const db = require('./db');

var Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age_range: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Activity;
