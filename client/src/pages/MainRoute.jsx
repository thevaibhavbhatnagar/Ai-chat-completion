import React, { useState, useEffect } from "react";
 

import { logo } from "../assets";

 

import {
  Sidebar,
  Header,
  Footer,
  AllCards,
  CardDashboard,
  
} from "../Components/";

const MainRoute = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      setIsSidebarOpen(!isSmallScreen);
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
   
  };
  const handleSidebarItemClick = () => {
    // setSidebarVisible(false);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen);
       
    }
  
  };

   
  return (
    
    <div className="flex flex-col">
    
      {/* outside header */}
      <div
        className={`container flex flex-col  sm:flex-row lg:w-full ${
          isDarkMode ? "dark" : "white"
        }`}
      
      >
        <Header
          isDarkMode={isDarkMode}
          toggleMode={toggleMode}
          onHandleMenu={handleMenu}

        />

        {/* {isSidebarOpen ? (
          <div className="hidden sm:block">
            <Sidebar/>
          </div>
        ) : (
          <></>
        )} */}


        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen}

       onSidebarItemClick={handleSidebarItemClick}
        />}

     
        {/* <div
        className={`${isSidebarOpen ? <Sidebar/> : <>'hello'</>}`}
        onClick={handleMenu}
      ></div> */}


        <div
          className={`content flex-1  ${
            isSidebarOpen ? " ml-0 sm:ml-80" : "ml-0"
          } ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
        >
          {/* <div className="flex ml-4 mt-14 sm:ml-0 sm:mx-auto sm:max-w-screen-md p-4 sm:p-12 md:mt-0 md:pt-20 "> */}
          {/* <div className="flex flex-col sm:max-w-screen-md px-10 pt-16 md:p-30 lg:mx-0 "> */}
          <div className="flex flex-col  sm:max-w-screen-md px-10 pt-16 md:p-30 lg:mx-0 ">
           
              
          </div>
        </div>
      </div>
          <Footer isDarkMode={isDarkMode} />
      {/* Content goes here */}
    </div>
  );
};

export default MainRoute;
