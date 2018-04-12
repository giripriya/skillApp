const sequelize = require('sequelize');


const SkillSchema = sequelize.schema({
   skillName :{
       type: String,
       required : true
   },
    status :{
        type: String,
        required : true
    }
});

const Skill = module.exports= sequelize.model('Skill', SkillSchema);