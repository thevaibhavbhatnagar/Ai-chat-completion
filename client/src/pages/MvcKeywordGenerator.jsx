import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField, DownloadButton , HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const MvcKeywordGenerator = ({isDarkMode}) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    output: '',
  });
  
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

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
    
    const mvc_geyword_generator_prompt =  `  "Generate hundreds of keyword ideas related to ${form.prompt} for your MPC posts. These keywords will help you optimize your content, improve search engine rankings, and attract more targeted traffic. In the next few seconds, I will provide you with a comprehensive list of keyword ideas to boost your online presence and drive more engagement `;   
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: mvc_geyword_generator_prompt,
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

  const inputValue1 = "Cryptocurrency 101";
  const inputValue2 = "The Complete Guide to SEO";
  const inputValue3 = "Ai revolution";
  const inputValue4 = "Best electric scooter";
  const inputValue5 = "Photography Tips for Beginners";
  const inputValue6 = "The Future of Renewable Energy";
  const setInputValueHandler = (event, inputValue) => {
    event.preventDefault();
    setForm({ ...form, prompt: `${inputValue}` });
  };

  
  return (
    <section className=" flex flex-col max-w-7xl">  
      <div>
      {isLargeScreen &&( 
      <>

        <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Mvc Keyword Generator

</h1>
        <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        Generate hundreds of free keyword ideas for Google, Bing, YouTube, and Amazon        </p>
      </>)}
        <div className="text-gray-800">
          {isHighTraffic ? (
            <HighTrafficMessage isHighTraffic={isHighTraffic} isDarkMode={isDarkMode} />
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
          
          {generatingchat ? (
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
          ) : (
            <div>
            <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Examples</div>
              <ul className="flex flex-wrap w-full gap-2">
                <button
                  className="flex w-full sm:w-1/2 bg-gray-200 dark:bg-white/5  rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3"
                  onClick={(event) => setInputValueHandler(event, inputValue1)}
                >
                  {inputValue1}
                </button>
                <button
                  className="flex-1 w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3"
                  onClick={(event) => setInputValueHandler(event, inputValue2)}
                >
                  {inputValue2}
                </button>
                <button
                  className="flex w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3"
                  onClick={(event) => setInputValueHandler(event, inputValue3)}
                >
                  {inputValue3}
                </button>
                <button
                  className="flex-1 w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3"
                  onClick={(event) => setInputValueHandler(event, inputValue4)}
                >
                  {inputValue4}
                </button>
                <button
                  className="flex w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3"
                  onClick={(event) => setInputValueHandler(event, inputValue5)}
                >
                  {inputValue5}
                </button>
                <button
                  className="flex-1 w-full sm:w-1/2 bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3"
                  onClick={(event) => setInputValueHandler(event, inputValue6)}
                >
                  {inputValue6}
                </button>
              </ul>

              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Sample data: Cryptocurrency 101</div>
              <div className="flex flex-col w-full bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3 my-5">
              
               
                  <div className="divide-y divide-gray-200">
      <p className="py-2">1. Cryptocurrency basics</p>
      <p className="py-2">2. Introduction to cryptocurrency</p>
      <p className="py-2">3. Beginner's guide to cryptocurrency</p>
      <p className="py-2">4. How does cryptocurrency work?</p>
      <p className="py-2">5. Cryptocurrency explained</p>
      <p className="py-2">6. Cryptocurrency for beginners</p>
      <p className="py-2">7. Understanding cryptocurrency</p>
      <p className="py-2">8. What is blockchain technology?</p>
     
    </div>
              </div>
            </div>
          )}
         
         

          
         
         

        
        </div>
        </form>
  
    
    </section>
  );
};

export default MvcKeywordGenerator;