import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField, DownloadButton, HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const AIViralTwitterThreadGenerator = ({isDarkMode}) => {
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
    
 

    const AI_Viral_Twitter_Thread_Generator_prompt = `You are an AI Viral Twitter Thread Generator. Your mission is to create engaging and share-worthy Twitter thread that will captivate audiences with your wit, humor, and insightful commentary. Your task is to generate 5 a viral Twitter thread based on a topic provided by the user My tweet topic is : ${form.prompt} , tweet also include ${form.prompt} , Hashtags,and realted Emoji . Each tweet should not exceed 280 characters in length`

      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('https://chat-completion.onrender.com/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: AI_Viral_Twitter_Thread_Generator_prompt,
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

  const inputValue1 = "Twitter vs Thread";
  const inputValue2 = "Generative AI";
  const inputValue3 = "Tesla Robot";
  const inputValue4 = "Best electric scooter";
  const inputValue5 = "Science experiment";
  const inputValue6 = "Disaster";
  const setInputValueHandler = (event, inputValue) => {
    event.preventDefault();
    setForm({ ...form, prompt: `${inputValue}` });
  };

  
  return (
    <section className=" flex flex-col max-w-7xl">  
      <div>
      {isLargeScreen &&( 
        <>

        <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Viral Twitter Thread Generator</h1>
        <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Use AI To Grow Your Twitter Profile
        </p>
        </>
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
          
                  
         {/* add OutputField components in generatingchat by vaibhav at 13 July  */}
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

              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Sample data</div>
              <div className="flex flex-col w-full bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3 my-5">
              
                <div className="flex flex-col gap-3 my-5">
                Tweet 1: 🚀🤖 Are you ready for the future? 🌟 Tesla just unveiled their revolutionary Tesla Robot! It's like something straight out of a science fiction movie. 👀 Let's dive into the details and explore what this groundbreaking invention means for humanity. #TeslaRobot #FutureTech #AI

                </div>
                <div className="flex flex-col gap-3 my-5">
                Tweet 2: 🤔🔎 Let's talk about the Tesla Robot's capabilities. It's designed to do boring and repetitive tasks, like groceries, laundry, or even walking your dog! 🧺🧦🐕 Imagine all the free time we'll have to focus on more important things! #StreamlineLife #TeslaRobot #AIRevolution
                </div>
                <div className="flex flex-col gap-3  my-5">
                Tweet 3: 💡⚡️ The Tesla Robot is not your average machine. It's powered by Tesla's cutting-edge AI technology, making it capable of learning and adapting to its environment. 🔄🌍 This means it can constantly grow and improve, just like a human being! 🧠📈 #SmartBot #TeslaRobot #AIProgress
                </div>
                <div className="flex flex-col gap-3 my-5">
                Tweet 4: 😱🤖 Is the Tesla Robot going to take over the world? 🌎🔥 Relax, folks! Elon Musk assures us it's just here to help. It's built with utmost safety in mind, and it even has a friendly face to put us at ease. 😊 Let's embrace the future and welcome our new robotic assistant! #FriendlyAI #TeslaRobot
                </div>
                <div className="flex flex-col gap-3 my-5">
                Tweet 5: 🌐💙 The Tesla Robot has huge potential beyond household tasks. Imagine them working side by side with us in hospitals, aiding doctors and nurses. 🩺🤝 Or assisting in disaster areas, providing critical support in rescue efforts. 🚑⛑️ The possibilities are endless! #RobotsWithPurpose #TeslaRobot
                </div>
                
              </div>
            </div>
          )}

        
        </div>
        </form>
  
    
    </section>
  );
};

export default AIViralTwitterThreadGenerator;