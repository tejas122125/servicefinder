import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="relative w-screen h-screen">
        <Navbar />
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <motion.div
              animate={{ opacity: 1, y: -96 }}
              transition={{ duration: 0.5 }}
              class="lg:flex-grow md:w-1/2 opacity-0 relative top-24 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
            >
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white transition-opacity delay-500">
                Home services at your
                <br class="hidden lg:inline-block" />
                doorsteps
              </h1>
              <p class="mb-8 leading-relaxed transition-opacity delay-1000">
                At Service Finder, we are committed to delivering services to
                meet your unique needs. Our team assists you in locating a
                variety of different workers who can be of service For your
                daily household needs.
              </p>
              <div class="flex justify-center">
                <a
                  href="/hire"
                  class="inline-flex text-gray-200 bg-red-500 hover:text-white border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  Hire
                </a>
                <a
                  href="/work"
                  class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-xl text-lg"
                >
                  Work
                </a>
              </div>
            </motion.div>
            <motion.div
              animate={{ opacity: 1, y: -96 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              class="lg:max-w-lg opacity-0 relative top-24 lg:w-full md:w-1/2 w-5/6 hover:scale-105"
            >
              <img
                class="object-cover object-center rounded text-lg opacity-100 hover:scale-105 transition duration-700 ease-in-out"
                alt="hero"
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=htmlFormat&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                onload="this.classList.add('opacity-100');"
              />
            </motion.div>
          </div>
        </section>

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=htmlFormat&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Search As Per Your Need
              </h1>

              <div className="flex w-full md:justify-start justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                  <label
                    htmlFor="hero-field"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Placeholder
                  </label>
                  <input
                    type="text"
                    id="hero-field"
                    name="hero-field"
                    className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:ring-2 focus:ring-red-900 focus:bg-transparent focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  search
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                eg : search "technician..."
              </p>
            </div>
          </div>
        </section>

        <section className="text-gray-400 body-font bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                  Categories
                </h1>
                <div className="h-1 w-20 bg-red-500 rounded"></div>
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-125 transition duration-700 ease-in-out">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
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
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-125 transition duration-700 ease-in-out">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
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
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-125 transition duration-700 ease-in-out">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
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
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4 hover:scale-125 transition duration-700 ease-in-out">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
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
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                How Service Finder Works
              </h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                    src="https://dummyimage.com/302x302"
                  />
                  <p className="leading-relaxed">
                    This helps us determine which taskers are best htmlFor the
                    job{" "}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-white font-medium title-font tracking-wider text-sm">
                    Describe Your Task
                  </h2>
                  <p className="text-gray-500">STEP 1</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                    src="https://dummyimage.com/300x300"
                  />
                  <p className="leading-relaxed">
                    This helps us determine which taskers are best htmlFor the
                    job{" "}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-white font-medium title-font tracking-wider text-sm">
                    Choose a Tasker
                  </h2>
                  <p className="text-gray-500">STEP 2</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                    src="https://dummyimage.com/305x305"
                  />
                  <p className="leading-relaxed">
                    This helps us determine which taskers are best htmlFor the
                    job{" "}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                  <h2 className="text-white font-medium title-font tracking-wider text-sm">
                    Live Smarter
                  </h2>
                  <p className="text-gray-500">STEP 3</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
                JOB REQUIRED
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Best Services Deals{" "}
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 hover:border-4 border-red-500 rounded-lg ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://raviniaplumbing.com/wp-content/uploads/2023/03/Why-hire-a-professional-electrician_-scaled.jpeg"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">
                      Electrician Required
                    </h2>
                    <h3 className="text-gray-500 mb-3">Jaydev Vihar</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 hover:border-4 border-red-500 rounded-lg ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/11/Plumber-Sink-201709-003.jpg"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">
                      looking htmlFor plumber
                    </h2>
                    <h3 className="text-gray-500 mb-3">Jaydev Vihar</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 hover:border-4 border-red-500 rounded-lg ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://images.ctfassets.net/q40b0r0ua0v7/2jxHyCF1VxyY2vQiitTS0g/79afd41d1fcc62d8cd1ddfe9aee93985/AdobeStock_196915933.jpeg?fit=fill&w=750"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">
                      looking htmlFor gardener
                    </h2>
                    <h3 className="text-gray-500 mb-3">Jaydev Vihar</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 hover:border-4 border-red-500 rounded-lg ">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="https://media.womensweekly.com.sg/public/2017/08/Things-to-look-out-for-when-hiring-domestic-helper-10.jpg?compress=true&quality=80&w=480&dpr=2.6"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">
                      House help Required
                    </h2>
                    <h3 className="text-gray-500 mb-3">Jaydev Vihar</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Home;
