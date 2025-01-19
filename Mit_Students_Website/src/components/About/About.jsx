import React from "react";

export default function About() {
  return (
      <div className="bg-gradient-to-r from-blue-200 to-indigo-300 py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://media.istockphoto.com/id/1256096552/vector/about-us-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=KKozSJIgaX2lu1OIRY9Oc5Rp1GhQzpTIKatBtc_4lQQ="
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      The MIT Group
                      </h2>
                      <p className="mt-6 text-gray-600">
                    
                      The MIT Group is one of United States leading digital commerce entities and includes group companies
                      </p>
                      <p className="mt-4 text-gray-600">
                      Building trust with Integrity. At MIT, every decision made is based on ethical and moral principles - no success is meaningful if it’s not achieved the right way.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}