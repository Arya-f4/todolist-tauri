import React from 'react';

const NewTask = () => {
  // Your component logic goes here

  return (
    // Your JSX code goes here
    <div className="justify-center items-stretch shadow-lg bg-white flex max-w-[700px] flex-col p-5 rounded-xl">
      <div className="items-center flex justify-between gap-5 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
        <div className="text-blue-700 text-xl font-bold tracking-wide grow whitespace-nowrap my-auto">
          Add a new task
        </div>
        <form className="items-stretch border self-stretch flex justify-between gap-2.5 px-4 py-1.5 rounded-md border-solid border-slate-800 border-opacity-20">
          <header className="text-slate-800 text-xs tracking-wide">Select a template</header>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f78b3293300375f805db79200f27202f6f4a1d7124f473dfda9a14aa2e7ea3d1?apiKey=85107753fed34c78a97b0b59e096642d&"
            className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt=""
          />
        </form>
      </div>
      <div className="text-slate-800 text-sm font-bold tracking-wide mt-8 max-md:max-w-full">
        What should be done?
      </div>
      <form>
        <div className="header">
          <header className="header">Task Manager</header>
        </div>
        <div className="task-content">
          <div className="task">{task}</div>
        </div>
        <div className="task-actions">
          <button className="task-button">Mark Complete</button>
        </div>
      </form>
      <div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="text-slate-800 text-sm font-bold tracking-wide">
            Category
          </div>
          <form className="justify-between items-stretch border flex gap-2.5 mt-2.5 px-4 py-2 rounded-lg border-solid border-slate-800 border-opacity-10">
            <header className="text-black text-sm tracking-wide grow whitespace-nowrap">
              Choose
            </header>
            <a
              href="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb8dd8e98f3bea333915dfbdb98959aefa1808422708947ae532da82de2e3b9?apiKey=85107753fed34c78a97b0b59e096642d&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            >
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb8dd8e98f3bea333915dfbdb98959aefa1808422708947ae532da82de2e3b9?apiKey=85107753fed34c78a97b0b59e096642d&" alt="image" />
            </a>
          </form>
        </div>
        <div className="items-stretch flex grow basis-[0%] flex-col">
          <div className="text-slate-800 text-sm font-bold tracking-wide">
            When?
          </div>
          <form>
            <header className="header">
              <a href="https://cdn.builder.io/api/v1/image/assets/TEMP/d03d051b1b8c10614dfadab16cf5833e897a288ab1e067ec8f6ef9f1eaa70f33?apiKey=85107753fed34c78a97b0b59e096642d&" aria-label="Logo">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d03d051b1b8c10614dfadab16cf5833e897a288ab1e067ec8f6ef9f1eaa70f33?apiKey=85107753fed34c78a97b0b59e096642d&" className="aspect-square object-contain object-center w-[18px] overflow-hidden max-w-full" />
              </a>
            </header>
            <div className="border flex flex-col mt-2.5 pl-16 pr-4 py-2 rounded-lg border-solid border-slate-800 border-opacity-10 items-end max-md:pl-5">
              <div className="input-container">
                <label htmlFor="inputField1">Input Field 1</label>
                <input id="inputField1" type="text" aria-label="Input Field 1" />
              </div>

              <div className="input-container">
                <label htmlFor="inputField2">Input Field 2</label>
                <input id="inputField2" type="text" aria-label="Input Field 2" />
              </div>

              <div className="button-container">
                <button aria-label="Button">Click Me</button>
              </div>

              <div className="div-container">
                <a href="#" aria-label="Link">Link</a>
              </div>

              <div className="div-container">
                <a href="#" aria-label="Link">Link</a>
              </div>

              <div className="div-container">
                <a href="#" aria-label="Link">Link</a>
              </div>
            </div>
          </form>
        </div>
        <div className="items-stretch self-stretch flex grow basis-[0%] flex-col">
          <div className="text-slate-800 text-sm font-bold tracking-wide">
            Task priority
          </div>
          <div className="items-stretch border flex justify-between gap-2.5 mt-2.5 px-4 py-2 rounded-lg border-solid border-slate-800 border-opacity-10">
            <div className="text-black text-sm tracking-wide grow whitespace-nowrap">
              Choose
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fb8dd8e98f3bea333915dfbdb98959aefa1808422708947ae532da82de2e3b9?apiKey=85107753fed34c78a97b0b59e096642d&"
              className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
          </div>
        </div>
      </div>
      <div className="justify-between items-stretch flex w-full gap-5 mt-8 pt-2 max-md:max-w-full max-md:flex-wrap">
        <div className="text-neutral-50 text-base font-semibold tracking-normal whitespace-nowrap justify-center items-stretch bg-red-500 px-6 py-2.5 rounded-lg max-md:px-5">
          Cancel
        </div>
        <div className="flex items-stretch justify-between gap-2.5">
          <button
            className="text-blue-700 text-base font-semibold tracking-normal whitespace-nowrap justify-center items-stretch border grow px-6 py-2.5 rounded-lg border-solid border-blue-700 max-md:px-5"
            aria-label="Save template"
            type="submit"
          >
            Save template
          </button>
          <button type="button" className="add-button" aria-label="Add">Add</button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
