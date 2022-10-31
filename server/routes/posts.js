// to be able to make post request
import express from 'express';
// gives the ability to route
const router = express.Router();
// import controller
import { getPost, createPost, updatePost, deletePost, likePost } from '../controller/post.js'

// routes
router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;