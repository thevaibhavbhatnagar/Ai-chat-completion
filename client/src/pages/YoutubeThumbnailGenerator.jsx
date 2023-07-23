import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField, DownloadButton, HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const YoutubeThumbnailGenerator = ({isDarkMode}) => {
    
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
    
    const  youtube_thumbmail_generator_prompt = `I want you to act as a viral YouTube thumbnail creator. Think of thumbnails that are catchy and attention-grabbing, and will encourage people to click and watch the video. I will provide you with 5 Titles, and you will suggest thumbnails for each describe what is in the thumbnail very well and be as detailed as you can, so desginers can understnad and create. Here are the titles ${form.prompt}.`;   
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('https://chat-completion.onrender.com/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: youtube_thumbmail_generator_prompt,
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


  return (
    <section className=" flex flex-col max-w-7xl">  
    <div>
    {isLargeScreen &&( 
      <div>

      <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}> YouTube thumbnail Generator </h1> 
      <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
      A YouTube thumbnail Generator suggests catchy titles for videos, boosting engagement and visibility on the platform.
      </p>
      </div>
       )}
      <div className="text-gray-800">
          {isHighTraffic ? (
            <HighTrafficMessage isHighTraffic={isHighTraffic} />
          ) : (
            <></>
          )}
        </div>
    </div>

    <form className="flex flex-col mt-8 max-w-3xl min-h-[400px] " >
 
      <div className="flex flex-col gap-5">

      

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
       
          
        )}
        
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
       
       

      
      </div>
      </form>

  
  </section>
  );
       
};

export default YoutubeThumbnailGenerator;
