import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isChatOpen ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="flex items-center justify-between bg-blue-600 text-white p-3 rounded-t-lg">
            <h4 className="text-lg font-semibold">Customer Support</h4>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-xl font-bold hover:bg-blue-700 rounded-full p-1"
            >
              &times;
            </button>
          </div>
          <iframe
            src="https://landbot.online/v3/H-2752573-CSQGCC7L9U8H5O47/index.html"
            title="Chatbot"
            className="flex-grow"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              borderRadius: "0 0 0.5rem 0.5rem",
            }}
          ></iframe>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="w-14 h-14 bg-blue-600 text-white rounded-full fixed bottom-5 right-5 shadow-xl flex justify-center items-center text-3xl font-bold hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faRocketchat} />
        </button>
      )}
    </div>
  );
}

export default Chatbot;
