import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onView?: (recipe: Recipe) => void;
  onAddToMealPlan?: (recipe: Recipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onView, onAddToMealPlan }) => {
  return (
    <div className="recipe-card fade-in">
      {recipe.image && (
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="recipe-image"
        />
      )}
      <div className="recipe-content">
        <h3 className="recipe-title">{recipe.name}</h3>
        <p style={{ color: '#666', marginBottom: '1rem' }}>
          {recipe.description}
        </p>
        
        <div className="recipe-meta">
          <span>
            <i className="fas fa-clock"></i> {recipe.prepTime + recipe.cookTime} min
          </span>
          <span>
            <i className="fas fa-users"></i> {recipe.servings} servings
          </span>
          <span>
            <i className="fas fa-fire"></i> {recipe.nutrition.calories} cal
          </span>
        </div>

        <div className="recipe-tags">
          <span className="recipe-tag">{recipe.difficulty}</span>
          <span className="recipe-tag">{recipe.cuisine}</span>
          {recipe.tags.slice(0, 2).map((tag, index) => (
            <span key={index} className="recipe-tag">{tag}</span>
          ))}
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          {onView && (
            <button 
              className="btn btn-primary"
              onClick={() => onView(recipe)}
            >
              <i className="fas fa-eye"></i> View
            </button>
          )}
          {onAddToMealPlan && (
            <button 
              className="btn btn-secondary"
              onClick={() => onAddToMealPlan(recipe)}
            >
              <i className="fas fa-plus"></i> Add to Plan
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
