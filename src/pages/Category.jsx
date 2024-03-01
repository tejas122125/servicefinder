import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const workers = [
  {
    name: "Yash Nayak",
    rating: 4.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSb-gy3TF9KbuQ4jWFwyG-OIwugRBMSTqgyYyEdeUhA&s",
    id: "45",
    rate: 500,
    available: true,
    experience: 5,
  },
  {
    name: "Birjendra singh",
    rating: 4.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 400,
    available: true,
    experience: 5,
  },
  {
    name: "Rajat sahu",
    rating: 4.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 700,
    available: true,
    experience: 5,
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
              Dropdown
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
                className="absolute right-0 w-full mt-2 origin-top-right bg-gray-800 border border-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Option 3
                  </a>
                  <button onClick={handleSortByPrice} className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white" role="menuitem">
                    Sort by Price
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="w-full px-4" style={{ width: "680px" }}>
              <div className="flex flex-col gap-4">
                {sortedWorkers.map((worker) => (
                  <div
                    className="flex p-2 bg-gray-800 hover:outline shadow rounded w-full px-4 hover:scale-105 transition-all"
                    key={worker.id}
                  >
                    <img className="h-32 w-32 rounded-full object-cover" src={worker.image} alt={worker.name} />
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div className="ml-auto">
                        <h3 className="font-bold text-xl">{worker.name}</h3>
                        <p className="flex gap-2 items-end justify-end">
                          <span className="font-bold">₹{worker.rate}<span className="text-xs text-gray-300 font-semibold">/hr</span></span>
                          <span className="bg-green-600 px-2 py-1 rounded text-xs">⭐{worker.rating}</span>
                        </p>
                      </div>
                    </div>
                  </div>
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
