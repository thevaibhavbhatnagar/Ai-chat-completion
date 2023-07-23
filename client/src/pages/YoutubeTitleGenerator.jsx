import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField, DownloadButton , HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const YoutubeTitleGenerator = ({isDarkMode}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    output: '',
  });
  

  const [generatingchat, setGeneratingchat] = useState(false);
  const [copyingchat, setCopyingchat] = useState(false);
  const [inputBtnChange, setinputBtnChange] = useState('');
  const [isHighTraffic, setIsHighTraffic] = useState(false);

  
 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);

  };
  
  
  const generatechat = async() => {
    
    const youtube_title_generator_prompt =  `I want you to act as a viral YouTube title creator. Think of titles that are catchy and attention-grabbing, and will encourage people to click and watch the video. The titles should be short, concise, and direct. They should also be creative and clever. Try to come up with titles that are unexpected and surprising. Do not use titles that are too generic, or titles that have been used too many times before. My video is about ${form.prompt}.`;   
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('https://chat-completion.onrender.com/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: youtube_title_generator_prompt,
            }),
          })
          const data = await response.json();
          setForm({ ...form, output: `${data.photo.content}` });
           
          
          
        } catch (error) {
          alert(error);
        }finally{
          setGeneratingchat(false);
          setIsHighTraffic(false);
          
        }
      }else{
        alert('Please enter a prompt');
      }
  };

  const inputValue1 = "The Ultimate Guide to Mastering Photoshop in 30 Days";
  const inputValue2 = "Mastering the Art of Public Speaking: Tips and Techniques";
  const inputValue3 = " Gaming Review: Is the New PS5 Worth the Hype?";
  const inputValue4 = " Mastering Guitar: Beginner's Guide to Playing Like a Pro";
  const inputValue5 = "5 Easy and Delicious Recipes for Quick Weeknight Dinners";
  const inputValue6 = "10 Tips for Building a Successful Online Business from Scratch";
 const setInputValueHandler = (event, inputValue)=>{
  event.preventDefault();
  setForm({ ...form, prompt: `${inputValue}` });
 }
  
  return (
    <section className=" flex flex-col max-w-7xl">  
      <div>
        {/* <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>YouTube Title Generator </h1>
        <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        A YouTube Title Generator suggests catchy titles for videos, boosting engagement and visibility on the platform.
        </p> */}
        <div className="text-gray-800">
          {isHighTraffic ? (
            <HighTrafficMessage isHighTraffic={isHighTraffic} isDarkMode={isDarkMode}/>
          ) : (
            <></>
          )}
        </div>
      </div>

      <form className="flex flex-col mt-8 max-w-3xl min-h-[400px]" >
   
        <div className="flex flex-col gap-5">

        <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="enter a prompt"
            value={form.prompt}
            handleChange={handleChange}
            isDarkMode={isDarkMode}
            generatechat={generatechat}
            inputBtnChange={inputBtnChange}
            generatingchat={generatingchat}
            setForm={setForm}
            
            
          />
  
          {form.output ? (            
            <OutputField
            labelName="Output"
            type="text"
            name="output"
            value={form.output}
            handleChange={handleChange}
            isDarkMode={isDarkMode}
            generatingchat={generatingchat}
            setForm={setForm}
             
             
          />  
          ):(
           <></>
         
            
          )}
          
          {generatingchat ? 
         
            <OutputField
            labelName="Output"
            type="text"
            name="output"
            value={form.output}
            // handleChange={handleChange}
            isDarkMode={isDarkMode}
            generatingchat={generatingchat}
            setForm={setForm}
             
                     
           
           
          />  
:  <div>
          {/* <ul className="flex flex-col gap-3.5 w-full  sm:flex-row"> */}
       
       <div className="">
       <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Examples</div>
             <ul className="flex flex-wrap w-full gap-2">
            
          <button className="flex w-full sm:w-1/2 bg-gray-200 dark:bg-white/5  rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3" onClick={(event)=>setInputValueHandler(event, inputValue1)}>
          {inputValue1}
       </button>
       <button className="flex-1 w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3" onClick={(event)=>setInputValueHandler(event, inputValue2)}>
       {inputValue2 } 
       </button>
        <button className="flex w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3" onClick={(event)=>setInputValueHandler(event, inputValue3)}>
        {inputValue3 } 
       </button>
        <button className="flex-1 w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3" onClick={(event)=>setInputValueHandler(event, inputValue4)}>
        {inputValue4 }
       </button>
        <button className="flex w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3" onClick={(event)=>setInputValueHandler(event, inputValue5)}>
        {inputValue5 }
       </button>
        <button className="flex-1 w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3" onClick={(event)=>setInputValueHandler(event, inputValue6)}>
        {inputValue6 } 
       </button>
          </ul>  
       </div>
          </div>
}







         
          {/* <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto sm:m-1 sm:flex-row ">
          <button className="w-full bg-gray-200 dark:bg-white/5 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ">
          The Ultimate Guide to Mastering Photoshop in 30 Days
       </button>
       <button className="w-full bg-gray-200 dark:bg-white/5 p-3 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ">
       10 Tips for Building a Successful Online Business from Scratch
       </button>
          </ul> */}

        
        </div>
        </form>
  
    
    </section>
  );
};

export default YoutubeTitleGenerator;