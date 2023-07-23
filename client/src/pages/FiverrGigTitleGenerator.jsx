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

const FiverrGigTitleGenerator = ({ isDarkMode }) => {
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
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setinputBtnChange(event.target.value);
  };

  const generatechat = async () => {
    const Fiverr_Gig_title_generator_prompt = `You are a professional Fiverr Gig Description Generator. Provide a compelling gig description based on the topic provided by the user. Your goal is to attract potential buyers and convince them to hire your services. Write a gig description that highlights the benefits, expertise, and unique selling points related topic is  ${form.prompt} Ensure the description is engaging, persuasive, and showcases your professionalism. Generate 3 Fiverr Gig Description Generator.`;
    if (form.prompt) {
      try {
        setIsHighTraffic(true);
        setGeneratingchat(true);
        const response = await fetch("https://chat-completion.onrender.com/api/v1/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: Fiverr_Gig_title_generator_prompt }),
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
  const inputValue1 = "Website Development";
  const inputValue2 = "Logo Design";
  const inputValue3 = "Graphic Design";
  const inputValue4 = "Content Writing";
  const inputValue5 = "E-commerce Product Photography";
  const inputValue6 = "Online Tutoring";
  const setInputValueHandler = (event, inputValue) => {
    event.preventDefault();
    setForm({ ...form, prompt: `${inputValue}` });
  };

  return (
    <section className=" flex flex-col max-w-7xl">
      <div>
      {isLargeScreen &&( <>

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
              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">
                Examples
              </div>
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

              <div className="my-5 text-[#4649ff] font-bold text-[1.3rem]">
                Sample data: E-commerce Product Photography
              </div>
              <div className="flex flex-col w-full bg-gray-200 dark:bg-white/5   rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 p-3 my-5">
                <div className="flex flex-col gap-3 ">
                  <div className="font-bold my-3">Gig Description 1:</div>
                  Are you looking to boost sales on your e-commerce platform?
                  Look no further! I am a professional product photographer with
                  extensive experience in e-commerce product photography. I
                  specialize in capturing your products in the best light to
                  make them stand out from the competition.
                  <div className="">
                    With my expertise, I can help you create eye-catching images
                    that will grab the attention of potential buyers and
                    increase conversion rates. From jewelry to electronics, I
                    have the skills to capture the essence of your products and
                    highlight their unique selling points.
                  </div>
                  <div className="">
                    By hiring me, you'll receive high-quality images that not
                    only showcase your products but also tell a story. I
                    understand the importance of consistency in e-commerce, and
                    I ensure that all your product images align with your brand
                    image.
                  </div>
                  Don't settle for average product photos! Let me take your
                  e-commerce business to the next level by providing you with
                  exceptional product photography. Place your order now and see
                  the difference it makes in your sales!
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold my-5">Gig Description 2:</div>
                  Looking to make an impact in the competitive world of
                  e-commerce? Look no further! As an expert e-commerce product
                  photographer, I possess the skills to capture stunning and
                  professional images that will give your products the
                  visibility they deserve.
                  <div className="">
                    I am well-versed in the art of product photography and know
                    exactly how to showcase your items in the best possible
                    light. Whether it is clothing, accessories, electronics, or
                    homeware, I understand the importance of capturing the
                    intricate details that make your products unique.
                  </div>
                  <div className="">
                    By using my service, you'll receive top-quality images that
                    will enhance your customers' online shopping experience.
                    Highlighting your products' features and benefits, my images
                    will entice potential buyers and increase your sales.
                  </div>
                  <div className="">
                    With a keen eye for composition, lighting, and product
                    placement, I ensure that your images are aesthetically
                    pleasing and align with your brand identity. Let me be your
                    go-to photographer for captivating e-commerce product
                    images.
                  </div>
                  <div className="">
                    Ready to take your online store to new heights? Trust my
                    expertise and let your products shine! Order now to provide
                    your customers with irresistible visuals they won't be able
                    to resist.
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="font-bold my-5">Gig Description 3:</div>
                  <div className="">
                    In the competitive world of e-commerce, having high-quality
                    product images is crucial to attract customers and boost
                    your sales. Look no further! I am a skilled e-commerce
                    product photographer ready to showcase your products in the
                    best possible light.
                  </div>
                  <div className="">
                    In the competitive world of e-commerce, having high-quality
                    product images is crucial to attract customers and boost
                    your sales. Look no further! I am a skilled e-commerce
                    product photographer ready to showcase your products in the
                    best possible light.
                  </div>
                  <div className="">
                    With my expert eye for detail and understanding of marketing
                    psychology, I know how to create captivating images that
                    grab attention and increase conversions. Whether it's
                    lifestyle shots, close-ups, or creative compositions, I
                    tailor each image to suit your brand and target audience.
                  </div>
                  <div className="">
                    By hiring me, you'll receive professional product
                    photography that elevates your online store. From product
                    listings to social media campaigns, my images will give your
                    brand a polished and professional look, leaving a lasting
                    impression on potential buyers.
                  </div>
                  I pride myself on delivering exceptional customer service and
                  ensuring your complete satisfaction. I work closely with you
                  to fully understand your vision and goals, ensuring that the
                  final product exceeds your expectations.
                  <div className="">
                    Ready to take your e-commerce business to new heights? Don't
                    settle for mediocre product images that fail to engage.
                    Choose me as your dedicated photographer and watch as your
                    sales soar! Place your order now to start attracting more
                    customers with stunning product photography.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default FiverrGigTitleGenerator;
