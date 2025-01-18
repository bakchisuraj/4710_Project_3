import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);
  
    const sendMessage = () => {
      if (message.trim()) {
        setMessages((prevMessages) => [...prevMessages, { message, sender: 'You' }]);
        setMessage('');
      }
    };
  
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
            <div className="flex-grow p-3 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'} mb-3`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-2 ${
                      msg.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'
                    }`}
                  >
                    <span>{msg.message}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center p-3 border-t border-gray-200">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <button
                onClick={sendMessage}
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Send
              </button>
            </div>
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
  };

export default Chatbot;
