import React from "react";

export default function Footer() {
  return (
    <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
      <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
        <a className="inline-block rounded-full p-2 text-white shadow-sm transition sm:p-3 lg:p-4 bg-gray-900 dark:hover:bg-gray-800" href="#main">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div className="lg:flex lg:items-end lg:justify-between">
        <div>
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-black lg:text-left">© 2025 "EkoCarbon Services".</p>
        </div>
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
          <li>{/* <p className="text-gray-400 text-xs">ИНН 302 885 013</p> */}</li>
          <li>
            <p className="text-gray-400 text-xs"></p>
          </li>
        </ul>
      </div>
    </div>
  );
}
