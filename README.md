# Gitlab --> Adobe Project
# Overview
This project will be a web application that allows users to create and share posts with other users. Users will be able to create an account, create posts, view other users' posts, and interact with other users' posts. The project will have both a frontend and a backend, with the frontend being responsible for displaying the user interface and the backend being responsible for managing the data and business logic of the application.

# Frontend Verecel Deployed Link :
https://adobe-lilac.vercel.app/
# Backend Cyclic Deployed Link: 
https://wandering-dove-sheath-dress.cyclic.app/

# Tech Stack :
# A) Frontend :
React (JSX Syntax), Redux, Chakra-ui Library for Styling & Modal, axios for handling asynchrous request, react-router-dom for routing or Navigate from one page to another, chakra-icons & react-icons.
# B) Backend :
Node.js, Express.js, mongodb (NoSQL), mongoose for connect database to server, cors for handling the cors error, axios, @faker-js/faker for creating random userName/random words and Mocha, Chai used for testing REST APIs in Node.JS.

# Some instructions to run locally :
For Setup ---> npm install

For Frontend: ---> npm run start

For Backend: ----> npm run server

PORT ---> 3000 || 8080

# API Testing by Mocha, Chai JavaScript testing framework:
To Run Test-Cases use ------> npm test (or) npm run test
 
# Some HTTP (Hyper Text Transfer Protocol) Status Code Which I used :
404 ---> Not Found/failure

200 --->  OK/Success/get/put/delete

201 ---> Created/post

# Some Endpoints's Routes output/response Checked by Thunder Client VS Code :

# A) User Endpoints :
POST /users: { msg: 'Registered Successfully', users: user }

GET /users/{id}: { "msg": `Successfully get user which id is ${id}`, user }

PUT /users/{id}: { "msg": `Successfully update user which id is ${id}`, user }

DELETE /users/{id}: { "msg": `Successfully delete user which id is ${id}`, user }

GET /analytics/users: { msg: `Total no. of Registered users ${users.length}`, users }

GET /analytics/users/top-active: { msg: `Top-active users`, users }

# B) Post Endpoints :
POST /posts: { msg: 'Post Successfully Created', posts: post }

GET /posts/{id}: { "msg": `Successfully get Post which id is ${id}`, post }

PUT /posts/{id}: { "msg": `Successfully update Post which id is ${id}`, post }

DELETE /posts/{id}: { "msg": `Successfully delete Post which id is ${id}`, post }

POST /posts/{id}/like: { msg: `Post's Like increased Successfully which id is ${id}`, posts: post }

POST /posts/{id}/unlike: { msg: `Post's Like decreased Successfully which id is ${id}`, posts: post }

GET /analytics/posts: { msg: `Total no. of Posts ${posts.length}`, posts }

GET /analytics/posts/top-liked: { msg: `Top-liked posts`, posts }

# Some Project Screenshots :
# A) For Computer Screen:
![Screenshot (187)](https://user-images.githubusercontent.com/104748364/230793064-bf3d5502-ba43-4104-a7e8-c0b07534db02.png)
![Screenshot (188)](https://user-images.githubusercontent.com/104748364/230793067-ed0e3844-26c0-43c7-924d-ba5030d59051.png)
![Screenshot (192)](https://user-images.githubusercontent.com/104748364/230793098-3edb2b58-2863-4675-b2e4-f648ac27efa2.png)
![Screenshot (191)](https://user-images.githubusercontent.com/104748364/230793104-90471bce-551c-4d59-8096-f9d20512e397.png)

# B) For Mobile/Tablet Screen :
![Screenshot (189)](https://user-images.githubusercontent.com/104748364/230793082-43e6fbbb-20c0-4c4a-900f-7683bc308f07.png)
![Screenshot (190)](https://user-images.githubusercontent.com/104748364/230793093-f6149e96-d8f8-4280-a520-66d03a033106.png)
