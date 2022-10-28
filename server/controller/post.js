// importing the model to be used
import mongoose, { mongo } from "mongoose";
import PostMessage from "../models/postMessage.js";

// retieving your post
export const getPost = async (req, res) => {
    try {
      const postMessages = await PostMessage.find();

      res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

}


// making a new post
export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

// Update post
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Memory not found');

    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

    res.json(updatedPost);
}
