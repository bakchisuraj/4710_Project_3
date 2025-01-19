import React, { useState } from 'react';
import '../style/Feedback.css';


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
    <div className="feedback-container">
      <h2 className="form-title">Submit Your Review</h2>
      
      <form onSubmit={handleSubmitReview} className="review-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newReview.name}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="orderId" className="form-label">
            Order Id
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={newReview.orderId}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={newReview.rating}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            value={newReview.comment}
            onChange={handleInputChange}
            className="form-input"
            required
          />
        </div>

        {/* Additional Questions */}
        <div className="additional-questions">
          <div>
            <p className="question-label">How satisfied are you with the product's quality?</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="rating-option">
                <input
                  type="radio"
                  name="additionalRatings-0"
                  value={value}
                  checked={newReview.additionalRatings[0] === value}
                  onChange={handleInputChange}
                  className="rating-input"
                />
                {value}
              </label>
            ))}
            <div className="rating-display">
              Selected Rating: {newReview.additionalRatings[0]}
            </div>
          </div>
          <div>
            <p className="question-label">How would you rate our customer service?</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="rating-option">
                <input
                  type="radio"
                  name="additionalRatings-1"
                  value={value}
                  checked={newReview.additionalRatings[1] === value}
                  onChange={handleInputChange}
                  className="rating-input"
                />
                {value}
              </label>
            ))}
            <div className="rating-display">
              Selected Rating: {newReview.additionalRatings[1]}
            </div>
          </div>
          <div>
            <p className="question-label">How likely are you to recommend this product?</p>
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="rating-option">
                <input
                  type="radio"
                  name="additionalRatings-2"
                  value={value}
                  checked={newReview.additionalRatings[2] === value}
                  onChange={handleInputChange}
                  className="rating-input"
                />
                {value}
              </label>
            ))}
            <div className="rating-display">
              Selected Rating: {newReview.additionalRatings[2]}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit Review
        </button>
      </form>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3 className="reviews-title">Product Reviews</h3>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <h4 className="reviewer-name">{review.name}</h4>
              <p className="review-rating">Rating: {review.rating} / 5</p>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feedback;
