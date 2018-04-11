const mongoose = require('mongoose');


const SkillSchema = mongoose.Schema({
   skillName :{
       type: String,
       required : true
   },
    status :{
        type: String,
        required : true
    }
});

const Skill = module.exports= mongoose.model('Skill', SkillSchema);