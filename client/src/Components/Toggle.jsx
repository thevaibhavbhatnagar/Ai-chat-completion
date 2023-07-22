import React from 'react';

const Toggle = ({ isDarkMode, toggleMode }) => {
  return (

    <div className="py-3">

    <button
      className= {`{rounded-full w-12 h-6 flex items-center justify-between p-1 bg-gray-400 dark:bg-gray-800 focus:outline-none  ${isDarkMode ? 'border border-white rounded-full w-12 h-6  dark:bg-gray-100' : 'rounded-full w-12 h-6 '
  }`}
      onClick={toggleMode}
    >
      <div
        className={`w-4 h-4 rounded-full  bg-white  transform duration-300 ${
          isDarkMode ? 'translate-x-6 bg-blue-500' : 'translate-x-1 '
        }`}
      ></div>
    </button>
    </div>
  );
};

export default Toggle;
