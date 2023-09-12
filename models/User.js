const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    // Schema for User model
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
            }
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thought"
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ]
    },
    // virtuals
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


userSchema
    .virtual('friendCount')
    //Getter for friends array
    .get(function () {
        return this.friends.length;
    })

    // Initialize our User model
    const User = model('user, userSchema');

    module.exports = User;