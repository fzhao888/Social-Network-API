const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    // Schema for Reaction model
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Schema.Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength:280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate 
        }
    }
);

function formatDate(createdAt) {
    return createdAt.toLocaleDateString();
}