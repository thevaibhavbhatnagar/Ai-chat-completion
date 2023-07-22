import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField,FormFieldForScript, DownloadButton,FormFieldForMeta, HighTrafficMessage } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const MetaDescriptionGenerator = ({isDarkMode}) => {
    
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    output: '',
    prompt: '',
    product_description: '',
  });
  
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  const [generatingchat, setGeneratingchat] = useState(false);
  const [copyingchat, setCopyingchat] = useState(false);
  const [isHighTraffic, setIsHighTraffic] = useState(false);


  
 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);

  };
  

  
  
  const generatechat = async() => {
    
 
    
    const meta_description_generator_prompt = `Generate compelling meta descriptions for your product pages based on the user's input. Craft engaging and concise descriptions that entice users to click and explore. Incorporate the user's specified keywords, highlight unique selling points, and emphasize the value of your product. Boost your product's visibility and drive more conversions. Your meta descriptions should be approximately 22 words or less.\n\nUser Input:\n- Product Name: ${form.prompt}\n- Product Description: ${form.product_description}\n\nNumber of Descriptions: 5`;

    
      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: meta_description_generator_prompt,
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
    <>

      <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}> Meta Description Generator</h1>
      <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>Effective AI Generated Meta Descriptions
      </p>
    </> )}
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
        
          <FormFieldForMeta
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

export default MetaDescriptionGenerator;
