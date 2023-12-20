import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Aside, Home } from "./components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [showAside, setShowAside] = useState(false);
  const [showWork, setShowWork] = useState(false);
  return (
    <BrowserRouter>
      <div className="h-screen bg-gray-50">
        {!showAside && (
          <button
            class="left-10 top-5 cursor-pointer duration-200 hover:scale-125 active:scale-100 bg-white absolute"
            title="Go Back"
            onClick={() => {
              setShowAside(!showAside);


            }}

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              class="stroke-blue-300 rotate-180"

            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M11 6L5 12M5 12L11 18M5 12H19"
              ></path>
            </svg>
          </button>
        )}
        <Aside showAside={showAside} setShowAside={setShowAside} />
        <Home showAside={showAside} setShowAside={setShowAside} />
      </div>
    </BrowserRouter>
  );
};

export default App;