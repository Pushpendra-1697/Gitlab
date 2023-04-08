const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        bio : {type: String, required: false},
    },
    { versionKey: false, timestamps: true }
);

const UserModel = model("user", userSchema);

module.exports = UserModel;