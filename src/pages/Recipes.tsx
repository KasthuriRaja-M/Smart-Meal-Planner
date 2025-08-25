import React, { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeRating from '../components/RecipeRating';
import { Recipe, Review } from '../types';

const Recipes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  // Mock recipes data
  const recipes: Recipe[] = [
    {
      id: '1',
      name: 'Grilled Chicken Salad',
      description: 'A healthy and delicious grilled chicken salad with fresh vegetables.',
      ingredients: [
        { id: '1', name: 'Chicken breast', amount: 2, unit: 'pieces', category: 'Protein' },
        { id: '2', name: 'Mixed greens', amount: 4, unit: 'cups', category: 'Vegetables' },
        { id: '3', name: 'Cherry tomatoes', amount: 1, unit: 'cup', category: 'Vegetables' },
        { id: '4', name: 'Cucumber', amount: 1, unit: 'piece', category: 'Vegetables' },
        { id: '5', name: 'Olive oil', amount: 2, unit: 'tbsp', category: 'Oils' }
      ],
      instructions: [
        'Season chicken breast with salt and pepper',
        'Grill chicken for 6-8 minutes per side',
        'Chop vegetables and mix in a bowl',
        'Slice grilled chicken and add to salad',
        'Drizzle with olive oil and serve'
      ],
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      difficulty: 'Easy',
      cuisine: 'American',
      tags: ['healthy', 'salad', 'chicken', 'grilled'],
      nutrition: { calories: 350, protein: 25, carbs: 15, fat: 20, fiber: 8, sugar: 5 }
    },
    {
      id: '2',
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
      ingredients: [
        { id: '1', name: 'Spaghetti', amount: 1, unit: 'pound', category: 'Pasta' },
        { id: '2', name: 'Pancetta', amount: 8, unit: 'ounces', category: 'Protein' },
        { id: '3', name: 'Eggs', amount: 4, unit: 'large', category: 'Dairy' },
        { id: '4', name: 'Parmesan cheese', amount: 1, unit: 'cup', category: 'Dairy' },
        { id: '5', name: 'Black pepper', amount: 1, unit: 'tsp', category: 'Spices' }
      ],
      instructions: [
        'Cook pasta according to package directions',
        'Cook pancetta until crispy',
        'Beat eggs and cheese in a bowl',
        'Combine hot pasta with egg mixture',
        'Add pancetta and season with pepper'
      ],
      prepTime: 10,
      cookTime: 15,
      servings: 2,
      difficulty: 'Medium',
      cuisine: 'Italian',
      tags: ['pasta', 'italian', 'creamy', 'quick'],
      nutrition: { calories: 650, protein: 20, carbs: 70, fat: 30, fiber: 3, sugar: 2 }
    },
    {
      id: '3',
      name: 'Vegetarian Buddha Bowl',
      description: 'A colorful and nutritious bowl packed with vegetables and quinoa.',
      ingredients: [
        { id: '1', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
        { id: '2', name: 'Sweet potato', amount: 1, unit: 'large', category: 'Vegetables' },
        { id: '3', name: 'Chickpeas', amount: 1, unit: 'can', category: 'Legumes' },
        { id: '4', name: 'Kale', amount: 2, unit: 'cups', category: 'Vegetables' },
        { id: '5', name: 'Avocado', amount: 1, unit: 'piece', category: 'Fruits' }
      ],
      instructions: [
        'Cook quinoa according to package directions',
        'Roast sweet potato and chickpeas',
        'Massage kale with olive oil',
        'Assemble bowl with all ingredients',
        'Top with sliced avocado'
      ],
      prepTime: 20,
      cookTime: 30,
      servings: 2,
      difficulty: 'Easy',
      cuisine: 'International',
      tags: ['vegetarian', 'healthy', 'bowl', 'quinoa'],
      nutrition: { calories: 450, protein: 15, carbs: 60, fat: 18, fiber: 12, sugar: 8 }
    }
  ];

  const cuisines = ['All', 'American', 'Italian', 'International', 'Asian', 'Mexican'];
  const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCuisine = selectedCuisine === '' || selectedCuisine === 'All' || recipe.cuisine === selectedCuisine;
    const matchesDifficulty = selectedDifficulty === '' || selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;

    return matchesSearch && matchesCuisine && matchesDifficulty;
  });

  const handleViewRecipe = (recipe: Recipe) => {
    // In a real app, this would navigate to a detailed recipe view
    console.log('Viewing recipe:', recipe.name);
  };

  const handleAddToMealPlan = (recipe: Recipe) => {
    // In a real app, this would add the recipe to the meal plan
    console.log('Adding to meal plan:', recipe.name);
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="page-title">Recipe Collection</h1>

        {/* Search and Filters */}
        <div className="card">
          <div className="grid grid-3">
            <div className="form-group">
              <label className="form-label">Search Recipes</label>
              <input
                type="text"
                className="form-input"
                placeholder="Search by name, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Cuisine</label>
              <select
                className="form-input"
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
              >
                <option value="">All Cuisines</option>
                {cuisines.slice(1).map(cuisine => (
                  <option key={cuisine} value={cuisine}>{cuisine}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Difficulty</label>
              <select
                className="form-input"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                <option value="">All Difficulties</option>
                {difficulties.slice(1).map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-3">
            {filteredRecipes.map(recipe => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onView={handleViewRecipe}
                onAddToMealPlan={handleAddToMealPlan}
              />
            ))}
          </div>
        ) : (
          <div className="card">
            <div className="empty-state">
              <div className="empty-state-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>No recipes found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          </div>
        )}

        {/* Recipe Stats */}
        <div className="card">
          <h2 className="card-title">
            <i className="fas fa-info-circle"></i> Recipe Statistics
          </h2>
          <div className="grid grid-4">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {recipes.length}
              </div>
              <div style={{ color: '#666' }}>Total Recipes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {recipes.filter(r => r.difficulty === 'Easy').length}
              </div>
              <div style={{ color: '#666' }}>Easy Recipes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {recipes.filter(r => r.cuisine === 'Italian').length}
              </div>
              <div style={{ color: '#666' }}>Italian Recipes</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
                {Math.round(recipes.reduce((acc, r) => acc + r.nutrition.calories, 0) / recipes.length)}
              </div>
              <div style={{ color: '#666' }}>Avg Calories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
