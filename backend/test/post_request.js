const axios = require('axios');
const { expect } = require('chai');
const { backendURL } = require('./backendURL');
const { faker } = require('@faker-js/faker');

describe("POST API Request Tests", async () => {
    it("Should create a new user", async () => {
        const randomName = faker.name.firstName();
        const res = await axios.post(`${backendURL}/users`, {
            name: randomName,
            email: `${randomName}@gmail.com`,
            bio: "Business man"
        });
        expect(res.data.users.name).equal(randomName);
        expect(res.data.users.email).equal(`${randomName}@gmail.com`);
        expect(res.status).equal(201);
    });
    it("Should create a new post", async () => {
        const randomWords = faker.lorem.words(4);
        const res = await axios.post(`${backendURL}/posts`, {
            content: randomWords,
        }, { headers: { user_id: "6432e069d2b4bbc02016324c" } });
        expect(res.data.posts.likes).equal(0);
        expect(res.data.posts.content).equal(randomWords);
        expect(res.status).equal(201);
    });
    it("Should increased the likes by post_id", async () => {
        const temp = await axios.get(`${backendURL}/posts/643195cae6830da3cfddf2ef`);
        var likes = temp.data.post.likes;
        const res = await axios.post(`${backendURL}/posts/643195cae6830da3cfddf2ef/like?like=0`);
        expect(res.data.posts.likes).equal(likes + 1);
        expect(res.status).equal(201);
    });
    it("Should decreased the likes by post_id", async () => {
        const temp = await axios.get(`${backendURL}/posts/643195cae6830da3cfddf2ef`);
        var likes = temp.data.post.likes;
        const res = await axios.post(`${backendURL}/posts/643195cae6830da3cfddf2ef/unlike?unlike=0`);
        expect(res.data.posts.likes).equal(likes - 1);
        expect(res.data.posts.likes).gt(0);
        expect(res.status).equal(201);
    });
});
