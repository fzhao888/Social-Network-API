const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single thought by id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);

            if (!thought) {
                return res.status(404).json({ message: "No thought with this id!" });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findByIdAndUpdate(req.body.userId,
                { $addToSet: { thoughts: thoughts._id } },
                { runValidators: true, new: true }
            );

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // update thought
    async updateThought(req, res) {
        try {
            const thought =
                await Thought.findByIdAndUpdate(req.params.thoughtId,
                    { $set: req.body },
                    { runValidators: true, new: true }
                );

            if (!thought) {
                return res.status(404).json({ message: "No thought this id!" });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.thoughtId);

            if (!thought) {
                return res.status(404).json({ message: "No thought with this id!" });
            }

            const user =
                await User.findByIdAndUpdate(req.body.userId,
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                );

            if (!user) {
                return res.status(404).json({ message: "No user with this id!" });
            }

            res.json({ message: 'Thought successfully deleted!' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // add a reaction
    async addReaction(req, res) {
        try {
            const thought =
                await Thought.findByIdAndUpdate(req.params.thoughtId,
                    { $addToSet: { reactions: req.body } },
                    { runValidators: true, new: true },
                )

            if (!thought) {
                return res.status(404).json({ message: "No user or thought with this id!" });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a reaction
    async deleteReaction(req, res) {
        try {
            const thought =
                await Thought.findByIdAndUpdate(req.params.thoughtId,
                    { $pull: { reactions: { reactionId: req.params.reactionId } } },
                    { runValidators:true, new: true }
                );

            if (!thought) {
                return res.status(404).json({ message: "No thought with this id!" });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};