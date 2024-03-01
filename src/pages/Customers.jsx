import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    (async () => {
      // TODO: get list of customers from database...
      const customerList = mycustomers;

      setCustomers(mycustomers);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <main className="h-screen bg-gray-900 p-4">
        <h1 className="mx-auto w-fit pb-4">Customers</h1>
        <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="w-full px-4" style={{ width: "680px" }}>
              <div className="flex flex-col gap-4">
                {customers.map((worker) => (
                  <div
                    className="flex p-2 bg-gray-800 hover:outline shadow rounded w-full px-4 hover:scale-105 transition-all"
                    key={worker.id}
                  >
                    <img
                      className="h-32 w-32 rounded-full object-cover"
                      src={worker.image}
                      alt={worker.name}
                    />
                    <div className="p-4 flex-grow flex flex-col justify-between">
                      <div className="ml-auto">
                        <h3 className="font-bold text-xl">{worker.name}</h3>
                        <p className="flex gap-2 items-end justify-end">
                          <span className="font-bold">
                            ₹{worker.rate}
                            <span className="text-xs text-gray-300 font-semibold">
                              /hr
                            </span>
                          </span>
                          <span className="bg-green-600 px-2 py-1 rounded text-xs">
                            ⭐{worker.rating}
                          </span>
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
  {
    name: "Rajat sahu",
    rating: 4.1,
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
