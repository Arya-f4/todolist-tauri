import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import {
  logo,
  home,
  vector,
  briefcase,
  trending,
  plussquare,
  barchart,
} from "../assets";
import "../App.css";

const hideAside = {
  transform: 'translateX(-100%)'
};
const Aside = ({ showAside, setShowAside }) => {

  const [showWork, setShowWork] = useState(false);
  /* const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));
  const toggleSidebar = () => setOpen((prev) => !prev);
  */ if (setShowWork == true) {
    setShowHome(false);

  }
  return (

    showAside && (
      <aside id="default-sidebar" className={`transform translate-x-0 transition-transform duration-200 ease-in-out ${showAside ? 'slide-in' : 'slide-out'}`} >

        <div className="flex w-full md:w-[270px]  h-screen gap-[60px] p-[20px] bg-white flex-col items-start absolute">

          <div className="inline-flex items-center gap-[60px] relative mr-[-11.00px]">
            <img className="relative " alt="Logo" src={logo} />
            <button
              className="cursor-pointer duration-200 hover:scale-125 active:scale-100 bg-white"
              title="Close Aside"
              onClick={() => setShowAside(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                className="stroke-blue-300"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M11 6L5 12M5 12L11 18M5 12H19"
                ></path>
              </svg>
            </button>
          </div>

          <ul>
            <div className="inline-flex flex-col items-start gap-[20px] relative mr-[-20.00px]">
              <li>
                <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#0038ff] text-[33px] md:text-[24px] tracking-[0.72px] leading-[normal]">
                  Main
                </div>
              </li>
              <div className="flex flex-col w-[212px] items-start gap-[30px] relative ">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-100  group"
                  >
                    <div className=" flex  self-stretch w-full backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)] items-center gap-[10px] relative flex-[0_0_auto]">
                      <img
                        src={home}
                        className="relative w-[18px] h-[18px]"
                        alt="Home"
                      />

                      <div className="relative flex-1 mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#282846] text-[25px] md:text-[16px] tracking-[0.40px] leading-[normal]">
                        Home
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <button
                    onClick={() => setShowWork(true)}
                    className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-100  group"
                  >
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                      <img
                        className="relative w-[18px] h-[18px]"
                        alt="Briefcase"
                        src={briefcase}
                      />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#282846] text-[25px] md:text-[16px] tracking-[0.40px] leading-[normal]">
                        Work
                      </div>
                    </div>
                  </button >
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-100  group"
                  >
                    <div className="inline-flex items-center gap-[10px] relative ">
                      <img
                        className="relative w-[18px] h-[18px]"
                        alt="Zap"
                        src={vector}
                      />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#282846] text-[25px] md:text-[16px] tracking-[0.40px] leading-[normal]">
                        Sport
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="inline-flex items-center gap-[10px] relative ">
                    <img
                      className="relative w-[20px] h-[20px]"
                      alt="Plus square"
                      src={plussquare}
                    />
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#0038ff] text-[25px] md:text-[16px] tracking-[0.40px] leading-[normal]">
                      Add
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
          <div className="inline-flex flex-col items-start gap-[20px] relative ">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#0038ff] text-[33px] md:text-[24px] tracking-[0.72px] leading-[normal]">
              Data
            </div>
            <div className="inline-flex gap-[30px]  flex-col items-start relative">
              <a href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-100  group">
                <div className="inline-flex items-center gap-[10px] relative ">
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt="Bar chart"
                    src={barchart}
                  />
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#282846] text-[25px] md:text-[16px] tracking-[0] leading-[normal]">
                    Statistics
                  </div>
                </div>
              </a><a href="#"
                className="flex items-center p-2 text-gray-200 rounded-lg dark:text-white hover:bg-gray-100  group">
                <div className="inline-flex items-center gap-[10px] relative ">
                  <img
                    className="relative w-[18px] h-[18px]"
                    alt="Trending up"
                    src={trending}
                  />
                  <div className="relative sm: md:w-[85px] mt-[-1.00px] [font-family:'Nunito-Regular',Helvetica] font-normal text-[#282846] text-[25px] md:text-[16px] tracking-[0.40px] leading-[normal]">
                    Compare
                  </div>
                </div>
              </a>
            </div>
          </div>
          <br></br>
        </div>

      </aside >
    )
  );
};

export default Aside;
