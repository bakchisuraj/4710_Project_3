import React, { useState } from 'react';

const reviews = [
  { id: 1, name: "Alice", rating: 5, comment: "Great product, very helpful!" },
  { id: 2, name: "John", rating: 4, comment: "Good quality, but could be cheaper." },
  { id: 3, name: "Maria", rating: 5, comment: "Best purchase I've made for school!" },
  { id: 4, name: "David", rating: 3, comment: "Average, could be better." },
  { id: 5, name: "Sophia", rating: 4, comment: "Good, but could use more features." },
  { id: 6, name: "James", rating: 5, comment: "Loved it! Highly recommend." },
];

function Feedback() {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    comment: "",
    orderId: "",
    additionalRatings: [1, 1, 1], // 3 additional ratings questions
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio") {
      const index = parseInt(name.split("-")[1], 10);
      setNewReview((prevState) => {
        const updatedRatings = [...prevState.additionalRatings];
        updatedRatings[index] = parseInt(value);
        return { ...prevState, additionalRatings: updatedRatings };
      });
    } else {
      setNewReview((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    alert("Review submitted!");
  };

  return (
    <div className="bg-gradient-to-r from-blue-200 to-indigo-300 max-w-full mx-auto p-6 flex space-x-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Submit Your Review</h2>
      
      <form onSubmit={handleSubmitReview} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="orderId" className="block text-sm font-medium text-gray-700">
            Order Id
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={newReview.orderId}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Additional Questions */}
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700">How satisfied are you with the product's quality?</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="additionalRatings-0"
                  value={value}
                  checked={newReview.additionalRatings[0] === value}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
            <div className="mt-2 text-sm text-gray-500">
              Selected Rating: {newReview.additionalRatings[0]}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">How would you rate our customer service?</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="additionalRatings-1"
                  value={value}
                  checked={newReview.additionalRatings[1] === value}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
            <div className="mt-2 text-sm text-gray-500">
              Selected Rating: {newReview.additionalRatings[1]}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">How likely are you to recommend this product?</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center">
                <input
                  type="radio"
                  name="additionalRatings-2"
                  value={value}
                  checked={newReview.additionalRatings[2] === value}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
            <div className="mt-2 text-sm text-gray-500">
              Selected Rating: {newReview.additionalRatings[2]}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Reviews Section - Moved Outside the Form */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Product Reviews</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-300 bg-white  p-4 rounded-md">
              <h4 className="text-xl font-semibold">{review.name}</h4>
              <p className="text-sm text-gray-700">Rating: {review.rating} / 5</p>
              <p className="mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
