import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


import { getRandomPrompt } from '../utils';
import { FormField, Loader, OutputField,FormFieldForScript, DownloadButton, HighTrafficMessage,FormFieldForBook } from '../Components';
import { PasteInd } from '../assets';

// import { copyToClipboard } from 'utils/clipboard';

const BookSummaryGenerator = ({isDarkMode}) => {
    
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    output: '',
    authorName: '',
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
    
 
    
    // const book_summary_generator_prompt = `Book Summary Generator**\n\n**Prompt:** Generate a summary for any book based on the input of the book's name : ${form.prompt} and author name :${form.authorName} .\n\n**Description:** This Book Summary Generator is designed to provide you with a concise summary of any book you choose. By inputting the book's title and author, the generator will analyze the book's content and generate a summary that captures its essence. Whether you're looking to gain a quick overview of a book or seeking insights before delving into a new read, this generator will help you get a glimpse of the key points and themes covered in the book. Simply enter the book's name and author to generate your personalized book summary`

     const book_summary_generator_prompt = `**Book Summary Generator**

**Heading:** Generate a summary for any book
**Subheading:** Input the book's name and author to generate a summary

**Prompt:** Generate a summary for the book "${form.prompt}" by ${form.authorName}

**Description:** This Book Summary Generator is designed to provide you with a concise summary of any book you choose. By inputting the book's title and author, the generator will carefully analyze the book's content, extracting its core ideas and themes. Whether you're seeking a quick overview or in-depth insights before diving into a new read, this generator will help you grasp the key points covered in the book. By summarizing the book's essence, you can gain valuable knowledge and perspective. Simply enter the book's name and author to generate your personalized book summary and embark on a journey of discovery.

**Highlighted Quotes:**
- "Quote 1"
- "Quote 2"
- "Quote 3"
`;



      if(form.prompt){
        try {
          setIsHighTraffic(true);
          setGeneratingchat(true); 
          const response = await fetch('https://chat-completion.onrender.com/api/v1/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({prompt: book_summary_generator_prompt,
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

  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section className=" flex flex-col max-w-7xl">  
    <div>
    {isLargeScreen &&( 
    <>

      <h1 className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>  Book Summary Generator</h1>
      <p className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${isDarkMode ? 'text-gray-200' : 'text-gray-900'}`}>
      Don't have time to read? Our Book Summary Generator extracts key insights, so you can conquer more books and emerge well-informed.
      </p>
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
        
          <FormFieldForBook
          labelName="Book Name"
          type="text"
          name="prompt"
          placeholder="enter a book name (ex: Think and Grow Rich)"
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

export default BookSummaryGenerator;
