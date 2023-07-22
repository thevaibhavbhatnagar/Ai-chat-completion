import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
const Footer = ({isDarkMode}) => {
  return (
    <footer className={`{justify-self-end pt-16 pb-8 lg:pt-24 lg:pb-10 ${
        isDarkMode ? " bg-gray-800 text-gray-50" : "bg-white text-gray-800"
      }`}>
      <div className="grid gap-12 lg:grid-cols-6 lg:gap-2 p-[35px]">
        <div className="col-span-2 ">
          <a className="flex mb-6" href="/">
            <span
              style={{
                boxSizing: "border-box",
                display: "inline-block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: "0px",
                margin: "0px",
                padding: "0px",
                position: "relative",
                maxWidth: "100%",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: "0px",
                  margin: "0px",
                  padding: "0px",
                  maxWidth: "100%",
                }}
              >
                <img
                  alt=""
                  aria-hidden="true"
                  src="https://flowbite.com/docs/images/logo.svg"
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                  }}
                />
              </span>
              <img
                alt="Flowbite Logo"
                src=""
                decoding="async"
                data-nimg="intrinsic"
                style={{
                  position: "absolute",
                  inset: "0px",
                  boxSizing: "border-box",
                  padding: "0px",
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: "0px",
                  height: "0px",
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
                srcSet="https://flowbite.com/docs/images/logo.svg 1x, /images/logo.svg 2x"
              />
            </span>
            <span className="self-center ml-3 text-2xl font-semibold text-gray-900 dark:text-white">
              Flowbite
            </span>
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-justify pr-20 ">
          Welcome to FreeAikits, your ultimate AI-powered creative companion! 
          <div className="mt-2">

          At FreeAikits, we are passionate about unleashing the power of artificial intelligence to fuel your creativity and innovation. 
          </div>
          </p>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
            Resources
          </h3>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                // href="https://flowbite.com/docs/getting-started/introduction/"
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
              >
                Documentation
              </a>
            </li>
            {/* <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/blocks/"
              >
                Flowbite Blocks
              </a>
            </li>
            <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/icons/"
              >
                Flowbite Icons
              </a>
            </li> */}
            <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/figma/"
              >
                Figma design
              </a>
            </li>
            <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/pro/"
              >
                Pro version
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
            Help &amp; support
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/contact/"
              >
                Contact us
              </a>
            </li>
            <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/dashboard/support/"
              >
                Support Center
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
            Follow us
          </h3>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                // href="https://discord.gg/4eeurUVvTy"
                rel="noreferrer nofollow"
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
              >
                Discord
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                // href="https://github.com/themesberg"
                rel="noreferrer nofollow"
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
              >
                Github
              </a>
            </li>
            <li className="mb-4">
              <a
               href="#"
                // href="https://twitter.com/zoltanszogyenyi"
                rel="noreferrer nofollow"
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">
            Legal
          </h3>
          <ul>
            {/* <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/license/"
              >
                License (EULA)
              </a>
            </li> */}
            <li className="mb-4">
              <Link
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                to="/privacy-policy-generator/"
              >
                Privacy policy
              </Link>
            </li>
            <li className="mb-4">
              <Link
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                to="/terms-and-conditions/"
              >
                Terms &amp; conditions
              </Link>
            </li>
            {/* <li className="mb-4">
              <a
                className="font-medium text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                href="/brand/"
              >
                Brand guideline
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
