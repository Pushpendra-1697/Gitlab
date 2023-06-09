import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts';
import Users from './Users';
import UserAnalytics from '../Components/UserAnalytics';
import PostAnalytics from '../Components/PostAnalytics';
import SingleUser from './SingleUser';
import SinglePost from './SinglePost';


const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Users />}></Route>
                <Route path='/:user_id' element={<SingleUser />}></Route>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/posts/:post_id' element={<SinglePost />}></Route>
                <Route path='/postAnalytics' element={<PostAnalytics />}></Route>
                <Route path='/userAnalytics' element={<UserAnalytics />}></Route>
            </Routes>
        </Box>
    );
}

export default AllRoutes;