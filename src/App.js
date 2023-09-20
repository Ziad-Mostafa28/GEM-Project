import React, { useEffect, useState } from 'react';
import './App.css';
import { userContext } from './components/store/userContext';
import User from './components/User';
import axios from 'axios';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get('https://uat-iconcreations.com/2022/gem/public/api/web/home');
      setUsers(response.data.data)
      console.log(response);
    }
    getUsers();

  }, [])


  return (
    <userContext.Provider value={users}>
      <User />
    </userContext.Provider>
  );
};


export default App;
