import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {motion} from "framer-motion";
import {toast} from "react-toastify";

const workers = [
  {
    name: "Yash Nayak",
    rating: 1.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSb-gy3TF9KbuQ4jWFwyG-OIwugRBMSTqgyYyEdeUhA&s",
    id: "45",
    rate: 500,
    available: true,
    experience: 5,
    email: "yash@nayak",
  },
  {
    name: "Birjendra singh",
    rating: 3.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 400,
    available: true,
    experience: 5,
    email: "yash@nayak"
  },
  {
    name: "Rajat sahu",
    rating: 4.1,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 700,
    available: true,
    experience: 5,
    email: "yash@nayak"
  },
  {
    name: "Tajaswee yadav",
    rating: 4.5,
    image:
      "https://www.india.com/wp-content/uploads/2022/12/google-ceo-sundar-pichai.jpg",
    id: "45",
    rate: 300,
    available: true,
    experience: 5,
    email: "yash@nayak"
  },
];

export default function Category() {
  const category = window.location.pathname.split("/")[2];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortedWorkers, setSortedWorkers] = useState([...workers]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortByPrice = () => {
    const sorted = [...workers].sort((a, b) => a.rate - b.rate);
    setSortedWorkers(sorted);
    setIsDropdownOpen(false); // Close dropdown after sorting
  };

  function handleSortByRating(){
    const sorted = [...workers].sort((a, b) => b.rating - a.rating);
    setSortedWorkers(sorted);
    setIsDropdownOpen(false); 
  }

  // TODO: add customer to worker's database
  function handleWorker(email) {
      console.log(email);
      toast.success("Request Sent Successfully");
  }

  return (
    <>
      <Navbar />
      <main className="h-screen bg-gray-900 p-4">
        <div className="p-4 container flex justify-between">
          <h2 className="text-3xl capitalize">{category}</h2>
          <div className="relative inline-block text-left">
            <button
              id="dropdown-btn"
              onClick={toggleDropdown}
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-700 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Sort
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown-menu"
                className="absolute min-w-36 right-0 w-full mt-2 origin-top-right bg-gray-800 border border-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  
                  <button onClick={handleSortByPrice} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Price:low to high
                  </button>
                  <button onClick={handleSortByRating} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Sort by Rating
                  </button>
                  <button onClick={handleSortByPrice} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                  Price:high to low
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="w-full px-4" style={{ width: "680px" }}>
              <div className="flex flex-col items-center gap-4">
                {sortedWorkers.map((worker, i) => (
                  <motion.div animate={{opacity:1,y:-96}} transition={{delay: i * 0.2, duration: 0.5}}
                    className="grid grid-cols-3 relative p-2 bg-gray-800 top-24 hover:outline opacity-0 shadow rounded w-full px-4 hover:scale-105 max-w-lg"
                    key={worker.id}
                  >
                    <img className="h-36  col-span-1 w-36 rounded-full object-cover" src={worker.image} alt={worker.name} />
                    <div className="p-4 items-end col-span-2 flex-grow flex gap-4 flex-col">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">{worker.name}</h3>
                        <p className="flex gap-2 items-end justify-start">
                          <span className="font-bold">₹{worker.rate}<span className="text-xs text-gray-300 font-semibold">/hr</span></span>
                          <span className="bg-green-600 px-2 py-1 rounded text-xs">⭐{worker.rating}</span>
                         
                        </p>
                        
                      </div>
                      <button onClick={()=>{handleWorker(worker.email)}} className="ml-auto text-xl bg-gray-600 rounded block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                          Request
                         </button>
                    </div>
                    
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
