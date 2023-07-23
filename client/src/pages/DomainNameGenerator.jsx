import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

import { getRandomPrompt } from "../utils";
import {
  FormField,
  Loader,
  OutputField,
  DownloadButton,
  HighTrafficMessage,
} from "../Components";
import { PasteInd } from "../assets";

// import { copyToClipboard } from 'utils/clipboard';

const DomainNameGenerator = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    output: "",
  });

  const [generatingchat, setGeneratingchat] = useState(false);
  const [copyingchat, setCopyingchat] = useState(false);
  const [inputBtnChange, setinputBtnChange] = useState("");
  const [isHighTraffic, setIsHighTraffic] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);
  };
  const inputValue1 = "GenAiVille.com";
  const inputValue2 = "Generative AI";
  const inputValue3 = " DriveWiseMotors.com";
  const inputValue4 = " Write Wave";
  const inputValue5 = "ScienceXplore.com";
  const inputValue6 = "Science Sphere";
  const setInputValueHandler = (event, inputValue) => {
    event.preventDefault();
    setForm({ ...form, prompt: `${inputValue}` });
  };

  const generatechat = async () => {
    const domain_name_generator_prompt = `Imagine you're starting a new business or launching a website. Your task is to come up with a creative and memorable domain name for your ${form.prompt}. The domain name should reflect the nature of your sale and be relevant to your target audience. Please provide me description of each domain name based on my domain name ${form.prompt}. Based on your input, I will generate 5  unique and available domain name suggestions for you. Let's get started!.`;

    if (form.prompt) {
      try {
        setIsHighTraffic(true);
        setGeneratingchat(true);
        const response = await fetch("https://chat-completion.onrender.com/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: domain_name_generator_prompt }),
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
          Domain Name Generator{" "}
        </h1>
        <p
          className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Get the perfect domain name for your website in seconds with our
          Domain Name Generator.
        </p>
      </>)}
        <div className="text-gray-800">
          {isHighTraffic ? (
            <HighTrafficMessage
              isHighTraffic={isHighTraffic}
              isDarkMode={isDarkMode}
            />
          ) : (
            <></>
          )}
        </div>
      </div>

      <form className="flex flex-col mt-8 max-w-3xl min-h-[400px]">
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="enter a prompt : (ex: summer sales, gym, and hotels)"
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
          ) : (
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
              
                <div className="flex flex-col gap-3 ">
                  <div className="font-bold my-3">
                    Domain Name #1: "WriteWaveWordsmiths.com"
                  </div>
                  Description: This domain name emphasizes the professional
                  aspect of the business, appealing to those looking for skilled
                  writers and content creators. "Wordsmiths" implies
                  craftsmanship and mastery of the written word, a perfect fit
                  for clients seeking high-quality work.
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold my-5">Domain Name #2: "WaveOfWriting.com"</div>
                  Description: This domain name takes a more metaphorical
                  approach, evoking the idea of a "wave" of creativity and
                  inspiration in writing. It captures the dynamic and fluid
                  nature of the writing process, appealing to those who want to
                  ride the wave and express their ideas eloquently.
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold my-5">
                    Domain Name #3: "CreativeWriterWave.com"
                  </div>
                  Description: This domain name highlights the creativity and
                  innovation aspect of the business. It suggests a community of
                  writers riding a wave of inspiration and pushing the
                  boundaries of their craft. This domain name would particularly
                  resonate with aspiring writers looking for a supportive and
                  stimulating environment.
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold my-5">
                    Domain Name #4: "InkWaveConnection.com"
                  </div>
                  Description: This domain name connects the idea of writing
                  with the concept of waves, making it suitable for a website
                  that focuses on building connections among writers. It
                  suggests a platform where writers come together to share
                  ideas, collaborate, and support each other in their writing
                  journeys.
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold my-5">Domain Name #5: "ExpressiveWave.com"</div>
                  Description: This domain name emphasizes the power of
                  self-expression through writing. It evokes the image of riding
                  a wave of creativity to translate thoughts and emotions into
                  compelling written works. This domain name would resonate with
                  individuals seeking a platform to freely express themselves
                  and share their unique perspectives.
                </div>
                Please let me know if you would like more ideas or if you need
                assistance with anything else.
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default DomainNameGenerator;
