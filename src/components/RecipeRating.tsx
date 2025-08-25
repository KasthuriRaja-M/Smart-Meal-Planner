import React, { useState } from 'react';
import { Recipe, Review } from '../types';

interface RecipeRatingProps {
  recipe: Recipe;
  onAddReview?: (review: Omit<Review, 'id' | 'date' | 'helpful'>) => void;
}

const RecipeRating: React.FC<RecipeRatingProps> = ({ recipe, onAddReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    userName: 'Anonymous'
  });

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return (
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: interactive ? 'pointer' : 'default',
              color: star <= rating ? '#ffd700' : '#ddd',
              fontSize: '1.2rem'
            }}
            onClick={() => interactive && onStarClick?.(star)}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  const handleSubmitReview = () => {
    if (newReview.comment.trim() && onAddReview) {
      onAddReview({
        recipeId: recipe.id,
        userId: 'user-1', // In a real app, this would come from auth
        userName: newReview.userName,
        rating: newReview.rating,
        comment: newReview.comment.trim()
      });
      setNewReview({ rating: 5, comment: '', userName: 'Anonymous' });
      setShowReviewForm(false);
    }
  };

  const averageRating = recipe.rating || 0;
  const reviewCount = recipe.reviewCount || 0;
  const reviews = recipe.reviews || [];

  return (
    <div className="card">
      <h3 className="card-title">
        <i className="fas fa-star"></i> Ratings & Reviews
      </h3>
      
      {/* Rating Summary */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>
            {averageRating.toFixed(1)}
          </div>
          {renderStars(Math.round(averageRating))}
          <div style={{ color: '#666', fontSize: '0.9rem' }}>
            {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
          </div>
        </div>
        
        <button 
          className="btn btn-primary"
          onClick={() => setShowReviewForm(!showReviewForm)}
        >
          <i className="fas fa-plus"></i> Write a Review
        </button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <div style={{ 
          padding: '1rem', 
          background: '#f8f9fa', 
          borderRadius: '8px', 
          marginBottom: '1rem' 
        }}>
          <h4 style={{ marginBottom: '1rem' }}>Write Your Review</h4>
          
          <div className="form-group">
            <label className="form-label">Your Rating</label>
            {renderStars(newReview.rating, true, (rating) => 
              setNewReview({ ...newReview, rating })
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your name (optional)"
              value={newReview.userName}
              onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Your Review</label>
            <textarea
              className="form-input form-textarea"
              placeholder="Share your experience with this recipe..."
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              rows={4}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              className="btn btn-primary"
              onClick={handleSubmitReview}
              disabled={!newReview.comment.trim()}
            >
              <i className="fas fa-paper-plane"></i> Submit Review
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setShowReviewForm(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div>
          <h4 style={{ marginBottom: '1rem' }}>Recent Reviews</h4>
          {reviews.slice(0, 5).map((review) => (
            <div 
              key={review.id} 
              style={{ 
                padding: '1rem', 
                border: '1px solid #e9ecef', 
                borderRadius: '8px', 
                marginBottom: '1rem' 
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <div style={{ fontWeight: '600' }}>{review.userName}</div>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
              
              {renderStars(review.rating)}
              
              <p style={{ marginTop: '0.5rem', color: '#333' }}>
                {review.comment}
              </p>
              
              <div style={{ marginTop: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                <i className="fas fa-thumbs-up"></i> {review.helpful} found this helpful
              </div>
            </div>
          ))}
          
          {reviews.length > 5 && (
            <button className="btn btn-secondary">
              View All {reviews.length} Reviews
            </button>
          )}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
          <i className="fas fa-comments" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}></i>
          <p>No reviews yet. Be the first to review this recipe!</p>
        </div>
      )}
    </div>
  );
};

export default RecipeRating;
