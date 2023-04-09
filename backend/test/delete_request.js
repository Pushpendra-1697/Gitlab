const axios = require('axios');
const { expect } = require('chai');
const { backendURL } = require('./backendURL');

describe("DELETE API Request Tests", async () => {
    it("Should delete a user by user_id", async () => {
        const res = await axios.delete(`${backendURL}/users/64316f6a6f61c9e060e0d625`);
        expect(res.status).equal(204);
    });
    it("Should delete a post by post_id", async () => {
        const res = await axios.delete(`${backendURL}/posts/6431959ce6830da3cfddf2eb`);
        expect(res.status).equal(204);
    });
});
