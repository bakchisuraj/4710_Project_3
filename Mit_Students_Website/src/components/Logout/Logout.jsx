import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Logout() {
    return (
        <div className="logout-container flex items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-indigo-300">
          <div className="bg-white p-8 rounded-xl shadow-2xl text-center w-96 max-w-md">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">You have been logged out</h2>
            <p className="text-gray-600 mb-6 text-lg">Thank you for visiting. See you next time!</p>
            
            <button
              className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 hover:rotate-[10deg] hover:translate-y-1 transition-all duration-500 ease-in-out"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-xl" />
              Log In
            </button>
          </div>
        </div>
      );
}

export default Logout