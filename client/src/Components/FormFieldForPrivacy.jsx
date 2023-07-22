import React, {useState} from "react";
import Loader from "./Loader";
const FormFieldForPrivacy = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  isDarkMode,
  generatechat,
  generatingchat,
  setForm 
 
   

}) => {
  // const FormField = (props) => {
     
    
  const [ClearChat, setClearChat] = useState(false); 
   const [inputBtnChange, setinputBtnChange] = useState('');
  const clearHandler =()=>{
  
    setForm({ name: '', prompt: '', output: '' ,  companyName: '',
    siteUrl: '',});
    
    setClearChat(true);
    setTimeout(() => {
      setClearChat(false);
    }, 2000);

}
const handleChanger = (event) => {
  const { name, value } = event.target;
  setForm((prevForm) => ({ ...prevForm, [name]: value }));
  setinputBtnChange(event.target.value);

};


  return (
    <div >
     <div className={`flex flex-row flex-1 items-center gap-2 py-2`}>
    
        <label
          htmlFor={name}
           className={`flex flex-row  items-center gap-2 py-2 text-[1.1em]`}
        >
          {labelName}
        </label>  
        <button className="" onClick={clearHandler}>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={ClearChat ? (isDarkMode ? 'blue' : 'blue') : (isDarkMode ? 'white' : 'black')}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" h-5 w-6"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
       </button>
       
       </div>
      
   
       <div className="flex" >
      <input
        type={type} 
        id={value.prompt}
        name={name}
        placeholder={placeholder}
        value={value.prompt}
        onChange={handleChanger}
        required
        // className={`{flex flex-col w-full py-[10px] flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-gray-700 dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-xs hover:border-gray-100 dark:shadow-xs ${isDarkMode ? 'text-gray-200 bg-gray-700' : 'text-gray-700 bg-gray-200'}`}
        className={`{mr-2 border-gray-300 text-sm rounded-l-lg  focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 ${isDarkMode ? ' bg-gray-700 text-gray-50' : 'text-gray-700 bg-gray-200'}`}
      />
     </div>
   
     <div className="flex flex-col gap-3">
      <label
          htmlFor={name}
          className=""
        >
          Company Name
        </label> 
       
   
        <input
        type={type} 
        id={value.companyName}
        name="companyName"
        placeholder="enter a company name"
        value={value.companyName}
        onChange={handleChanger}
        className={`{mr-2 border-gray-300 text-sm rounded-l-lg  focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 ${isDarkMode ? ' bg-gray-700 text-gray-50' : 'text-gray-700 bg-gray-200'}`}
      />
       
       {value ? 
        <button
            type="button"
            onClick={generatechat}
            // className={`{ border-gray-300 text-sm rounded-l-lg  focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 ${isDarkMode ? ' bg-gray-700 text-gray-50' : 'text-gray-700 bg-gray-200'}`}

            className={`text-white font-medium rounded-md text-sm fixed-sm:w-full px-4 py-3 text-center ${
              inputBtnChange ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-blue-700 text-white '}`}
          >
           
            {/* {generatingchat ? "Generating..." : "Generate"} */}
            {generatingchat ?    <Loader />
      : "Re-Generate"}
          </button> : <></>
               
        }
  
    </div>
   
    </div>
  
  );
};

export default FormFieldForPrivacy;
