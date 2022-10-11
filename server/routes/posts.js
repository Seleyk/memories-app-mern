// to be able to make post request
import express from 'express';
// gives the ability to route
const router = express.Router();
// import controller
import { getPost, createPost } from '../controller/post.js'

// routes
router.get('/', getPost);
router.post('/', createPost);

export default router;