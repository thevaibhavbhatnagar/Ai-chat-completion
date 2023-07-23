import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { getRandomPrompt } from "../utils";
import {
  FormField,
  Loader,
  OutputField,
  FormFieldForScript,
  DownloadButton,
  HighTrafficMessage,
  FormFieldForsubject
} from "../Components";
import { PasteInd } from "../assets";

// import { copyToClipboard } from 'utils/clipboard';

const EmailSubjectLineGenerator = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    output: "",
    Keywords: "",
  });

  const [generatingchat, setGeneratingchat] = useState(false);
  const [copyingchat, setCopyingchat] = useState(false);
  const [isHighTraffic, setIsHighTraffic] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);
  };

  const generatechat = async () => {
    const email_subjectline_generator_prompt = `You are a marketing professional looking for inspiration to generate compelling email subject lines for an upcoming campaign. You decide to use an AI-powered Email Subject Line Generator to help you come up with creative and engaging subject lines. Below, you will find the Email Subject Line Generator, which can generate unique subject lines based on the provided theme and keywords. Email Subject Line Generator: Theme: ${form.prompt} Keywords: ${form.Keywords} Generated 5 Subject Lines`;
    if (form.prompt) {
      try {
        setIsHighTraffic(true);
        setGeneratingchat(true);
        const response = await fetch("https://chat-completion.onrender.com/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: email_subjectline_generator_prompt }),
        });
        const data = await response.json();
        setForm({ ...form, output: `${data.photo.content}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingchat(false);
        setIsHighTraffic(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <section className=" flex flex-col max-w-7xl">
      <div>
      {isLargeScreen &&( 
      <>

        <h1
          className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          {" "}
          Email Subject Line Generator{" "}
        </h1>
        <p
          className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >        
          Generate Effective Subject Lines With AI
        </p>
      </>)}
        <div className="text-gray-800">
          {isHighTraffic ? (
            <HighTrafficMessage isHighTraffic={isHighTraffic} />
          ) : (
            <></>
          )}
        </div>
      </div>

      <form className="flex flex-col mt-8 max-w-3xl min-h-[400px]">
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
          ) : (
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

          <FormFieldForsubject
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

export default EmailSubjectLineGenerator;
