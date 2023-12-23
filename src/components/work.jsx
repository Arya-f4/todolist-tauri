import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { aside } from "../components";
const Work = () => (
  <div className="w-[1065px] h-[716px] flex-col justify-start items-start gap-[30px] inline-flex">
    <div className="h-[476px] p-5 bg-white rounded-[10px] shadow flex-col justify-start items-start gap-5 flex">
      <div className="w-[526px] justify-between items-center inline-flex">
        <div className="text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">Active tasks</div>
      </div>
      <div className="h-[227px] flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-[50px] px-[68px] py-[15px] bg-teal-500 bg-opacity-0 rounded-[10px] border border-slate-800 border-opacity-10 justify-end items-center gap-7 flex">
            <div className="w-5 h-5 rounded border border-blue-700" />
            <div className="grow shrink basis-0 text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">To water flowers</div>
            <div className="w-[18px] h-[18px] relative" />
            <div className="w-[18px] h-[18px] relative" />
          </div>
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-[49px] p-[15px] bg-white rounded-[10px] border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
            <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">Clear a clog in the sink</div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-[49px] p-[15px] bg-white rounded-[10px] border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
            <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">Washing white clothes</div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-[49px] p-[15px] bg-white rounded-[10px] border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
            <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">Defrost the refrigerator</div>
          </div>
        </div>
      </div>
      <div className="h-36 flex-col justify-start items-start gap-2.5 flex">
        <div className="text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">Completed tasks</div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-[50px] p-[15px] bg-teal-500 bg-opacity-0 rounded-[10px] border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
            <div className="w-5 h-5 relative">
              <div className="w-5 h-5 left-0 top-0 absolute rounded border border-emerald-500" />
              <div className="w-[15px] h-[9px] left-[2px] top-[5px] absolute" />
            </div>
            <div className="text-slate-800 text-sm font-normal font-['Nunito'] line-through tracking-tight">To water flowers</div>
          </div>
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 h-[49px] p-[15px] rounded-[10px] border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
            <div className="text-slate-800 text-sm font-normal font-['Nunito'] line-through tracking-tight">Call a plumber</div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[758px] h-20 justify-center items-end gap-2.5 inline-flex">
      <div className="justify-center items-end flex">
        <div className="px-[25px] py-2.5 bg-blue-700 rounded-lg justify-center items-center gap-2.5 flex">
          <div className="w-[18px] h-[18px] relative">
          </div>
          <div className="text-neutral-50 text-base font-semibold font-['Nunito'] tracking-tight">New Task</div>
        </div>
      </div>
      <div className="w-[587px] flex-col justify-start items-start inline-flex">
        <div className="px-[25px] py-2.5 bg-red-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
          <div className="text-neutral-50 text-base font-semibold font-['Nunito'] tracking-tight">Delete</div>
        </div>
      </div>
    </div>
  </div>
);
export default Work;