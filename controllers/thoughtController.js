const { Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts (req,res) {
        try{
            const thoughts = await Thought.find();
            
            res.json(thoughts);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // create a thought
    async createThought (req,res){
        try{
            const thoughts = await Throught.create(req.body);

            res.json(thoughts);
        } catch(err){
            res.status(500).json(err);
        }
    },

};