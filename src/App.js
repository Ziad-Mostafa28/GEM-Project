import React, { useEffect, useState } from 'react';
import './App.css';
import { userContext } from './components/store/userContext';
import User from './components/User';
import axios from 'axios';
import Second from './components/store/USer';
import { postContext } from './components/store/posts'

const App = () => {

  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data)
      console.log(response);
    }
    getUsers();

  }, [])

  useEffect(() => {
    async function getPost() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(response.data)
      console.log(response);
    }

    getPost();
  }, [])

  console.log(post, "3333");
  return (
    <userContext.Provider value={users}>
      <postContext.Provider value={post}>
        <User />
        <Second />
      </postContext.Provider>
    </userContext.Provider>
  );
};


export default App;
