const Sequelize = require('sequelize');
var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)
const sequelize = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    });

const Skill = module.exports= sequelize.define('Project', {skillName: Sequelize.STRING, status: Sequelize.STRING});
