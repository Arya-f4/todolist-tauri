import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

const Work = () => (
  < div className="justify-start items-start flex" >
    <button className="px-6 py-2.5 bg-blue-700 rounded-lg justify-center items-center gap-2.5 flex hover:bg-white hover:border-r-blue-700 active:bg-black">
      <div className="w-4 h-4 relative"></div>
      <div className="text-neutral-50 text-base font-semibold font-['Nunito'] tracking-tight">
        New Task
      </div>
    </button>
  </div >
);
export default Work;