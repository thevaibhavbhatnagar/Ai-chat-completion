import React, {useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { download } from "../assets";
import { FaArrowRight } from 'react-icons/fa';
import RightAlignIcon from "./RightAlignIcon";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLightbulb, faAlignRight,faThList,faTh,faImage,faImages,faAlignLeft,
  faEnvelope  , faEnvelopeOpen ,
   faEarthAmericas,
  faBookOpenReader,faMagnifyingGlass, faFileLines


} from '@fortawesome/free-solid-svg-icons';
 
import { faYoutube, faTwitter,faMedapps,faInstagram } from '@fortawesome/free-brands-svg-icons';

const AllCards = ({isDarkMode}) => {
  const scrollToTop = () => {
    // Scroll to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  //  index start at 0
  const data = [
    {
      id: 1,
      title: ' YouTube Title Generator',
      content: '  A YouTube Title Generator suggests catchy titles for videos, boosting engagement and visibility on the platform.',
      favIcon: faYoutube,
      LinkRedirect: `/youtube-title-generator`,
    },
    {
      id: 2,
      title: ' YouTube thumbnail Generator',
      content: ' A YouTube thumbnail Generator suggests catchy titles for videos, boosting engagement and visibility on the platform. ',
      favIcon: faImages,
      LinkRedirect: `/youtube-thumbnail-generator`,
    },
    {
      id: 3,
      title: 'YouTube video script Generator',
      content: ' Create Youtube Scripts Fast',
      favIcon: faAlignLeft,
      LinkRedirect: `/youtube-script-generator`,
    },
    {
      id: 4,
      title: 'Viral Twitter Thread Generator',
      content: 'Use AI To Grow Your Twitter Profile',
      favIcon: faTwitter,
      LinkRedirect: `/ai-viral-twitter-thread-generator`,
      
    },
     
    {
      id: 5,
      title: '  Meta Description Generator',
      content: 'Effective AI Generated Meta Descriptions',
      favIcon: faMedapps,
      LinkRedirect: `/meta-description-generator`,
    },
    {
      id: 6,
      title: ' Instagram Caption Generator',
      content: ' AI Generated Captions',
      favIcon: faInstagram,
      LinkRedirect: `/instagram-caption-generator`,
    },
    {
      id: 7,
      title: ' Fiverr Gig Title Generator',// remaining
      content: '  Find the Perfect Freelancer for Your Project with Fiverr. Hire Top Talent Today and Get Results. Affordable and Efficient Gig Services. Boost Your Business Now!',
      favIcon: faEnvelope,
      LinkRedirect: `/fiverr-gig-title-generator`,
    },   
     {
      id: 8,
      title: ' Email Subject Line Tester',
      content: ' Enhance your email marketing strategy with our Email Subject Line Tester. Optimize subject lines for maximum engagement and drive more opens.',
      favIcon: faEnvelope,
      LinkRedirect: `/email-subject-line-tester`,
    },{
      id: 9,
      title: '  Email Subject Line Generator',
      content: ' Generate Effective Subject Lines With AI  ',
      favIcon: faEnvelopeOpen,
      LinkRedirect: `/email-subject-line-generator`,
    },{
      
      id: 10,
      title: '  Domain Name Generator',
      content: ' Get the perfect domain name for your website in seconds with our Domain Name Generator.  ',
      favIcon: faEarthAmericas,
      LinkRedirect: `/domain-name-generator`,
    },{
      id: 11,
      title: ' Book Summary Generator',
      content: " Don't have time to read? Our Book Summary Generator extracts key insights, so you can conquer more books and emerge well-informed.",
      favIcon: faBookOpenReader,
      LinkRedirect: `/book-summary-generator`,
    },{
      id: 12,
      title: 'Ai Blog Title Generator',
         content: '  Generate A List Of Title Ideas For Your Blog Post, Get 15 Minimum Title Ideas',
      favIcon: faMagnifyingGlass,
      LinkRedirect: `/ai-blog-title-generator`,
    },{
      id: 13,
      title: 'Mvc Keyword Generator',
         content: 'Generate hundreds of free keyword ideas for Google, Bing, YouTube, and Amazon',
      favIcon: faMagnifyingGlass,
      LinkRedirect: `/mvc-keyword-generator`,
    },{
      id: 14,
      title: 'Privacy Policy Generator',
         content: ' Generator Privacy Policy for your website fast and get fast adsense approval',
      favIcon: faFileLines,
      LinkRedirect: `/ai-privacy-policy-generator`,
    },
    // Add more items as needed
  ];


  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Filter the data based on the search term
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(results);
  };
    // console.log(searchResults);
  return (
    
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

    <div className="flex flex-col py-5">
<input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className={`p-2 border mx-2 border-gray-300 rounded-md ${isDarkMode ? ' bg-gray-800 text-gray-50' : 'text-gray-800 bg-gray-50'}`}
      />
      {/* {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((item) => (
            <li key={item.id}>
              <h5 className="font-bold text-gray-900 text-[1.1rem] dark:text-white lg:text-[1.2rem] sm:text-[1rem]">
                {item.title}
              </h5>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )} */}

  {/* /// make a favion , description dynamic tomoarrow task and pick the search bar css from AgentGPT */}

  {/* also add {searchResults.length > 0 ? ( )} inside put the whole code*/}
   
     
    

  {
    

    searchTerm.length == 0 ?  ( <div className="py-3 px-3"> perform search : eg. "youtube" </div> ) :(
       searchResults.length > 0 ? (<div className="flex flex-wrap sm:flex-row "> {
      searchResults.map((item) => ( 
     
        <div className="flex flex-wrap w-full sm:w-1/2 px-2" key={item.id}>
      <Link
        to={item.LinkRedirect}
        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10"
        onClick={scrollToTop}
      >
      <div className=" flex flex-col px-3 justify-start">

        {/* <div className="flex  justify-between p-4 leading-normal px-0 text-[1.2em] md:text-[1em] md:flex-row"> */}
        <div className="flex px-0 py-4 gap-1 lg:flex-row sm:flex-col md:flex-col md:py-2 md:px-0  ">
        <FontAwesomeIcon icon={item.favIcon}  beat size="xl" style={{ paddingTop:5, paddingRight: 5  }} />
          {/* <h5 className="font-bold tracking-tight text-gray-900 dark:text-white px-2 lg:font-bold md:px-0 "> */}
          <h5 className="font-bold text-gray-900 text-[1.1rem] dark:text-white lg:text-[1.2rem]  sm:text-[1rem] 
          " 
          >
            {item.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
        {item.content}</p>
  
        </div>
          
      </Link>
    </div>      
          )) }</div>) : (    <div className="py-3 px-3">
          No results found </div>
            )
          
        )
          } 


  {searchTerm.length == 0 &&
        <div className="flex flex-wrap sm:flex-row " >
    {data.map((item) => ( 
       // 11 july flex-wrap to flex-col w-full sm:flex-row by vaibhav      
        <div className="flex flex-col w-full sm:flex-row sm:w-1/2 px-2" >
      <Link
        to={item.LinkRedirect}
        className="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10"
        onClick={scrollToTop}
      >
      <div className=" flex flex-col px-3 justify-start">

        {/* <div className="flex  justify-between p-4 leading-normal px-0 text-[1.2em] md:text-[1em] md:flex-row"> */}
        <div className="flex px-0 py-4 gap-1 lg:flex-row sm:flex-col md:flex-col md:py-2 md:px-0  ">
      {/* // 11 july   paddingTop:5, paddingRight: 5 / 11 july  */}
        <FontAwesomeIcon icon={item.favIcon}  beat size="xl" style={{ paddingTop:5, paddingRight: 5 }} />
          {/* <h5 className="font-bold tracking-tight text-gray-900 dark:text-white px-2 lg:font-bold md:px-0 "> */}
          <h5 className="font-bold text-gray-900 text-[1.1rem] dark:text-white lg:text-[1.2rem]  sm:text-[1rem]
          " 
          >
            {item.title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
        {item.content}</p>
  
        </div>
          
      </Link>
          </div> 
          )) }
    </div>      }
    </div>      
          
     
     
   
  );
};

export default AllCards;
