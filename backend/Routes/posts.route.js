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

postRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await PostModel.findOne({ _id: id });
        res.status(200).send({ "msg": `Successfully get Post which id is ${id}`, post });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

postRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        await PostModel.findByIdAndUpdate({ _id: id }, payload);
        let post = await PostModel.findOne({ _id: id });
        res.status(200).send({ "msg": `Successfully update Post which id is ${id}`, post });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

postRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let post = await PostModel.findByIdAndDelete({ _id: id });
        res.send({ "msg": `Successfully delete post which id is ${id}`, post });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});


module.exports = { postRouter };