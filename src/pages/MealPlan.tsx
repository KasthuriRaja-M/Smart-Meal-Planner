import React, { useState } from 'react';
import { Recipe } from '../types';

interface MealPlanData {
  id: string;
  name: string;
  date: string;
  meals: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
    snacks?: Recipe[];
  };
}

const MealPlan: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [selectedMealType, setSelectedMealType] = useState<'breakfast' | 'lunch' | 'dinner'>('breakfast');

  // Mock recipes for meal planning
  const availableRecipes: Recipe[] = [
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
    },
    {
      id: '3',
      name: 'Vegetarian Buddha Bowl',
      description: 'A colorful and nutritious bowl packed with vegetables and quinoa.',
      ingredients: [],
      instructions: [],
      prepTime: 20,
      cookTime: 30,
      servings: 2,
      difficulty: 'Easy',
      cuisine: 'International',
      tags: ['vegetarian', 'healthy', 'bowl'],
      nutrition: { calories: 450, protein: 15, carbs: 60, fat: 18, fiber: 12, sugar: 8 }
    },
    {
      id: '4',
      name: 'Oatmeal with Berries',
      description: 'Warm oatmeal topped with fresh berries and honey.',
      ingredients: [],
      instructions: [],
      prepTime: 5,
      cookTime: 10,
      servings: 1,
      difficulty: 'Easy',
      cuisine: 'American',
      tags: ['breakfast', 'healthy', 'oats'],
      nutrition: { calories: 250, protein: 8, carbs: 45, fat: 5, fiber: 6, sugar: 15 }
    }
  ];

  // Mock meal plan data
  const [mealPlans, setMealPlans] = useState<MealPlanData[]>([
    {
      id: '1',
      name: 'This Week',
      date: new Date().toISOString().split('T')[0],
      meals: {
        breakfast: availableRecipes[3], // Oatmeal
        lunch: availableRecipes[0], // Chicken Salad
        dinner: availableRecipes[1] // Pasta Carbonara
      }
    }
  ]);

  const getCurrentMealPlan = () => {
    return mealPlans.find(plan => plan.date === selectedDate) || {
      id: 'new',
      name: 'New Plan',
      date: selectedDate,
      meals: {}
    };
  };

  const addRecipeToMealPlan = (recipe: Recipe) => {
    const currentPlan = getCurrentMealPlan();
    const updatedMeals = {
      ...currentPlan.meals,
      [selectedMealType]: recipe
    };

    const updatedPlan: MealPlanData = {
      ...currentPlan,
      meals: updatedMeals
    };

    if (currentPlan.id === 'new') {
      setMealPlans([...mealPlans, updatedPlan]);
    } else {
      setMealPlans(mealPlans.map(plan => 
        plan.date === selectedDate ? updatedPlan : plan
      ));
    }
  };

  const removeRecipeFromMealPlan = (mealType: keyof MealPlanData['meals']) => {
    const currentPlan = getCurrentMealPlan();
    const updatedMeals = { ...currentPlan.meals };
    delete updatedMeals[mealType];

    const updatedPlan: MealPlanData = {
      ...currentPlan,
      meals: updatedMeals
    };

    setMealPlans(mealPlans.map(plan => 
      plan.date === selectedDate ? updatedPlan : plan
    ));
  };

  const currentPlan = getCurrentMealPlan();

  return (
    <div className="main">
      <div className="container">
        <h1 className="page-title">Meal Planning</h1>

        {/* Date and Meal Type Selection */}
        <div className="card">
          <div className="grid grid-3">
            <div className="form-group">
              <label className="form-label">Select Date</label>
              <input
                type="date"
                className="form-input"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Meal Type</label>
              <select
                className="form-input"
                value={selectedMealType}
                onChange={(e) => setSelectedMealType(e.target.value as any)}
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">&nbsp;</label>
              <div>
                <button className="btn btn-primary">
                  <i className="fas fa-plus"></i> Add Recipe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-2">
          {/* Current Meal Plan */}
          <div className="card">
            <h2 className="card-title">
              <i className="fas fa-calendar-day"></i> {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </h2>
            
            <div className="meal-plan-grid">
              <div className="meal-slot">
                <div className="meal-slot-title">
                  <i className="fas fa-sun"></i> Breakfast
                </div>
                {currentPlan.meals.breakfast ? (
                  <div>
                    <h4>{currentPlan.meals.breakfast.name}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {currentPlan.meals.breakfast.nutrition.calories} calories
                    </p>
                    <button 
                      className="btn btn-danger"
                      onClick={() => removeRecipeFromMealPlan('breakfast')}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem' }}>
                      No meal planned
                    </p>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setSelectedMealType('breakfast')}
                    >
                      <i className="fas fa-plus"></i> Add Recipe
                    </button>
                  </div>
                )}
              </div>

              <div className="meal-slot">
                <div className="meal-slot-title">
                  <i className="fas fa-cloud-sun"></i> Lunch
                </div>
                {currentPlan.meals.lunch ? (
                  <div>
                    <h4>{currentPlan.meals.lunch.name}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {currentPlan.meals.lunch.nutrition.calories} calories
                    </p>
                    <button 
                      className="btn btn-danger"
                      onClick={() => removeRecipeFromMealPlan('lunch')}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem' }}>
                      No meal planned
                    </p>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setSelectedMealType('lunch')}
                    >
                      <i className="fas fa-plus"></i> Add Recipe
                    </button>
                  </div>
                )}
              </div>

              <div className="meal-slot">
                <div className="meal-slot-title">
                  <i className="fas fa-moon"></i> Dinner
                </div>
                {currentPlan.meals.dinner ? (
                  <div>
                    <h4>{currentPlan.meals.dinner.name}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>
                      {currentPlan.meals.dinner.nutrition.calories} calories
                    </p>
                    <button 
                      className="btn btn-danger"
                      onClick={() => removeRecipeFromMealPlan('dinner')}
                    >
                      <i className="fas fa-trash"></i> Remove
                    </button>
                  </div>
                ) : (
                  <div>
                    <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '1rem' }}>
                      No meal planned
                    </p>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => setSelectedMealType('dinner')}
                    >
                      <i className="fas fa-plus"></i> Add Recipe
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Daily Nutrition Summary */}
            <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
              <h3 style={{ marginBottom: '1rem' }}>Daily Nutrition Summary</h3>
              <div className="grid grid-4">
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
                    {Object.values(currentPlan.meals).reduce((acc, meal) => 
                      acc + (meal?.nutrition.calories || 0), 0
                    )}
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Calories</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
                    {Object.values(currentPlan.meals).reduce((acc, meal) => 
                      acc + (meal?.nutrition.protein || 0), 0
                    )}g
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Protein</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
                    {Object.values(currentPlan.meals).reduce((acc, meal) => 
                      acc + (meal?.nutrition.carbs || 0), 0
                    )}g
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Carbs</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#667eea' }}>
                    {Object.values(currentPlan.meals).reduce((acc, meal) => 
                      acc + (meal?.nutrition.fat || 0), 0
                    )}g
                  </div>
                  <div style={{ color: '#666', fontSize: '0.9rem' }}>Fat</div>
                </div>
              </div>
            </div>
          </div>

          {/* Available Recipes */}
          <div className="card">
            <h2 className="card-title">
              <i className="fas fa-book-open"></i> Available Recipes
            </h2>
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {availableRecipes.map(recipe => (
                <div 
                  key={recipe.id} 
                  className="recipe-card"
                  style={{ marginBottom: '1rem' }}
                >
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
                    <button 
                      className="btn btn-primary"
                      onClick={() => addRecipeToMealPlan(recipe)}
                    >
                      <i className="fas fa-plus"></i> Add to {selectedMealType}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
