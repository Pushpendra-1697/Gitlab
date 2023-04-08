import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Posts = () => {
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-evenly"} mt="5%">
        <Heading textAlign={"center"} mb="20px">
          Posts page
        </Heading>
        <Link to="/postAnalytics"><Button>➡️PostAnalytics</Button></Link>
      </Box>
    </Box>
  )
}

export default Posts;