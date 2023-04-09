const axios = require('axios');
const { expect } = require('chai');
const backendURL = "http://localhost:8080";

describe("GET API Request Tests", async () => {
    it("Should be able to get user list", async () => {
        const res = await axios.get(`${backendURL}/analytics/users`);
        expect(res.data.msg).equal(`Total no. of Registered users ${res.data.users.length}`);
    });
    it("Should be able to get Post list", async () => {
        const res = await axios.get(`${backendURL}/analytics/posts`);
        expect(res.data.msg).equal(`Total no. of Posts ${res.data.posts.length}`);
    });
    it("Should be able to get user by id", async () => {
        const res = await axios.get(`${backendURL}/users/64316f6a6f61c9e060e0d625`);
        expect(res.data.user._id).equal(`64316f6a6f61c9e060e0d625`);
    });
    it("Should be able to get post by id", async () => {
        const res = await axios.get(`${backendURL}/posts/643194a0e6830da3cfddf2e9`);
        expect(res.data.post._id).equal(`643194a0e6830da3cfddf2e9`);
    });
    it("Should top 5 active users", async () => {
        const res = await axios.get(`${backendURL}/analytics/users/top-active`);
        expect(res.data.users.length).lte(5);
    });
    it("Should top 5 most liked posts", async () => {
        const res = await axios.get(`${backendURL}/analytics/posts/top-liked`);
        expect(res.data.posts.length).lte(5);
    });
});