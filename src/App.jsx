import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Aside, Home } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [showAside, setShowAside] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showHome, setShowHome] = useState(true);

  return (
    <BrowserRouter>

      <div className="h-screen w-screen bg-gray-50">
        {!showAside && (
          <button
            className="left-10 top-5 cursor-pointer duration-200 hover:scale-125 active:scale-100 bg-white absolute"
            title="Show aside"
            onClick={() => {
              setShowAside(!showAside);


            }}

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              className="stroke-blue-300 rotate-180"

            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19"
              ></path>
            </svg>
          </button>
        )}
        <div className="sm:absolute md:relative">
          <Aside showAside={showAside} setShowAside={setShowAside} />
        </div>
        <div className="sm:relative md:absolute">
          {showHome && <Home showAside={showAside} setShowAside={setShowAside} />}

        </div>
      </div>

    </BrowserRouter>

  );
};

export default App;