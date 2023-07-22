import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';
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
import {PromptTable} from "../Components";

const LongTailKeyword = ({ isDarkMode }) => {
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
    

    const LongTailKeyword_prompt = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(ReactDOMServer.renderToStaticMarkup(<PromptTable />));
      }, 0);
    });
    if (form.prompt) {
      try {
        setIsHighTraffic(true);
        setGeneratingchat(true);
        const response = await fetch("http://localhost:8080/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: LongTailKeyword_prompt }),
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

  return (
    <section className=" flex flex-col max-w-7xl">
      <div>
        <h1
          className={`font-extrabold text-[#222328] text-[32px] py-[5px] ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Fiverr Gig Title Generator
        </h1>
        <p
          className={`{mt-2 text-[#666e75] text-[16px] max-w[500px] hidden sm:block  ${
            isDarkMode ? "text-gray-200" : "text-gray-900"
          }`}
        >
          Find the Perfect Freelancer for Your Project with Fiverr. Hire Top
          Talent Today and Get Results. Affordable and Efficient Gig Services.
          Boost Your Business Now!
        </p>
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
        </div>
      </form>
    </section>
  );
};

export default LongTailKeyword;
