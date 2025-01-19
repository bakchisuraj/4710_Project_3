import React from "react";

const StudentRecommendation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-indigo-300 max-w-full mx-auto p-6 flex space-x-8">
      <div className="mt-10 mb-10 p-4 max-w-lg mx-auto bg-white shadow-lg rounded">
        <h2 className="text-lg font-bold mb-4 text-center">Find Student Offers</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Get personalized product recommendations, bundles, and offers for students.
          Explore deals tailored to your location and preferences!
        </p>

        <iframe
          src="https://landbot.online/v3/H-2752622-NLWDHC3HOW8TAQRS/index.html"
          title="Landbot Chat"
          style={{
            width: "100%",
            height: "500px",
            border: "1px solid #ccc",
            marginTop: "20px",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default StudentRecommendation;
