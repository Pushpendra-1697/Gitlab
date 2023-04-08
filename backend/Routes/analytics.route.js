const { Router } = require('express');
const UserModel = require('../Models/users.model');
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

analyticsRouter.get('/users/top-active', async (req, res) => {
    res.send('top-active')
});


module.exports = { analyticsRouter };