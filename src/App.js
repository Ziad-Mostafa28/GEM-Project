import React, { useEffect, useState } from 'react';
import './App.css';
import { userContext } from './components/store/userContext';
// import User from './components/store/User';
// import Slider from './components/Banner/Slider';
import axios from 'axios';
import { SliderContext } from './components/Banner/SliderContext';
import 'bootstrap'
import Users from './components/store/Users';


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

      <SliderContext.Provider>
        <Users/>
      </SliderContext.Provider>

    </userContext.Provider>
  );
};


export default App;
