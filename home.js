import React from 'react';
import Movie from './movie';
import { auth } from '../service/firebase'
import { BrowserRouter as Router, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PredefinedNumber = 42;

const Home = ({ user }) => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [redirect, setRedirect] = useState(false);

    const handleInputChange = (e) => {
        console.log(e, e.target.value);
        setInputValue(e.target.value);
        setIsValid(true);
    };

    const handleCheckNumber = () => {
        const inputNumber = parseInt(inputValue, 10);

        if (inputNumber === PredefinedNumber) {
            setRedirect(true);
            navigate('/contacts');
        } else {
            setIsValid(false);
        }
    };

   
    return (
        <div className="home flex-col ">
             <h1>Hello, <span></span>{user.displayName}</h1> 
            <img src={user.photoURL} alt="wwn" />
            <div>
                <div className="container mx-auto mt-8 text-center">
                    <h1 className="text-2xl font-bold mb-4">Number Checker</h1>
                    <div className="max-w-md mx-auto">
                        <input
                            type="text"
                            className={`border rounded w-full p-2 ${isValid ? '' : 'border-red-500'}`}
                            placeholder="Enter a number"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        {!isValid && <p className="text-red-500 text-sm mt-1">Error: Please enter a valid number.</p>}
                        <button
                            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleCheckNumber}
                        >
                            Check Number
                        </button>
                        
                    </div>
                </div>
                <p>  <a href="https://www.goperch.in/" > click here </a> </p>
                <div><Movie/></div> 
            </div>
            <div > <button className="button signout   rounded-md ... border-8 w-10 border-orange-400 pl-2  hover:bg-indigo-500 opacity-100" onClick={() => auth.signOut()}>Sign out</button> </div>
        </div>
    )
}

export default Home;