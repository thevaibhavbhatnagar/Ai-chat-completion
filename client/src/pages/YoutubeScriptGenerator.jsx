import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField,FormFieldForScript, DownloadButton, HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const YoutubeScriptGenerator = ({isDarkMode}) => {
    
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    output: '',
    minutes: '',
  });
  

  const [generatingchat, setGeneratingchat] = useState(false);
  const [copyingchat, setCopyingchat] = useState(false);
    const [isHighTraffic, setIsHighTraffic] = useState(false);


  
 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);

  };
  

  
  
  const generatechat = async() => {
    
 
    
    const youtube_script_generator_prompt = `Act as a professional YouTube video script writer and create an engaging script for a {minutes} minute video. Think outside the box and come up with a creative, witty, and captivating script that people would be interested in watching and sharing. Utilize techniques to generate more engagement in the narration script. Create a timeline and stick to it for up to ${form.minutes} minutes of spoken narration. THE Topic IS: ${form.prompt}`
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: youtube_script_generator_prompt,
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
      {/* <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}> YouTube video script Generator </h1>
      <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
      Create Youtube Scripts Fast
      </p> */}
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
        
          <FormFieldForScript
          labelName="Topic"
          type="text"
          name="prompt"
          placeholder="enter a topic"
          value={form}
          isDarkMode={isDarkMode}
          generatechat={generatechat}
          generatingchat={generatingchat}
          setForm={setForm}
          
          
        />
         
       
       

      
      </div>
      </form>

  
  </section>
  );
       
};

export default YoutubeScriptGenerator;
