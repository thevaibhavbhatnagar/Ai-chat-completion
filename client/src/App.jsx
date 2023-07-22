/*

FreeAiKits: Made By vaibhav bhatnagar 20 June 2023
This is ai-powered tool. 
*/
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";

import {
  Home,
  CreatePost,
  YoutubeTitleGenerator,
  Create,
  YoutubeThumbnailGenerator,
  YoutubeScriptGenerator,
  AIViralTwitterThreadGenerator,
  MetaDescriptionGenerator,
  InstagramCaptionGenerator,
  FiverrGigTitleGenerator,
  EmailSubjectLine,
  EmailSubjectLineGenerator,
  DomainNameGenerator,
  BookSummaryGenerator,
  AiBlogTitleGenerator,
  LongTailKeyword,
  MvcKeywordGenerator,
  AiPrivacyPolicyGenerator,

  
} from "./pages";

import {
  Sidebar,
  Header,
  Footer,
  AllCards,
  CardDashboard,
  
} from "./Components/";


import {PrivacyPolicyGenerator, TermsAndConditions} from "./InternalPages";
const App = () => {
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
    
    <BrowserRouter >
    
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
          
            <Routes>
              <Route path="/" element={<AllCards isDarkMode={isDarkMode} />} />
              <Route
                path="/youtube-title-generator"
                element={
                  <YoutubeTitleGenerator
                    isDarkMode={isDarkMode}
                  ></YoutubeTitleGenerator>
                }
              ></Route>
              <Route
                path="/youtube-thumbnail-generator"
                element={
                  <YoutubeThumbnailGenerator
                    isDarkMode={isDarkMode}
                  ></YoutubeThumbnailGenerator>
                }
              ></Route>

              <Route
                path="/youtube-script-generator"
                element={
                  <YoutubeScriptGenerator
                    isDarkMode={isDarkMode}
                  ></YoutubeScriptGenerator>
                }
              ></Route>
              <Route
                path="/ai-viral-twitter-thread-generator"
                element={
                  <AIViralTwitterThreadGenerator
                    isDarkMode={isDarkMode}
                  ></AIViralTwitterThreadGenerator>
                }
              ></Route>
              <Route
                path="/meta-description-generator"
                element={
                  <MetaDescriptionGenerator
                    isDarkMode={isDarkMode}
                  ></MetaDescriptionGenerator>
                }
              ></Route>
              <Route
                path="/instagram-caption-generator"
                element={
                  <InstagramCaptionGenerator
                    isDarkMode={isDarkMode}
                  ></InstagramCaptionGenerator>
                }
              ></Route>
              <Route
                path="/fiverr-gig-title-generator"
                element={
                  <FiverrGigTitleGenerator
                    isDarkMode={isDarkMode}
                  ></FiverrGigTitleGenerator>
                }
              ></Route>
              
                  <Route
                path="/email-subject-line-tester"
                element={
                  <EmailSubjectLine
                    isDarkMode={isDarkMode}
                  ></EmailSubjectLine>
                }
              ></Route>
              
                 <Route
                path="/email-subject-line-generator"
                element={
                  <EmailSubjectLineGenerator
                    isDarkMode={isDarkMode}
                  ></EmailSubjectLineGenerator>
                }
              ></Route>
                <Route
                path="/domain-name-generator"
                element={
                  <DomainNameGenerator
                    isDarkMode={isDarkMode}
                  ></DomainNameGenerator>
                }
              ></Route>
                <Route
                path="/book-summary-generator"
                element={
                  <BookSummaryGenerator
                    isDarkMode={isDarkMode}
                  ></BookSummaryGenerator>
                }
              ></Route>
               <Route
                path="/ai-blog-title-generator"
                element={
                  <AiBlogTitleGenerator
                    isDarkMode={isDarkMode}
                  ></AiBlogTitleGenerator>
                }
              ></Route>
                <Route
                path="/long"
                element={
                  <LongTailKeyword
                    isDarkMode={isDarkMode}
                  ></LongTailKeyword>
                }
              ></Route>
               <Route
                path="/mvc-keyword-generator"
                element={
                  <MvcKeywordGenerator
                    isDarkMode={isDarkMode}
                  ></MvcKeywordGenerator>
                }
              ></Route>
                <Route
                path="/ai-privacy-policy-generator"
                element={
                  <AiPrivacyPolicyGenerator
                    isDarkMode={isDarkMode}
                  ></AiPrivacyPolicyGenerator>
                }
              ></Route>
               <Route
                path="/privacy-policy-generator"
                element={
                  <PrivacyPolicyGenerator
                    isDarkMode={isDarkMode}
                  ></PrivacyPolicyGenerator>
                }
              ></Route>
                <Route
                path="/terms-and-conditions"
                element={
                  <TermsAndConditions
                    isDarkMode={isDarkMode}
                  ></TermsAndConditions>
                }
              ></Route>
            </Routes>
          </div>
          <Footer isDarkMode={isDarkMode} />
        </div>
      </div>
      {/* Content goes here */}
    </BrowserRouter>
  );
};

export default App;
