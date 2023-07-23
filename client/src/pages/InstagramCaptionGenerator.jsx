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

const InstagramCaptionGenerator = ({ isDarkMode }) => {
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

  const generatechat = async () => {
    const numCaptions = 5;

    const wordLimit = 90;

    let instagram_caption_generator_prompt = `Create captivating captions for your Instagram posts with the help of our AI Caption Generator. Craft unique and engaging captions that perfectly complement your photos and grab your audience's attention. Whether it's a funny anecdote, a thought-provoking quote, or a catchy phrase, let our AI inspire you to create amazing captions about ${form.prompt} that leave a lasting impression. Get ready to level up your Instagram game! 📸✨\n\nGenerate ${numCaptions} captions that are approximately ${wordLimit} words each:\n\n`;

    if (form.prompt) {
      try {
        setGeneratingchat(true);
        setIsHighTraffic(true);
        const response = await fetch("https://chat-completion.onrender.com/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: instagram_caption_generator_prompt }),
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



  const inputValue1 = "Goal Setting";
  const inputValue2 = "Time Management";
  const inputValue3 = "Happiness is homemade";
  const inputValue4 = "Tesla robot";
  const inputValue5 = "upcoming smartphone";
  const inputValue6 = "innovations";
  const setInputValueHandler = (event, inputValue) => {
    event.preventDefault();
    setForm({ ...form, prompt: `${inputValue}` });
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
          Instagram Caption Generator{" "}
        </h1>
        <p
          className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          AI Generated Captions
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

      <form className="flex flex-col mt-8 max-w-3xl min-h-[400px]">
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
          ) : (
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

              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">Sample data : upcoming smartphone</div>
              <div className="flex flex-col w-full bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3 my-5">
              
                <div className="flex flex-col gap-3 my-5">
                1. "Introducing the future in the palm of your hand! 🌟 Brace yourself for the groundbreaking innovations packed into our upcoming smartphone. From stunning displays to lightning-fast performance, this device is a game-changer. Get ready to experience the power of technology like never before. Stay tuned for the launch and be among the first to hold the future of smartphones in your hands. 📱✨ #ComingSoon #NextLevelTech"
                </div>
                <div className="flex flex-col gap-3 my-5">
                2. "In a world where technology meets elegance, our upcoming smartphone takes the center stage.🌟 With its sleek design and premium features, it's more than just a device, it's a statement. Capture unforgettable moments with its impressive camera capabilities and enjoy seamless multitasking with its powerful performance. Get ready to redefine your smartphone experience and amplify your style. 📸💫 #ElevateYourGame #SmartphoneRevolution"                </div>
                <div className="flex flex-col gap-3  my-5">

                3. "Calling all tech enthusiasts! 📢 Brace yourselves for the arrival of our upcoming smartphone that's set to redefine the boundaries of innovation. From its futuristic design to its cutting-edge features, this device is a testament to engineering excellence. Get ready to immerse yourself in a world of endless possibilities and elevate your smartphone experience to new heights. Stay tuned for more updates and get ready to be inspired. 🚀✨ #InnovationUnleashed #TechEnthusiast"
                </div>
                <div className="flex flex-col gap-3 my-5">
                4. "Unleash your creativity like never before with our upcoming smartphone. 🎨🌟 From breathtaking photography to seamless video editing, this device is a game-changer for content creators. Captivate your audience with stunning visuals and craft meaningful stories with ease. Stay tuned for the launch and get ready to unlock your full creative potential. 📷✨ #CreatorsParadise #UnleashYourPassion"
                </div>
                <div className="flex flex-col gap-3 my-5">
                5. "Get ready to embark on an immersive journey with our upcoming smartphone. 🌌✨ From its vibrant display to its powerful audio capabilities, this device is your ticket to a world of entertainment. Stream your favorite shows, play games like never before, and lose yourself in cinematic experiences. Whether you're a movie lover or a gaming enthusiast, this is the smartphone you've been waiting for. Stay tuned for more updates and prepare to be blown away. 🎮🔥 #EntertainmentEvolved #ImmersiveExperience"                </div>
                
              </div>
            </div>
          )}

        



        </div>
      </form>
    </section>
  );
};

export default InstagramCaptionGenerator;
