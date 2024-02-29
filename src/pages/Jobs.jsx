import React from "react";
import { Link } from "react-router-dom";

export default function Jobs() {
  return (
    <section className="text-gray-400 h-screen body-font bg-gray-900">
      <div className="container p-4 mx-auto">
        <div className="flex flex-wrap w-full mb-8">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Select Category
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap overflow-hidden">
          <Link
            to={"/jobs/househelp"}
            className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 transition-all ease-in-out"
          >
            <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=600&auto=htmlFormat&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYW5lcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="content"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                House Help
              </h2>
            </div>
          </Link>
          <Link
            to={"/jobs/gardening"}
            className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 transition-all ease-in-out"
          >
            <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1637531347055-4fa8aa80c111?w=600&auto=htmlFormat&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVuZXJ8ZW58MHx8MHx8fDA%3D"
                alt="content"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Gardening
              </h2>
            </div>
          </Link>
          <Link
            to={"/jobs/technician"}
            className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 transition-all ease-in-out"
          >
            <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&auto=htmlFormat&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5pY2lhbnxlbnwwfHwwfHx8MA%3D%3D"
                alt="content"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Technician
              </h2>
            </div>
          </Link>
          <Link
            to={"/jobs/security"}
            className="xl:w-1/4 md:w-1/2 p-4 hover:scale-105 transition-all ease-in-out"
          >
            <div className="bg-gray-600 bg-opacity-40 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1485230405346-71acb9518d9c?w=600&auto=htmlFormat&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3VhcmR8ZW58MHx8MHx8fDA%3D"
                alt="content"
              />
              <h3 className="tracking-widest text-red-400 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-white font-medium title-font mb-4">
                Security
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
