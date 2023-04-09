const axios = require('axios');
const { expect } = require('chai');
const { backendURL } = require('./backendURL');

describe("GET API Request Tests", async () => {
    it("Should be able to get user list", async () => {
        const res = await axios.get(`${backendURL}/analytics/users`);
        expect(res.data.msg).equal(`Total no. of Registered users ${res.data.users.length}`);
        expect(res.status).equal(200);
    });
    it("Should be able to get Post list", async () => {
        const res = await axios.get(`${backendURL}/analytics/posts`);
        expect(res.data.msg).equal(`Total no. of Posts ${res.data.posts.length}`);
        expect(res.status).equal(200);
    });
    it("Should be able to get user by id", async () => {
        const res = await axios.get(`${backendURL}/users/64311b1f7b17069bb7c8bbc1`);
        expect(res.data.user._id).equal(`64311b1f7b17069bb7c8bbc1`);
        expect(res.status).equal(200);
    });
    it("Should be able to get post by id", async () => {
        const res = await axios.get(`${backendURL}/posts/643195d3e6830da3cfddf2f1`);
        expect(res.data.post._id).equal(`643195d3e6830da3cfddf2f1`);
        expect(res.status).equal(200);
    });
    it("Should top 5 active users", async () => {
        const res = await axios.get(`${backendURL}/analytics/users/top-active`);
        expect(res.data.users.length).lte(5);
        expect(res.status).equal(200);
    });
    it("Should top 5 most liked posts", async () => {
        const res = await axios.get(`${backendURL}/analytics/posts/top-liked`);
        expect(res.data.posts.length).lte(5);
        expect(res.status).equal(200);
    });
});
