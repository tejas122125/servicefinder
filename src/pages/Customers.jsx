import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  function AcceptRequest(userId) {}

  function RejectRequest(userId) {}

  useEffect(() => {
    (async () => {
      // TODO: get list of customers from database...
      const customerList = mycustomers;

      setCustomers(customerList);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900 p-4">
        <h1 className="mx-auto w-fit pb-4">Customers</h1>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="w-full px-4" style={{ width: "680px" }}>
              <div className="flex flex-col gap-4 items-center">
                {customers.map((customer, i) => (
                  <motion.div
                    animate={{ opacity: 1, y: -96 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    className="grid grid-cols-3 relative p-2 bg-gray-800 top-24 hover:outline opacity-0 shadow rounded w-full px-4 hover:scale-105 max-w-lg"
                    key={customer.id}
                  >
                    <img
                      className="h-36  col-span-1 w-36 rounded-full object-cover"
                      src={customer.image}
                      alt={customer.name}
                    />
                    <div className="p-4 items-end col-span-2 flex-grow flex gap-4 flex-col">
                      <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">{customer.name}</h3>
                        <p className="flex gap-2 items-end justify-start">
                          <svg
                            class="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>

                          <span>Bhubaneshwar, Odisa</span>
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <button
                          onClick={() => {
                            AcceptRequest(customer.email);
                          }}
                          className="ml-auto text-xl bg-green-600 rounded block px-4 py-2 text-gray-300 hover:bg-green-700 hover:text-white"
                          role="menuitem"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            RejectRequest(customer.email);
                          }}
                          className="ml-auto text-xl bg-red-600 rounded block px-4 py-2 text-gray-300 hover:bg-red-700 hover:text-white"
                          role="menuitem"
                        >
                          Reject
                        </button>
                      </div>
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

const mycustomers = [
  {
    name: "Yash Nayak",
    rating: 1.5,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsSb-gy3TF9KbuQ4jWFwyG-OIwugRBMSTqgyYyEdeUhA&s",
    id: "45",
    rate: 500,
    available: true,
    experience: 5,
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
  },
];
