const { Router } = require('express');
const PostModel = require('../Models/posts.model');
const postRouter = Router();

postRouter.post('/', async (req, res) => {
    const payload = req.body;
    try {
        const post = new PostModel(payload);
        await post.save();
        res.status(201).send({ msg: 'Post Successfully Created', posts: post });
    } catch (err) {
        res.status(404).send({ msg: "Post failed" });
    }
});


module.exports = { postRouter };