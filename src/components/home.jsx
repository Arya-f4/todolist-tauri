import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import Card from "./card";
import QuotesFetch from "./quotes";
function myClock() {
  setTimeout(function () {
    const d = new Date();
    const n = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = n;
    myClock();
  }, 1000)
}
myClock();

const Home = ({ showAside, setShowAside }) => (

  <div className={`${!showAside ? 'absolute left-[180px] top-[20px] w-auto h-auto' : 'absolute left-[301px] top-[20px] w-auto h-auto '}`} >
    < div className="justify-start items-start flex" >
      <button className="px-6 py-2.5 bg-blue-700 rounded-lg justify-center items-center gap-2.5 flex hover:bg-white hover:border-r-blue-700 hover:border-spacing-2 hover:box-border active:bg-white">
        <div className="text-neutral-50 font-semibold font-['Nunito'] hover:text-blue-700 hover:font-semibold hover:font['Nunito']">
          New Task
        </div>
      </button>
    </div >
    <div className="relative left-[596px] top-[74px] flex flex-col justify-start items-start gap-7">
      <div className="h-36 p-5 bg-white rounded-lg shadow flex flex-col justify-start items-start gap-5">
        <div className="flex-grow text-blue-700 text-lg font-semibold tracking-tight">
          Time And Date
        </div>
        <div className="flex justify-between items-start gap-2.5">
          <div className=" flex-col justify-start items-start gap-2.5">
            <div className="text-slate-800 text-sm font-normal tracking-tight">
              On our watch
            </div>

            <div className="flex justify-start items-start gap-2.5">
              <div className="text-slate-800 text-2xl font-semibold font-['Nunito'] tracking-wide" id="clock">

              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2.5 ">
            <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
              And today we have
            </div>
            <div className="justify-start items-start gap-2.5 ">
              <div className="text-slate-800 text-2xl font-bold font-['Nunito'] tracking-wide">
                {new Date().toLocaleString("en-US", { day: '2-digit' })} {new Date().toLocaleString("en-US", { month: "long" })} {new Date().getFullYear()}

              </div>
            </div>
          </div>
        </div >
      </div >
      <div className="h-32 p-5 bg-white rounded-lg shadow flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">
            Observation
          </div>
        </div>
        <div className="self-stretch h-12 flex-col justify-center items-start gap-2.5 flex">
          <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
            You create the most tasks on Monday
          </div>
          <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
            You complete the most tasks on Tuesday
          </div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 flex">
        <div className="justify-start items-start gap-2.5 inline-flex">
          <div className="text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">
            Quotes Of the day
          </div>
        </div>
        <div className="justify-start items-start gap-2.5 inline-flex">
          <QuotesFetch />
        </div>
      </div>

    </div >
    <div className="w-96 h-96 top-[74px] absolute flex-col justify-start items-start gap-7 inline-flex">
      <div className="p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">
            Achievements for the week
          </div>
          <div className="opacity-40 w-7 h-1.5 relative">
            <div className="w-1.5 h-1.5 absolute bg-slate-800 rounded-3xl" />
            <div className="w-1.5 h-1.5 left-[11px] absolute bg-slate-800 rounded-3xl" />
            <div className="w-1.5 h-1.5 left-[22px] absolute bg-slate-800 rounded-3xl" />
          </div>
        </div>
        <div className="self-stretch gap-2 justify-between items-start inline-flex">
          <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-slate-800 text-xs font-semibold font-['Nunito'] tracking-tight">
              Created
            </div>
            <div className="w-24 h-24 bg-white rounded-full border border-blue-700 flex-col justify-center items-center flex">
              <div className="text-blue-700 text-4xl font-semibold font-['Nunito'] tracking-wide">
                113
              </div>
              <div className="text-slate-800 text-xs font-normal font-['Nunito'] tracking-tight">
                tasks
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-slate-800 text-xs font-semibold font-['Nunito'] tracking-tight">
              Completed
            </div>
            <div className="w-24 h-24 bg-white rounded-full border border-blue-700 flex-col justify-center items-center flex">
              <div className="text-blue-700 text-4xl font-semibold font-['Nunito'] tracking-wide">
                97
              </div>
              <div className="text-slate-800 text-xs font-normal font-['Nunito'] tracking-tight">
                tasks
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-2.5 inline-flex">
            <div className="text-slate-800 text-xs font-semibold font-['Nunito'] tracking-tight">
              Deleted
            </div>
            <div className="w-24 h-24 bg-white rounded-full border border-blue-700 flex-col justify-center items-center flex">
              <div className="text-blue-700 text-4xl font-semibold font-['Nunito'] tracking-wide">
                14
              </div>
              <div className="text-slate-800 text-xs font-normal font-['Nunito'] tracking-tight">
                tasks
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-5 flex">
        <div className="w-96 justify-between items-center inline-flex">
          <div className="text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">
            Active tasks
          </div>
          <div className="opacity-40 w-7 h-1.5 relative">
            <div className="w-1.5 h-1.5  absolute bg-slate-800 rounded-3xl" />
            <div className="w-1.5 h-1.5 left-[11px]  absolute bg-slate-800 rounded-3xl" />
            <div className="w-1.5 h-1.5 left-[22px] absolute bg-slate-800 rounded-3xl" />
          </div>
        </div>
        <div className="self-stretch h-56 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 p-3.5 bg-teal-500 bg-opacity-0 rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
              <div className="w-5 h-5 rounded border border-blue-700" />
              <div className="grow shrink basis-0 text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
                To water flowers
              </div>
              <div className="w-4 h-4 relative" />
              <div className="w-4 h-4 relative" />
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 p-3.5 bg-white rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
              <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
                Clear a clog in the sink
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 p-3.5 bg-white rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
              <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
                Washing white clothes
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 p-3.5 bg-white rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
              <div className="text-slate-800 text-sm font-normal font-['Nunito'] tracking-tight">
                Defrost the refrigerator
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-36 flex-col justify-start items-start gap-2.5 flex">
          <div className="text-blue-700 text-lg font-semibold font-['Nunito'] tracking-tight">
            Completed tasks
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 p-3.5 bg-teal-500 bg-opacity-0 rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
              <div className="w-5 h-5 relative">
                <div className="w-5 h-5 absolute rounded border border-emerald-500" />
                <div className="w-3.5 h-2 left-[2px] top-[5px] absolute" />
              </div>
              <div className="text-slate-800 text-sm font-normal font-['Nunito'] line-through tracking-tight">
                To water flowers
              </div>
            </div>
          </div>
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="grow shrink basis-0 h-12 p-3.5 rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 flex">
              <div className="text-slate-800 text-sm font-normal font-['Nunito'] line-through tracking-tight">
                Call a plumber
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div >

);

export default Home;
