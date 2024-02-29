import React, { useEffect, useState } from "react";

const Work = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [data, setData] = useState({});

  function handleSubmit(e) {
    e.preventDefault;
    const formData = new FormData(e.target);

    console.log(formData);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  }, []);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Join Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <form action="/submit" method="get">
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-400"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="phone"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="stateSelect">Select a State:</label>
                    <select
                      id="stateSelect"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    >
                      <option value="AN">Andaman and Nicobar Islands</option>
                      <option value="AP">Andhra Pradesh</option>
                      <option value="AR">Arunachal Pradesh</option>
                      <option value="AS">Assam</option>
                      <option value="BR">Bihar</option>
                      <option value="CH">Chandigarh</option>
                      <option value="CT">Chhattisgarh</option>
                      <option value="DN">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="DL">Delhi</option>
                      <option value="GA">Goa</option>
                      <option value="GJ">Gujarat</option>
                      <option value="HR">Haryana</option>
                      <option value="HP">Himachal Pradesh</option>
                      <option value="JK">Jammu and Kashmir</option>
                      <option value="JH">Jharkhand</option>
                      <option value="KA">Karnataka</option>
                      <option value="KL">Kerala</option>
                      <option value="LD">Ladakh</option>
                      <option value="LA">Lakshadweep</option>
                      <option value="MP">Madhya Pradesh</option>
                      <option value="MH">Maharashtra</option>
                      <option value="MN">Manipur</option>
                      <option value="ML">Meghalaya</option>
                      <option value="MZ">Mizoram</option>
                      <option value="NL">Nagaland</option>
                      <option value="OR">Odisha</option>
                      <option value="PY">Puducherry</option>
                      <option value="PB">Punjab</option>
                      <option value="RJ">Rajasthan</option>
                      <option value="SK">Sikkim</option>
                      <option value="TN">Tamil Nadu</option>
                      <option value="TS">Telangana</option>
                      <option value="TR">Tripura</option>
                      <option value="UP">Uttar Pradesh</option>
                      <option value="UK">Uttarakhand</option>
                      <option value="WB">West Bengal</option>
                    </select>
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      district
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-400"
                    >
                      city
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="pin-code"
                      className="leading-7 text-sm text-gray-400"
                    >
                      pin-code
                    </label>
                    <input
                      type="pin-code"
                      id="pin-code"
                      name="pin-code"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="experience"
                      className="leading-7 text-sm text-gray-400"
                    >
                      experience
                    </label>
                    <input
                      type="experience"
                      id="experience"
                      name="experience"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="experience"
                      className="leading-7 text-sm text-gray-400"
                    >
                      address
                    </label>
                    <input
                      type="experience"
                      id="experience"
                      name="experience"
                      className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      // style={{ width: "150%" }}
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </form>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                <a className="text-red-400">Service-fineder.ac.in</a>
                <p className="leading-normal my-5">
                  IIIT-BBSR
                  <br />
                  Bhubaneswar,751003
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
