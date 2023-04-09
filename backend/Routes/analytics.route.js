const { Router } = require('express');
const UserModel = require('../Models/users.model');
const PostModel = require('../Models/posts.model');
const analyticsRouter = Router();

analyticsRouter.get('/users', async (req, res) => {
    const query = req.query;
    try {
        const users = await UserModel.find(query);
        res.status(200).send({ msg: `Total no. of Registered users ${users.length}`, users });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

analyticsRouter.get('/posts', async (req, res) => {
    const query = req.query;
    try {
        const posts = await PostModel.find(query);
        res.status(200).send({ msg: `Total no. of Posts ${posts.length}`, posts });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

analyticsRouter.get('/users/top-active', async (req, res) => {
    try {
        const users = await PostModel.aggregate([
            { $group: { _id: "$user_id", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 5 },
            { $lookup: { from: "users", localField: "_id", foreignField: "_id", as: "user" } },
            { $unwind: "$user" },
            { $project: { _id: 0, user_id: "$user._id", name: "$user.name", email: "$user.email", post_count: "$count" } }
        ]);
        res.status(200).send({ msg: `Top-active users`, users });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

analyticsRouter.get('/posts/top-liked', async (req, res) => {
    try {
        const posts = await PostModel.aggregate([
            { $sort: { likes: -1 } },
            { $limit: 5 }
        ]);
        res.status(200).send({ msg: `Top-liked posts`, posts });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

module.exports = { analyticsRouter };