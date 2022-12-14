// using mongoose for the model 
import mongoose from "mongoose";

// mongoose schema
const postSchema = mongoose.Schema({
    title: String, 
    message: String, 
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
}); 

// turn schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;