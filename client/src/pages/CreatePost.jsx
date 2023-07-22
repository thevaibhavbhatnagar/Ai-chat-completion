import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import { getRandomPrompt } from '../utils';
// import { FormField, outputField, Loader} from '../Components/';
import { FormField, Loader, OutputField, DownloadButton } from '../Components/';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    output: '',
  });
  

  const [generatingchat, setGeneratingchat] = useState(false);
  const [copyingchat, setCopyingchat] = useState(false);
  const [loading, setLoading] = useState(false);

 
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };


    // const handleSurpriseMe = () => {
    //   const randomPrompt = getRandomPrompt(form.prompt);
    //   setForm({...form, prompt: randomPrompt})
    // };


  const generatechat = async() => {
    
    const youtube_title_generator_prompt =  `I want you to act as a viral YouTube title creator. Think of titles that are catchy and attention-grabbing, and will encourage people to click and watch the video. The titles should be short, concise, and direct. They should also be creative and clever. Try to come up with titles that are unexpected and surprising. Do not use titles that are too generic, or titles that have been used too many times before. My video is about ${form.prompt}.`;   
      if(form.prompt){
        try {
       
          setGeneratingchat(true); 
          const response = await fetch('http://localhost:8080/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: youtube_title_generator_prompt,
            }),
          })
          const data = await response.json();
          setForm({ ...form, output: `${data.photo.content}` });
          // setForm({...form, photo: `data:image/jpeg;base64,${data.photo}` });
          
          // console.log(data);
          
          
        } catch (error) {
          alert(error);
        }finally{
          setGeneratingchat(false);
         
          
        }
      }else{
        alert('Please enter a prompt');
      }
  };

 
  // const handleSubmit = async(e) => {

  //   e.preventDefault();
  //   if(form.prompt && form.output) {
  //     setLoading(true);
  //     try {
  //       const response = await fetch('http://localhost:8080/api/v1/posted', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({...form}),

  //       });
  //       await response.json(); 
  //       alert('success')
  //       navigate('/');
  //     } catch (err) {
  //       alert(err);
  //     }finally{
  //       setLoading(false);
  //     }
  //   }else{
  //     alert('Please enter a prompt and generate an image');
  //   }
  // };

const clearHandler =()=>{
  
    setForm({ name: '', prompt: '', output: '' });
}
  
const copyToClipboard = (content) => {
  navigator.clipboard.writeText(content)
    .then(() => {
      console.log('Copied to clipboard:', content);      
      setCopyingchat(true);
      setTimeout(() => {
        setCopyingchat(false);
      }, 2000);
      // Optionally, you can show a success message or perform other actions
    })
    .catch((error) => {
      console.error('Failed to copy to clipboard:', error);
      // Handle any error that occurred during copying
    }) 
      
 
};

const handleCopyToClipboard = () => {
  copyToClipboard(form.output);
  
};


  return (
    <section className="max-w-7xl mx-auto">  
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]"> Create </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">
          Create imaginative and visually stunning images through by DALL-E AI
          and share them with the community
        </p>
        
      </div>

      <form className="mt-16 max-w-3xl" >
   
        <div className="flex flex-col gap-5">

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="enter a prompt"
            value={form.prompt}
            handleChange={handleChange}
          />
  
          {form.output ? (            
            <OutputField
            labelName="Output"
            type="text"
            name="output"
            value={form.output}
           
          />  
          ):(
            <OutputField
            labelName="Output"
            type="text"
            name="output"
            value={form.output}
           
          />  
         
            
          )}
           {generatingchat && (
            
                <Loader />
             
            )}
          {/* <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.chat}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/2 object-contain opacity-40"
              />
            )}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div> */}
         <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generatechat}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingchat ? "Generating..." : "Generate"}
          </button>
          <button
            type="button"
            onClick={clearHandler}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
          Clear
          </button>

          <button
        type="button"
        onClick={handleCopyToClipboard}
        className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
      {copyingchat ? "copied": "Copy to Clipboard"}
        
      </button>
     <DownloadButton data={form.output} fileName="output.txt" />
        </div>
        </div>
        </form>
  
    
    </section>
  );
};

export default CreatePost;