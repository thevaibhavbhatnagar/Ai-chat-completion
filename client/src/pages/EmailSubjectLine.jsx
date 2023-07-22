import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField, DownloadButton , HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const EmailSubjectLine = ({isDarkMode}) => {
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
    
    const email_subject_line_prompt =  ` You are a marketing specialist tasked with analyzing and optimizing email subject lines for a travel agency's promotional campaign. Analyze the provided subject line and provide a comprehensive analysis along with alternative subject lines to improve engagement and click-through rates. Subject Line: ${form.prompt},
    Subject Line Analysis and Optimization:Effectiveness Score: [Score] Provide a score between 1 and 10 indicating the effectiveness of the subject line in capturing attention and generating interest. Scannability Score: [Score] Evaluate the subject line's scannability and readability on a scale of 1 to 10, considering the use of clear and concise language. Sentiment Analysis: [Positive/Negative/Neutral] Identify and describe the overall sentiment conveyed by the subject line, indicating whether it is positive, negative, or neutral. Spam Triggers: [None identified/Identified] Determine if the subject line contains any elements that might trigger spam filters. All Caps Words: [None used/Used] Specify whether the subject line includes any words written in all capital letters, which can impact perception and spam filtering. Emojis: [Recommendation] Suggest whether adding emojis to the subject line would enhance its effectiveness and provide recommendations for relevant emojis. Alternative Subject Lines: 1. [Alternative Subject Line 1]   2. [Alternative Subject Line 2] 3. [Alternative Subject Line 3] 4. [Alternative Subject Line 4] 5. [Alternative Subject Line 5]  Generate an analysis and alternative subject lines based on the provided subject line to optimize the promotional email campaign's engagement and click-through rates.`;   
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: email_subject_line_prompt,
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

  const inputValue1 = "New Product Launch: Discover our Revolutionary Solution";
  const inputValue2 = "Welcome to our Newsletter! Stay Updated with Our Latest Offers";
  const inputValue3 = "Don't Miss Out! Limited Time Sale Ends Tomorrow";
  const inputValue4 = "Congratulations on Your New Job!";
  const inputValue5 = "Reminder: Upcoming Deadline for Project Submission";
  const inputValue6 = "Important Update: Changes to our Service Agreement";
  const setInputValueHandler = (event, inputValue) => {
    event.preventDefault();
    setForm({ ...form, prompt: `${inputValue}` });
  };

  
  return (
    <section className=" flex flex-col max-w-7xl">  
      <div>
        <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Email Subject Line Tester </h1>
        <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
        Enhance your email marketing strategy with our Email Subject Line Tester. Optimize subject lines for maximum engagement and drive more opens.
        </p>
        <div className="text-gray-800">
          {isHighTraffic ? (
            <HighTrafficMessage isHighTraffic={isHighTraffic} />
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

              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Sample data</div>
              <div className="flex flex-col w-full bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3 my-5">
              
                <div className="flex flex-col">
                  <div className="font-bold flex flex-col">
                  Subject Line: get ready for new offer 
                  <div className="font-light py-5">

                  Subject Line Analysis and Optimization:
                  </div>
                  </div>
                  <div className="font-bold">
                  Effectiveness Score: 6
                  </div>
                  The subject line is somewhat effective in capturing attention as it uses action-oriented language ("get ready") and hints at an upcoming offer. However, it lacks specificity and fails to communicate the value or benefit of the offer.
                </div>
                <div className="flex flex-col my-5">
                  <div className="font-bold">Scannability Score: 7</div>
                  The subject line is relatively clear and concise, consisting of only five words. However, it could be improved by removing unnecessary words and using more impactful and persuasive language.

                </div>
                <div className="flex flex-col my-5">
                  <div className="font-bold ">
                  Sentiment Analysis: Neutral
                  </div>
                  The subject line conveys a neutral sentiment, neither distinctly positive nor negative. It simply informs the recipient of an upcoming offer without expressing any emotion or excitement.

                </div>
                <div className="flex flex-col my-5">
                  <div className="font-bold ">
                  Spam Triggers: None identified
                  </div>
                  The subject line does not contain any elements that might trigger spam filters.
                </div>
                <div className="flex flex-col my-5">
                  <div className="font-bold ">All Caps Words: None used</div>
                  The subject line does not include any words written in all capital letters.
                </div>
                
                 <div className="flex flex-col  my-5">
                  <div className="font-bold ">Emojis: Recommendation</div>
                  Adding relevant emojis can enhance the effectiveness of the subject line by adding visual appeal and conveying emotions. Consider including vacation-related emojis like ✈️, 🌴, or 🏖️ to create a more enticing subject line.
                </div>
                These alternative subject lines aim to improve engagement and click-through rates by highlighting exclusivity, emphasizing the value and benefit of the offer, and creating a sense of excitement and urgency.
              </div>
            </div>
          )}
         
         

        
        </div>
        </form>
  
    
    </section>
  );
};

export default EmailSubjectLine;