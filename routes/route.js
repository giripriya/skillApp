const express = require('express');
const router = express.Router();
const Skill = require('../modules/skills');
var Sequelize = require('sequelize');
// retrieve data
router.get('/skills', function(req, res, next){ 
    Skill.findAll({}).then(skills => res.json(skills))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

//retrieve add skill
router.post('/skill',function(req, res , next){
    let newSkill = new Skill({
        skillName: req.body.skillName,
        status: req.body.status
    });
    newSkill.save()
        .then((result) =>{
        if(result){
            res.json(result);
        }else{
            res.json({msg: "notaADdded"});
        }
    })
});

//delete skill
router.delete('/skill/:id',function(req, res , next){
    
    var skill = Skill.findOne({where:{id : req.params.id}}).then((err, result)=>{
        if(err){
          res.json(err);
      }else{
          res.json(result);
      }});
    Skill.destroy(
        {where:{id : req.params.id}}
    );
   });

//find skill
router.get('/skill/:query',function(req, res){
    Skill.findAll({where:{ "skillName": {[Sequelize.Op.iLike] : '%'+req.params.query+'%' }}}).then(skills => {res.json(skills)})
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
// Update a skill identified by the Id in the request
router.put('/skill/:id/:skillName',(req, res) => {
    Skill.update(
        {
            skillName: req.params.skillName
        },
        {
            where:
         {
            id:req.params.id
         }, 
         returning:true,
        plain : true})
                 .then((result)=> {
              res.json(result[1].dataValues);
       });
}
);

// Update a skill identified by the Id in the request
router.put('/skillStatus/:id/:skillStatus',(req, res) => {
    Skill.update(
        {
            status: req.params.skillStatus
        },
        {
            where:
         {
            id:req.params.id
         }, 
         returning:true,
        plain : true})
                 .then((result)=> {
              res.json(result[1].dataValues);
       });
}
);


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
