const { Schema, model } = require('mongoose');

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
            get: formatDate
        },
        username: {
            type: String,
            required: true
        },
        reactions: {
            type: Schema.Types.ObjectId,
            ref: "Reaction"
        }
    }, 
     // virtuals
     {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

function formatDate(createdAt) {
    return createdAt.toLocaleDateString();
}

thoughtSchema
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length;
    })

    const Thought = model('thought,thoughtSchema');

    module.exports = Thought;