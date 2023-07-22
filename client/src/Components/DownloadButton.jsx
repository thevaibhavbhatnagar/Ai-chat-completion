import React, { useState } from "react";

function DownloadButton({ data, fileName, isDarkMode }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleDownload = (e) => {
    e.preventDefault();

    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;

    link.click();

    URL.revokeObjectURL(url);
    link.remove();
    setIsBtnClicked(true);
    setTimeout(() => {
      setIsBtnClicked(false);
    }, 2000);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  return (
    <button type="button" onClick={handleDownload} className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        stroke={
          isBtnClicked
            ? isDarkMode
              ? "blue"
              : "blue"
            : isDarkMode
            ? "white"
            : "black"
        }
        className="h-6 w-6 text-gray-900 cursor-pointer"
       
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>

      <div className={`copy-button ${isHovered ? "visible" : "invisible"}`} 
        style={{ position: "float" }}
      >
        {isBtnClicked ? "Exported!" : "Export"}
        
      </div>
    </button>
  );
}

export default DownloadButton;
