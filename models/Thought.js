const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    // Schema for Thought model
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            timestamps: true,
            get: ( formatDate ) => moment( formatDate ).format('MM [/] DD [/] YYYY hh:mm A'),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction]
    },
    // virtuals
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })

const Thought = model('thought,thoughtSchema');

module.exports = Thought;