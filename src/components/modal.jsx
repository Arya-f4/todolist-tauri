import React from 'react';
import "../App.css";
import { calendar } from "../assets";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from 'react';
const hideModal = {
  transform: 'translateX(-100%)'
};
const Modal = ({ showModal, setShowModal }) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  }
  return (
    showModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className={`w-[700px] h-[350px] p-5 bg-white rounded-[10px] shadow flex-col justify-center items-center gap-[30px] inline-flex transform translate-x-0 transition-transform duration-200 ease-in-out ${showModal ? 'slideBot' : 'slideTop'}`}>
          <div className="self-stretch justify-start items-center gap-5 inline-flex">
            <div className="text-blue-700 text-xl font-bold font-['Nunito'] tracking-tight">Add a new task</div>
            <div className="h-[42px] px-[15px] py-[5px] rounded-md border border-slate-800 border-opacity-20 justify-start items-center gap-2.5 flex">
              <div className="grow shrink basis-0 opacity-30 text-slate-800 text-xs font-normal font-['Nunito'] tracking-tight">Select a template</div>
              <div className="w-3.5 h-3.5 relative opacity-30" />
            </div>
          </div>
          <div className="self-stretch h-[158px] flex-col justify-start items-start gap-[30px] flex">
            <form className="self-stretch h-16 flex-col justify-start items-start gap-2.5 flex">
              <div className="text-slate-800 text-sm font-bold font-['Nunito'] tracking-tight">What should be done?</div>
              <input placeholder='like Cooking' className="text-black text-sm font-normal font-['Nunito'] tracking-tight self-stretch px-[15px] py-2 rounded-lg border border-slate-800 border-opacity-10 justify-start items-start gap-2.5 inline-flex" />


            </form>
            <div className="self-stretch justify-start items-start gap-[30px] inline-flex">
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-slate-800 text-sm font-bold font-['Nunito'] tracking-tight">Category</div>
                <div className="self-stretch px-[15px] py-2 rounded-lg border border-slate-800 border-opacity-10 justify-end items-center gap-2.5 inline-flex">
                  <div className="grow shrink basis-0 opacity-50 text-black text-sm font-normal font-['Nunito'] tracking-tight">Choose</div>
                  <div className="w-3.5 h-3.5 relative opacity-30" />
                </div>
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-slate-800 text-sm font-bold font-['Nunito'] tracking-tight">When?</div>

                <Datepicker
                  classNames="font-['Nunito']"
                  value={value}
                  onChange={handleValueChange}
                />

              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-slate-800 text-sm font-bold font-['Nunito'] tracking-tight">Task priority</div>

                <select className="self-stretch px-[15px] py-2 rounded-lg border border-slate-800 border-opacity-10 justify-start items-center gap-2.5 inline-flex appearance-none row-start-1 col-start-1 bg-slate-50 dark:bg-slate-800 ...">
                  <option className="bg-green-300 rounded-lg border">Low</option>
                  <option className="bg-yellow-300 rounded-lg border">Medium</option>
                  <option className="bg-orange-500 rounded-lg border">High</option>
                </select>
              </div>

            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 justify-center items-end gap-2.5 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <button className="px-[25px] py-2.5 bg-red-500 rounded-lg justify-center items-center gap-2.5 inline-flex"
                onClick={() => setShowModal(false)}
              >
                <div className="text-neutral-50 text-base font-semibold font-['Nunito'] tracking-tight">Cancel</div>
              </button>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-[25px] py-2.5 rounded-lg border border-blue-700 justify-center items-center gap-2.5 inline-flex">
                <div className="text-blue-700 text-base font-semibold font-['Nunito'] tracking-tight">Save template</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="px-[25px] py-2.5 bg-blue-700 rounded-lg justify-center items-center gap-2.5 inline-flex">
                <div className="text-neutral-50 text-base font-semibold font-['Nunito'] tracking-tight">Add</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
