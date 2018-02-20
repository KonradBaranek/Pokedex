const express = require ('express');
const router = express.Router();
const Pokemon = require('../models/pokemon');

// get a list of pokemons from the db
router.get('/pokemons', function(req, res, next){
    if(!req.query){
        res.status(500).send();
    }
    if(req.query.type=='każdy'){
        Pokemon.find({}).then(function(pokemons){
            res.status(200).send(pokemons);
        }); 
    }else Pokemon.find({type: req.query.type}).then(function(pokemons){
        res.status(200).send(pokemons);
    }); 
});

// add a new pokemon to the db
router.post('/pokemons', function(req, res, next){
    Pokemon.findOne({id: req.body.id}).then(function(pokemon){
        if(pokemon==null){
            Pokemon.create(req.body).then(function(pokemon){
                res.status(200).send(pokemon);
            }).catch(next);
        }else{
            res.status(500).send({error:'Error: Pokemon of that id already exists!!'});
        }
    });
});

// update a pokemon in the db
router.put('/pokemons/:id', function(req, res, next){
    Pokemon.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Pokemon.findOne({_id: req.params.id}).then(function(pokemon){
            res.status(200).send(pokemon);
        });
    }).catch(next);
});

// delete a pokemon from the db
router.delete('/pokemons/:id', function(req, res, next){
    Pokemon.findByIdAndRemove({_id: req.params.id}).then(function(pokemon){
        res.status(200).send(pokemon);
    }).catch(next);
});

module.exports = router;
