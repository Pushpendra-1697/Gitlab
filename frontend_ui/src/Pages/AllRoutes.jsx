import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Posts from './Posts';
import Users from './Users';
import UserAnalytics from '../Components/UserAnalytics';
import PostAnalytics from '../Components/PostAnalytics';
import SingleUser from './SingleUser';


const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/postAnalytics' element={<PostAnalytics />}></Route>
                <Route path='/' element={<Users />}></Route>
                <Route path='/userAnalytics' element={<UserAnalytics />}></Route>
                <Route path='/:user_id' element={<SingleUser />}></Route>
            </Routes>
        </Box>
    );
}

export default AllRoutes;