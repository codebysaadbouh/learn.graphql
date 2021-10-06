const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        author: {
            type: {
                type: Schema.Types.ObjectId,
                ref: 'User'
              }
        },
        comments: {
            type: [{
                type: Schema.Types.ObjectId,
                ref: 'Post'
              }]
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {        
            type: Date,
            default: Date.now()
        }
    }
)

const Post = mongoose.model('post', PostSchema);
module.exports = Post