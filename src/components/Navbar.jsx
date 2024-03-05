import React from "react";
import { motion } from "framer-motion";
import SigninBtn from "../auth/Auth";

export default function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <motion.div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center top-0">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Service Finder</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white" href="/">
            Home
          </a>
          <a className="mr-5 hover:text-white" href="/customers">
            Customers
          </a>
          <a className="mr-5 hover:text-white" href="/jobs">
            Jobs
          </a>
          <a className="mr-5 hover:text-white" href="/work">
            Work
          </a>
          <a className="mr-5 hover:text-white" href="/hire">
            Hire
          </a>
          <a href="/about" className="mr-5 hover:text-white">
            About Us
          </a>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          {/* <a href="/Workersignin" className="mr-5 hover:text-white">WorkerSignin</a> */}
          <SigninBtn />
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </motion.div>
    </header>
  );
}
