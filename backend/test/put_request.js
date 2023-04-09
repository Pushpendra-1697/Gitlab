const axios = require('axios');
const { expect } = require('chai');
const { backendURL } = require('./backendURL');
const { faker } = require('@faker-js/faker');

describe("PUT API Request Tests", async () => {
    it("Should update a user's name by user_id", async () => {
        const randomName = faker.name.firstName();
        const res = await axios.put(`${backendURL}/users/6432607f0e155f72f92dd66f`, {
            name: randomName,
        });
        expect(res.data.user.name).equal(randomName);
        expect(res.status).equal(200);
    });
    it("Should update a post's content by post_id", async () => {
        const randomParagraph = faker.lorem.paragraph();
        const res = await axios.put(`${backendURL}/posts/643195a8e6830da3cfddf2ed`, {
            content: randomParagraph,
        });
        expect(res.data.post.content).equal(randomParagraph);
        expect(res.status).equal(200);
    });
});
