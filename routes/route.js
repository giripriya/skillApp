const express = require('express');
const router = express.Router();
const Skill = require('../modules/skills');

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
        .then((err, skill) =>{
        if(err){
            res.json({msg:"failed to add Skill"+ err});
        }else{
            res.json({msg: "added"});
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
    const regex = new RegExp(escapeRegex(req.params.query), 'gi');
    Skill.findAll({ "skillName": regex }).then((err, skill)=> {
           if(err) {
               console.log(err);
           } else {
              res.json(skill);
           }
       });
});
// Update a skill identified by the Id in the request
router.put('/skill/:id/:skillName',(req, res) => {
    Skill.update(
        {
            status: req.params.skillName
        },
        {
            where:
         {
            id:req.params.id
         }, 
         returning:true})
                 .then((err, result)=> {
           if(err) {
               console.log(err);
           } else {
              res.json(result);
           }
       });
}
);


// Update a skill identified by the Id in the request
router.put('/skillStatus/:id/:skillName',(req, res) => {
    Skill.update(
        {
            status: req.params.skillName
        },
        {
            where:
         {
            id:req.params.id
         }, 
         returning:true})
                 .then((err, result)=> {
           if(err) {
               console.log(err);
           } else {
              res.json(result);
           }
       });
}
);


function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

module.exports = router;
