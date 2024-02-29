import React, { useState } from "react";

const workers = [
  {
    name: "Yash Nayak",
    rating: 4.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 500,
    available: true,
  },
  {
    name: "Yash Nayak",
    rating: 4.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 500,
    available: true,
  },
  {
    name: "Yash Nayak",
    rating: 4.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 500,
    available: true,
  },
  {
    name: "Yash Nayak",
    rating: 4.5,
    image:
      "https://mybestbio.com/wp-content/uploads/2023/08/traditional-Credit-Domestic-Helper-Loan-1.jpg",
    id: "45",
    rate: 500,
    available: true,
  },
];

export default function Category() {
  const category = window.location.pathname.split("/")[2];
  const [sort, setSort] = useState(0);

  return (
    <main className="h-screen bg-gray-900 p-4">
      <div className="p-4 container flex justify-between">
        <h2 className="text-3xl capitalize">{category}</h2>
        <div class="relative inline-block text-left">
          <div>
            <button
              type="button"
              class="group inline-flex justify-center text-sm font-medium hover:text-gray-900"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Sort
              <svg
                class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            --> */}
          <div
            class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-800 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="text-white block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-1"
              >
                Best Rating
              </a>
              <a
                href="#"
                class="text-gray-400 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-2"
              >
                Newest
              </a>
              <a
                href="#"
                class="text-gray-400 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-3"
              >
                Price: Low to High
              </a>
              <a
                href="#"
                class="text-gray-400 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-4"
              >
                Price: High to Low
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {workers.map((worker) => (
          <div
            className="flex flex-col p-2 bg-gray-800 hover:outline shadow w-fit rounded hover:scale-105 transition-all"
            key={worker.id}
          >
            <img className="h-64 w-48 object-cover" src={worker.image} />
            <div className="p-1">
              <h3 className="font-bold text-xl">{worker.name}</h3>
              <p className="flex gap-2 items-end">
                <span className=" font-bold">
                  ₹{worker.rate}
                  <span className="text-xs text-gray-300 font-semibold">
                    /hr
                  </span>
                </span>

                <span className="bg-green-600 px-1 py-0.5 rounded text-xs">
                  ⭐{worker.rating}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
