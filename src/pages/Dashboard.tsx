import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe, MealPlan } from '../types';

const Dashboard: React.FC = () => {
  // Mock data - in a real app, this would come from state management
  const recentRecipes: Recipe[] = [
    {
      id: '1',
      name: 'Grilled Chicken Salad',
      description: 'A healthy and delicious grilled chicken salad with fresh vegetables.',
      ingredients: [],
      instructions: [],
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      difficulty: 'Easy',
      cuisine: 'American',
      tags: ['healthy', 'salad', 'chicken'],
      nutrition: { calories: 350, protein: 25, carbs: 15, fat: 20, fiber: 8, sugar: 5 }
    },
    {
      id: '2',
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
      ingredients: [],
      instructions: [],
      prepTime: 10,
      cookTime: 15,
      servings: 2,
      difficulty: 'Medium',
      cuisine: 'Italian',
      tags: ['pasta', 'italian', 'creamy'],
      nutrition: { calories: 650, protein: 20, carbs: 70, fat: 30, fiber: 3, sugar: 2 }
    }
  ];

  const todayMealPlan: MealPlan = {
    id: '1',
    name: 'Today\'s Meals',
    date: new Date().toISOString().split('T')[0],
    meals: {
      breakfast: recentRecipes[0],
      lunch: recentRecipes[1],
      dinner: recentRecipes[0]
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="page-title">Welcome to Smart Meal Planner</h1>
        
        <div className="grid grid-2">
          {/* Quick Stats */}
          <div className="card">
            <h2 className="card-title">
              <i className="fas fa-chart-bar"></i> Quick Stats
            </h2>
            <div className="grid grid-2">
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>12</div>
                <div style={{ color: '#666' }}>Total Recipes</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>7</div>
                <div style={{ color: '#666' }}>Meal Plans</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>24</div>
                <div style={{ color: '#666' }}>Grocery Items</div>
              </div>
              <div style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea' }}>1,850</div>
                <div style={{ color: '#666' }}>Avg Calories</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h2 className="card-title">
              <i className="fas fa-bolt"></i> Quick Actions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link to="/recipes" className="btn btn-primary">
                <i className="fas fa-plus"></i> Add New Recipe
              </Link>
              <Link to="/meal-plan" className="btn btn-secondary">
                <i className="fas fa-calendar-plus"></i> Create Meal Plan
              </Link>
              <Link to="/grocery-list" className="btn btn-secondary">
                <i className="fas fa-shopping-cart"></i> View Grocery List
              </Link>
            </div>
          </div>
        </div>

        {/* Today's Meal Plan */}
        <div className="card">
          <h2 className="card-title">
            <i className="fas fa-calendar-day"></i> Today's Meal Plan
          </h2>
          <div className="meal-plan-grid">
            <div className="meal-slot">
              <div className="meal-slot-title">
                <i className="fas fa-sun"></i> Breakfast
              </div>
              {todayMealPlan.meals.breakfast ? (
                <div>
                  <h4>{todayMealPlan.meals.breakfast.name}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    {todayMealPlan.meals.breakfast.nutrition.calories} calories
                  </p>
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>No meal planned</p>
              )}
            </div>

            <div className="meal-slot">
              <div className="meal-slot-title">
                <i className="fas fa-cloud-sun"></i> Lunch
              </div>
              {todayMealPlan.meals.lunch ? (
                <div>
                  <h4>{todayMealPlan.meals.lunch.name}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    {todayMealPlan.meals.lunch.nutrition.calories} calories
                  </p>
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>No meal planned</p>
              )}
            </div>

            <div className="meal-slot">
              <div className="meal-slot-title">
                <i className="fas fa-moon"></i> Dinner
              </div>
              {todayMealPlan.meals.dinner ? (
                <div>
                  <h4>{todayMealPlan.meals.dinner.name}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>
                    {todayMealPlan.meals.dinner.nutrition.calories} calories
                  </p>
                </div>
              ) : (
                <p style={{ color: '#666', fontStyle: 'italic' }}>No meal planned</p>
              )}
            </div>
          </div>
        </div>

        {/* Recent Recipes */}
        <div className="card">
          <h2 className="card-title">
            <i className="fas fa-clock"></i> Recent Recipes
          </h2>
          <div className="grid grid-2">
            {recentRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
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
                      <i className="fas fa-fire"></i> {recipe.nutrition.calories} cal
                    </span>
                  </div>
                  <Link to={`/recipes/${recipe.id}`} className="btn btn-primary">
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
