

import { useState, useEffect } from 'react';
import {auth} from './service/firebase';
import {GoogleAuthProvider} from "firebase/auth";
import Login from './components/login';
import Home from './components/home';
import { Route, Routes, useNavigate } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase


function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      navigate('/home');
    })
  }, [])

  console.log(user);
  return (
    <>
     <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home user={user}/>}/>
      </Routes>
    <div className=" bg-gray-300 h-screen">
      <div className='flex'>
      
        <div className=' flex w-18 h-10 mt-96 mr-80 float-right '>
          {user ? <Home user={user} /> : <Login/>}
        </div> </div>
    </div>
    </>
  );

}

export default App;

