import React, { useState,useEffect } from "react";
import Toggle from "./Toggle";
import { BrowserRouter, Link, Route, Routes,useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import {fak, freeaikitsLogo, freeaikitslogo_dark} from "../assets"; 
import { useMediaQuery } from 'react-responsive';


const Header = ({ isDarkMode, toggleMode, onHandleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  // const [activeItem, setActiveItem] = useState(null);
  const [activeItem, setActiveItem] = useState('');
  useEffect(() => {
    // Update active menu item based on the current route
    const path = location.pathname;

    if (path === '/') {
      setActiveItem('Templates');
    } else if (path === '/youtube-title-generator'){
      setActiveItem('YouTube Title Generator');
      } else if (path === '/youtube-thumbnail-generator'){
        setActiveItem('YouTube thumbnail Generator')
      } else if (path === '/youtube-script-generator'){
        setActiveItem('YouTube video script Generator')

      }   else if( path=== '/ai-viral-twitter-thread-generator'){
          setActiveItem('Viral Twitter Thread Generator');
        } else if( path=== '/meta-description-generator'){
          setActiveItem('Meta Description Generator');
        }else if( path=== '/instagram-caption-generator'){
          setActiveItem('Instagram Caption Generator');
        }else if( path=== '/fiverr-gig-title-generator'){
          setActiveItem('Fiverr Gig Title Generator');
        }
        else if( path=== '/email-subject-line-tester'){
          setActiveItem('Email Subject Line Tester');
        }
 
        else if( path=== '/email-subject-line-generator'){
          setActiveItem('Email Subject Line Generator');
        }
 
        else if( path=== '/domain-name-generator'){
          setActiveItem('Domain Name Generator');
        }
        else if( path=== '/book-summary-generator'){
          setActiveItem('Book Summary Generator');
        }
        else if( path=== '/ai-blog-title-generator'){
          setActiveItem('Ai Blog Title Generator');
        }
 
  }, [location]);
 
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
 
  // to hide header title when small screen 
  // useEffect(() => {
  //   const path = location.pathname;

  //   const mediaQuery = window.matchMedia('(min-width: 768px)'); // Adjust the breakpoint as needed

  //   const handleResize = () => {
  //     if (mediaQuery.matches && path === '/') {
  //       setActiveItem('Home');
  //     }else if (mediaQuery.matches && path === '/youtube-title-generator'){
  //           setActiveItem('YouTube Title Generator');
  //           } 
  //          else {
  //       setActiveItem(null); // Set the active item to null for small screens
  //     }
  //   };

  //   handleResize(); // Call the function on initial render

  //   // Attach the event listener to handle changes in screen size
  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [location]);


   const handleMenu = ()=>{
    onHandleMenu();
    setIsMenuOpen(!isMenuOpen);
   }
   const imageContainerStyle = {
    backgroundColor: 'transparent',
    width: 'fit-content',
    height: 'fit-content',
  };

  const imageSource= `${isDarkMode ? freeaikitslogo_dark : freeaikitsLogo} `;
  return (
    <div className={`header ${isDarkMode ? "dark" : ""} `}>
        
         
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-2 lg:px-5 lg:pl-3">
          <div className="flex items-start justify-between ">
            <div className="flex items-row gap-[0.5rem]">
              
             

      
             <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                onClick={handleMenu}
                className={`{ py-2 px-2 rounded-md block ${
          isDarkMode ? " bg-gray-700 text-gray-50" : ""
        }`}
              >
            
            
                {!isMenuOpen ? (
                  <>
                    {" "}
                    <svg
                      className="w-6 h-7"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                      ></path>
                    </svg>{" "}
                  </>
                ) : (
                  <>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width="24"
                      height="24"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>{" "}
                  </>
                )}
              </button>
         

             <Link to="/" className={`flex`}>
                 
                 <img
                  src={imageSource}
                  className={ `h-15  hover:scale-110`}
                  alt="FlowBite Logo"
                  
                  
                />
                
                {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ">
                  Flowbite
                </span>  */}
                <div className=" flex flex-row ">
                {isLargeScreen &&(<>
      <span className={`self-end font-semibold  text-2xl  my-1 whitespace-nowrap dark:text-white `}>
      Flowbite
      </span>
      
      <div className="top-0 right-0 mx-1 my-2 ">
        <div className="flex bg-gradient-to-t from-[#4649ff] to-[#4649ff] border-2 border-white/20 rounded-full font-semibold text-gray-100 transition-all hover:scale-110 px-2 py-0 text-xs sm:px-2 sm:py-0 sm:text-sm sm:flex-end left-0 ">
          <span className="text-xs ">Beta</span>
        </div>
      </div></>
    )}
     
    </div>
                         </Link>
         
           </div>

            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white ">
                   
                  {activeItem} 
                </span>
                
            <div className="">
              <Toggle isDarkMode={isDarkMode} toggleMode={toggleMode} />
            </div>
            
          </div>

          {/* <div className="flex flex-col"> */}
            {/* {isMenuOpen && ( */}
              {/* <nav className="sm:hidden "> */}
                {/* Your menu items go here */}
                {/* <ul className=" py-1" role="none">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                    >
                      Sign out
                    </a>
                  </li>
                </ul> */}
              {/* </nav> */}
            {/* )} */}
          {/* </div> */}

      
           
        </div>
      </nav>



   
 
       
        
    </div>
  );
};
export default Header;
