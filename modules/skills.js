const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    });

const Skill = module.exports= sequelize.define('Project', {skillName: Sequelize.STRING, status: Sequelize.STRING});
