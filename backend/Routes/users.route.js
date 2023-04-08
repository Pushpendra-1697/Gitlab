const { Router } = require('express');
const UserModel = require('../Models/users.model');
const userRouter = Router();

userRouter.post('/', async (req, res) => {
    const payload = req.body;
    try {
        const user = new UserModel(payload);
        await user.save();
        res.status(201).send({ msg: 'Registered Successfully', users: user });
    } catch (err) {
        res.status(404).send({ msg: "Registation failed" });
    }
});

userRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findOne({ _id: id });
        res.status(200).send({ "msg": `Successfully get user which id is ${id}`, user });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

userRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        if (payload.email == "") {
            await UserModel.findByIdAndUpdate({ _id: id }, { name: payload.name });
        } else {
            await UserModel.findByIdAndUpdate({ _id: id }, payload);
        }
        let user = await UserModel.findOne({ _id: id });
        res.status(200).send({ "msg": `Successfully update user which id is ${id}`, user });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

userRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await UserModel.findByIdAndDelete({ _id: id });
        res.send({ "msg": `Successfully delete user which id is ${id}`, user });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});



module.exports = { userRouter };