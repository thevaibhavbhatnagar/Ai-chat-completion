 
import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const Create = ({ isDarkMode}) => {
 
  return (

   

    <div className={`create ${isDarkMode ? 'dark' : ''} `}>
  
 
    
      <h1 className="text-4xl font-bold mb-4">Welcome to the App</h1>
      {/* <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-red-200' : 'text-gray'}`}>Welcome to the App</h1> */}
      <p className="text-lg">
        This is an example of how to add light and dark mode toggler using React.js and Tailwind CSS.
      </p>
    </div>
  );
};

export default Create;