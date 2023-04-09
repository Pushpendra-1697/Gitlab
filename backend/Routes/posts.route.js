const { Router } = require('express');
const PostModel = require('../Models/posts.model');
const postRouter = Router();

postRouter.post('/', async (req, res) => {
    const { content } = req.body;
    const payload = { content, likes: 0, user_id: "64319bf6298a195a1f015db1" };
    try {
        const post = new PostModel(payload);
        await post.save();
        res.status(201).send({ msg: 'Post Successfully Created', posts: post });
    } catch (err) {
        res.status(404).send({ msg: "Post Failed" });
    }
});

postRouter.post('/:id/like', async (req, res) => {
    const { id } = req.params;
    const { like } = req.query;
    try {
        const temp = await PostModel.findOne({ _id: id });
        await PostModel.findByIdAndUpdate({ _id: id }, { likes: temp.likes + (Number(like) + 1) });
        let post = await PostModel.findOne({ _id: id });
        res.status(201).send({ msg: `Post's Like increased Successfully which id is ${id}`, posts: post });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

postRouter.post('/:id/unlike', async (req, res) => {
    const { id } = req.params;
    const { unlike } = req.query;
    try {
        const temp = await PostModel.findOne({ _id: id });
        await PostModel.findByIdAndUpdate({ _id: id }, { likes: temp.likes + (Number(unlike) - 1) });
        let post = await PostModel.findOne({ _id: id });
        res.status(201).send({ msg: `Post's Like decreased Successfully which id is ${id}`, posts: post });
    } catch (err) {
        res.status(404).send({ Error: err.message });
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
        res.send({ "msg": `Successfully delete Post which id is ${id}`, post });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});


module.exports = { postRouter };