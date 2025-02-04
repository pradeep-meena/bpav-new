import React, { useState } from 'react';
// import '../App.css';

const Feedback = () => {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState('');
  const [recommend, setRecommend] = useState(null);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = { rating, comment, recommend };
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
    // Reset form (optional)
    setRating(null);
    setComment('');
    setRecommend(null);
  };

  return (
    <div className='page-wrapper'>
    <div className="survey-container d-flex align-items-center jusitfy-content-center bg-white ">
      <h2>Example Inc</h2>
      <p>Customer satisfaction survey</p>
      <form onSubmit={handleSubmit}>
        {/* Rating Section */}
        <div className="rating-section">
          <p>How would you rate us?</p>
          <div className="emoji-row">
            {['😡', '😟', '😐', '🙂', '😃'].map((emoji, index) => (
              <button
                type="button"
                key={index}
                className={`emoji-button ${rating === index + 1 ? 'selected' : ''}`}
                onClick={() => handleRating(index + 1)}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Comment Section */}
        <div className="comment-section">
          <p>What did you like most?</p>
          <textarea
            placeholder="Type your answer here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Recommendation Section */}
        <div className="recommend-section">
          <p>Would you recommend us to a friend?</p>
          <div className="thumb-buttons">
            <button
              type="button"
              className={`thumb-button ${recommend === 'yes' ? 'selected' : ''}`}
              onClick={() => setRecommend('yes')}
            >
               👎
            </button>
            <button
              type="button"
              className={`thumb-button ${recommend === 'no' ? 'selected' : ''}`}
              onClick={() => setRecommend('no')}
            >
             👍
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Send feedback
        </button>
      </form>
    </div>
    </div>
  );
};

export default Feedback;
