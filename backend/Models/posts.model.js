const { Schema, model } = require("mongoose");

const postSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId, ref: "user", required: true
        },
        content: { type: String, required: true },
        likes: Number,
    },
    { versionKey: false, timestamps: true }
);

const PostModel = model("post", postSchema);

module.exports = PostModel;