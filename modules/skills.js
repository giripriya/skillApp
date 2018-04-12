const sequelize = require('sequelize');

const Skill = module.exports= sequelize.define('Project', {skillName: Sequelize.STRING, status: Sequelize.STRING});
