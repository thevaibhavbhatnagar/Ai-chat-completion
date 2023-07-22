import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField, DownloadButton , HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const AiBlogTitleGenerator = ({isDarkMode}) => {
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

  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);

  };
  
  
  const generatechat = async() => {
    
    const Ai_blog_title_generator_prompt =  ` You are a creative blogger looking for new ideas to write captivating articles. You want to generate a list of intriguing blog titles based on a specific topic. Provide a topic, and I'll generate 15 blog titles that will inspire and engage your readers.

    User Input:    
    Topic:  ${form.prompt}`;   
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: Ai_blog_title_generator_prompt,
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
        <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Ai Blog Title Generator
</h1>
        <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        Generate A List Of Title Ideas For Your Blog Post, Get 15 Minimum Title Ideas
        </p> </>
      )}
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

              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Sample data: Best electric scooter</div>
              <div className="flex flex-col w-full bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3 my-5">
              
                <div className="flex flex-col">
              
                  1. "Revolutionary Innovations: Unveiling the Best Electric Scooters of the Year"                </div>
                <div className="flex flex-col my-5">
                 
                  2. "Eco-Friendly Commuting: Why Electric Scooters Are the Future"
                </div>
                <div className="flex flex-col my-5">
                  
                  3. "Maximize Your Mobility: Top Picks for the Best Electric Scooters"
                </div>
                <div className="flex flex-col my-5">
                4. "Redefining Urban Transportation: Exploring the Benefits of Electric Scooters"
                </div>
                <div className="flex flex-col my-5">
                 
                  The subject line does not include any words written in all capital letters.
                </div>
                
                 <div className="flex flex-col  my-5">
                 5. "Speed, Style, and Sustainability: Finding the Perfect Electric Scooter"
                  </div>
              </div>
            </div>
          )}
         
         

          
         
         

        
        </div>
        </form>
  
    
    </section>
  );
};

export default AiBlogTitleGenerator;