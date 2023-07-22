import React, { useRef, useState, useEffect } from "react";
import Loader from "./Loader";
import { DownloadButton } from "../Components";
const OutputField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isDarkMode,
  generatingchat,
  setForm,
}) => {
  const [copyingchat, setCopyingchat] = useState(false);
  const [clearChat, setClearChat] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [isHoveredClear, setIsHoveredClear] = useState(false);

  // copy code start
  const inputRef = useRef(null);
  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };
  // copy code end

  // const handleCopyCode = () => {
  //   inputRef.current.select();
  //   document.execCommand("copy");
  //   setCopyingchat(true);
  //   setTimeout(() => {
  //     setCopyingchat(false);
  //   }, 2000);
  // };

  const handleCopyCode = () => {
    const inputElement = inputRef.current;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(inputElement);
    selection.removeAllRanges();
    selection.addRange(range);
  
    document.execCommand("copy");
  
    setCopyingchat(true);
    setTimeout(() => {
      setCopyingchat(false);
      selection.removeAllRanges();
    }, 2000);
  };
  const clearHandler = () => {
    setForm({ name: "", prompt: "", output: "", authorName: "" });
    setCopyingchat(false);
    setClearChat(true);
    setTimeout(() => {
      setClearChat(false);
    }, 2000);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseLeaveClear = () => {
    setIsHoveredClear(false);
  };
  const handleMouseEnterClear = () => {
    setIsHoveredClear(true);
  };

  const [textData, setTextData] = useState(value);

  const handleChanger = (event) => {
    setTextData(event.target.innerText);
  };
  const stopScrolling = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div
        className={`flex flex-row items-center relative px-4 py-5 text-xs font-sans justify-between rounded-t-md ${
          isDarkMode ? " bg-gray-700 text-gray-50" : "bg-gray-200 text-gray-800"
        }`}
      >
        <span className="text-[1.1rem]">{labelName}</span>
        <div className="flex flex-row gap-4 mr-5 ">
          {value ? (
            <div className="flex flex-row gap-4">
              <button type="button" onClick={clearHandler} className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={
                    clearChat
                      ? isDarkMode
                        ? "blue"
                        : "blue"
                      : isDarkMode
                      ? "white"
                      : "black"
                  }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-gray-900 cursor-pointer"
                  onMouseEnter={handleMouseEnterClear}
                  onMouseLeave={handleMouseLeaveClear}
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <div
                  className={`copy-button ${
                    isHoveredClear ? "visible" : "invisible"
                  }`}
                  style={{ position: "float" }}
                >
                  {clearChat ? "Cleared!" : "Clear"}
                </div>
              </button>
              <DownloadButton
                data={value}
                isDarkMode={isDarkMode}
                fileName="output.txt"
              />
              <button type="button" onClick={handleCopyCode} className="">
                <svg
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  stroke={
                    copyingchat
                      ? isDarkMode
                        ? "blue"
                        : "blue"
                      : isDarkMode
                      ? "white"
                      : "black"
                  }
                  className="h-6 w-6 text-gray-900 cursor-pointer"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                </svg>
                <div
                  className={`copy-button ${
                    isHovered ? "visible" : "invisible"
                  }`}
                  style={{ position: "float" }}
                >
                  {copyingchat ? "Copied!" : "copy text"}
                </div>
              </button>{" "}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {generatingchat ? (
        <div
          className={`overflow-y-hidden flex flex-row pl-3 rounded-b-lg ${
            isDarkMode
              ? "bg-gray-700 text-gray-50"
              : "text-gray-700 bg-gray-200"
          }`}
        >
          <div className="flex flex-row m-2">
            <Loader />

            <div className="text-base pb-2">Generating...</div>
          </div>
          {/* <textarea
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className={`text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-5 resize-none rounded-b-lg ${
              isDarkMode
                ? "bg-gray-700 text-gray-50"
                : "text-gray-700 bg-gray-200"
            }`}
            ref={inputRef}
            style={{ height: "20em" }} // Adjust the height as per your preference
          /> */}
          <div
            onWheel={stopScrolling} // Prevent scrolling using the scroll wheel
            style={{ overflow: "hidden" }} // Hide overflow to prevent scrolling
          />
          <div
            id={name}
            name={name}
            placeholder={placeholder}
            onInput={handleChange} // Use onInput instead of onChange for contentEditable elements
            required
            className={`text-sm  focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-5 resize-none rounded-b-lg ${
              isDarkMode
                ? "bg-gray-700 text-gray-50"
                : "text-gray-700 bg-gray-200"
            }`}
            ref={inputRef}
            style={{
              height: "20em",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
            contentEditable="true"
            dangerouslySetInnerHTML={{ __html: textData }}
          />
        </div>
      ) : (
        <div
          className={`overflow-y-hidden pl-3 rounded-b-lg ${
            isDarkMode
              ? "bg-gray-700 text-gray-50"
              : "text-gray-700 bg-gray-200"
          }`}
        >
          {/* <textarea
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
            className={`text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-5 resize-none rounded-b-lg ${
              isDarkMode
                ? "bg-gray-700 text-gray-50"
                : "text-gray-700 bg-gray-200"
            }`}
            ref={inputRef}
            style={{ height: "20em" }} // Adjust the height as per your preference
          /> */}
          <div
            id={name}
            name={name}
            placeholder={placeholder}
            className={`text-sm focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-5 resize-none rounded-b-lg ${
              isDarkMode
                ? "bg-gray-700 text-gray-50"
                : "text-gray-700 bg-gray-200"
            }`}
            ref={inputRef}
            style={{
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
            }}
          >
            {value}
          </div>
        </div>
      )}
    </div>
  );
};

export default OutputField;
