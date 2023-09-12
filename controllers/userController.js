const { User } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req,res){
        try {
            const users = await User.find();
            res.json(users);
        }catch (err){
            res.status(500).json(err);
        }
    },

    // Get a single user
    async getSingleUser(req,res){

    },

    // create a new user
    async createUser(req,res){
        try{
            const user = await User.create(req.body);
            res.json(user);
        }catch (err){
            res.status(500).json(err);
        }
    }

};