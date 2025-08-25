import React, { useState } from 'react';
import { Recipe } from '../types';
import RecipeCard from '../components/RecipeCard';
import RecipeRating from '../components/RecipeRating';

const Recipes: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Mock recipes with ratings and reviews
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: '1',
      name: 'Grilled Chicken Salad',
      description: 'A healthy and delicious grilled chicken salad with fresh vegetables.',
      ingredients: [
        { id: '1', name: 'Chicken breast', amount: 2, unit: 'pieces', category: 'Protein' },
        { id: '2', name: 'Mixed greens', amount: 4, unit: 'cups', category: 'Vegetables' },
        { id: '3', name: 'Cherry tomatoes', amount: 1, unit: 'cup', category: 'Vegetables' },
        { id: '4', name: 'Cucumber', amount: 1, unit: 'piece', category: 'Vegetables' },
        { id: '5', name: 'Olive oil', amount: 2, unit: 'tbsp', category: 'Oils' },
        { id: '6', name: 'Balsamic vinegar', amount: 1, unit: 'tbsp', category: 'Condiments' }
      ],
      instructions: [
        'Season chicken breast with salt and pepper',
        'Grill chicken for 6-8 minutes per side until cooked through',
        'Let chicken rest for 5 minutes, then slice',
        'Combine mixed greens, tomatoes, and cucumber in a bowl',
        'Top with sliced chicken',
        'Drizzle with olive oil and balsamic vinegar'
      ],
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      difficulty: 'Easy',
      cuisine: 'American',
      tags: ['healthy', 'salad', 'chicken'],
      nutrition: { calories: 350, protein: 25, carbs: 15, fat: 20, fiber: 8, sugar: 5 },
      rating: 4.5,
      reviewCount: 12,
      reviews: [
        {
          id: '1',
          recipeId: '1',
          userId: 'user-1',
          userName: 'Sarah M.',
          rating: 5,
          comment: 'Absolutely delicious! The chicken was perfectly grilled and the salad was so fresh.',
          date: '2024-01-15',
          helpful: 8
        },
        {
          id: '2',
          recipeId: '1',
          userId: 'user-2',
          userName: 'Mike R.',
          rating: 4,
          comment: 'Great healthy option. I added some avocado for extra flavor.',
          date: '2024-01-10',
          helpful: 5
        }
      ]
    },
    {
      id: '2',
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, and pancetta.',
      ingredients: [
        { id: '7', name: 'Spaghetti', amount: 1, unit: 'pound', category: 'Pasta' },
        { id: '8', name: 'Pancetta', amount: 8, unit: 'ounces', category: 'Protein' },
        { id: '9', name: 'Eggs', amount: 4, unit: 'large', category: 'Dairy' },
        { id: '10', name: 'Parmesan cheese', amount: 1, unit: 'cup', category: 'Dairy' },
        { id: '11', name: 'Black pepper', amount: 1, unit: 'tsp', category: 'Spices' },
        { id: '12', name: 'Salt', amount: 1, unit: 'tsp', category: 'Spices' }
      ],
      instructions: [
        'Bring a large pot of salted water to boil',
        'Cook spaghetti according to package directions',
        'Meanwhile, cook pancetta in a large skillet until crispy',
        'In a bowl, whisk together eggs, cheese, and pepper',
        'Drain pasta, reserving 1 cup of pasta water',
        'Add hot pasta to skillet with pancetta',
        'Remove from heat and quickly stir in egg mixture',
        'Add pasta water as needed to create a creamy sauce'
      ],
      prepTime: 10,
      cookTime: 15,
      servings: 2,
      difficulty: 'Medium',
      cuisine: 'Italian',
      tags: ['pasta', 'italian', 'creamy'],
      nutrition: { calories: 650, protein: 20, carbs: 70, fat: 30, fiber: 3, sugar: 2 },
      rating: 4.8,
      reviewCount: 18,
      reviews: [
        {
          id: '3',
          recipeId: '2',
          userId: 'user-3',
          userName: 'Maria L.',
          rating: 5,
          comment: 'Authentic Italian taste! The sauce was perfectly creamy.',
          date: '2024-01-12',
          helpful: 12
        },
        {
          id: '4',
          recipeId: '2',
          userId: 'user-4',
          userName: 'John D.',
          rating: 4,
          comment: 'Delicious but be careful not to scramble the eggs!',
          date: '2024-01-08',
          helpful: 7
        }
      ]
    },
    {
      id: '3',
      name: 'Vegetarian Buddha Bowl',
      description: 'A colorful and nutritious bowl packed with vegetables and quinoa.',
      ingredients: [
        { id: '13', name: 'Quinoa', amount: 1, unit: 'cup', category: 'Grains' },
        { id: '14', name: 'Sweet potato', amount: 1, unit: 'large', category: 'Vegetables' },
        { id: '15', name: 'Chickpeas', amount: 1, unit: 'can', category: 'Legumes' },
        { id: '16', name: 'Kale', amount: 2, unit: 'cups', category: 'Vegetables' },
        { id: '17', name: 'Avocado', amount: 1, unit: 'piece', category: 'Fruits' },
        { id: '18', name: 'Tahini', amount: 2, unit: 'tbsp', category: 'Condiments' }
      ],
      instructions: [
        'Cook quinoa according to package directions',
        'Roast sweet potato cubes at 400°F for 25 minutes',
        'Drain and rinse chickpeas',
        'Massage kale with olive oil and salt',
        'Assemble bowls with quinoa, sweet potato, chickpeas, and kale',
        'Top with sliced avocado and drizzle with tahini sauce'
      ],
      prepTime: 20,
      cookTime: 30,
      servings: 2,
      difficulty: 'Easy',
      cuisine: 'International',
      tags: ['vegetarian', 'healthy', 'bowl'],
      nutrition: { calories: 450, protein: 15, carbs: 60, fat: 18, fiber: 12, sugar: 8 },
      rating: 4.2,
      reviewCount: 9,
      reviews: [
        {
          id: '5',
          recipeId: '3',
          userId: 'user-5',
          userName: 'Emma W.',
          rating: 4,
          comment: 'So colorful and filling! Perfect for meal prep.',
          date: '2024-01-14',
          helpful: 6
        }
      ]
    },
    {
      id: '4',
      name: 'Oatmeal with Berries',
      description: 'Warm oatmeal topped with fresh berries and honey.',
      ingredients: [
        { id: '19', name: 'Rolled oats', amount: 1, unit: 'cup', category: 'Grains' },
        { id: '20', name: 'Milk', amount: 2, unit: 'cups', category: 'Dairy' },
        { id: '21', name: 'Mixed berries', amount: 1, unit: 'cup', category: 'Fruits' },
        { id: '22', name: 'Honey', amount: 2, unit: 'tbsp', category: 'Sweeteners' },
        { id: '23', name: 'Cinnamon', amount: 1, unit: 'tsp', category: 'Spices' }
      ],
      instructions: [
        'Bring milk to a gentle boil in a medium saucepan',
        'Stir in oats and reduce heat to low',
        'Cook for 5 minutes, stirring occasionally',
        'Remove from heat and let stand for 2 minutes',
        'Top with berries, honey, and a sprinkle of cinnamon'
      ],
      prepTime: 5,
      cookTime: 10,
      servings: 1,
      difficulty: 'Easy',
      cuisine: 'American',
      tags: ['breakfast', 'healthy', 'oats'],
      nutrition: { calories: 250, protein: 8, carbs: 45, fat: 5, fiber: 6, sugar: 15 },
      rating: 4.6,
      reviewCount: 15,
      reviews: [
        {
          id: '6',
          recipeId: '4',
          userId: 'user-6',
          userName: 'Lisa K.',
          rating: 5,
          comment: 'Perfect breakfast! I add nuts for extra protein.',
          date: '2024-01-16',
          helpful: 9
        },
        {
          id: '7',
          recipeId: '4',
          userId: 'user-7',
          userName: 'David P.',
          rating: 4,
          comment: 'Simple and delicious. Great way to start the day.',
          date: '2024-01-11',
          helpful: 4
        }
      ]
    }
  ]);

  const cuisines = ['all', ...Array.from(new Set(recipes.map(r => r.cuisine)))];
  const difficulties = ['all', 'Easy', 'Medium', 'Hard'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCuisine = selectedCuisine === 'all' || recipe.cuisine === selectedCuisine;
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCuisine && matchesDifficulty;
  });

  const handleAddReview = (review: any) => {
    const newReview = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };

    setRecipes(recipes.map(recipe => {
      if (recipe.id === review.recipeId) {
        const updatedReviews = [...(recipe.reviews || []), newReview];
        const totalRating = updatedReviews.reduce((sum, r) => sum + r.rating, 0);
        const averageRating = totalRating / updatedReviews.length;
        
        return {
          ...recipe,
          reviews: updatedReviews,
          rating: averageRating,
          reviewCount: updatedReviews.length
        };
      }
      return recipe;
    }));
  };

  return (
    <div className="main">
      <div className="container">
        <h1 className="page-title">Recipe Collection</h1>

        {/* Search and Filter */}
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
                {cuisines.map(cuisine => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine === 'all' ? 'All Cuisines' : cuisine}
                  </option>
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
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty === 'all' ? 'All Difficulties' : difficulty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-2">
          {/* Recipe List */}
          <div className="card">
            <h2 className="card-title">
              <i className="fas fa-book-open"></i> Recipes ({filteredRecipes.length})
            </h2>
            <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {filteredRecipes.map(recipe => (
                <div 
                  key={recipe.id} 
                  className="recipe-card"
                  style={{ 
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    border: selectedRecipe?.id === recipe.id ? '2px solid #667eea' : '1px solid #e9ecef'
                  }}
                  onClick={() => setSelectedRecipe(recipe)}
                >
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </div>

          {/* Recipe Details */}
          <div className="card">
            {selectedRecipe ? (
              <div>
                <h2 className="card-title">
                  <i className="fas fa-utensils"></i> {selectedRecipe.name}
                </h2>
                
                <p style={{ color: '#666', marginBottom: '1rem' }}>
                  {selectedRecipe.description}
                </p>

                <div className="recipe-meta" style={{ marginBottom: '1rem' }}>
                  <span>
                    <i className="fas fa-clock"></i> {selectedRecipe.prepTime + selectedRecipe.cookTime} min
                  </span>
                  <span>
                    <i className="fas fa-users"></i> {selectedRecipe.servings} servings
                  </span>
                  <span>
                    <i className="fas fa-fire"></i> {selectedRecipe.nutrition.calories} cal
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> {selectedRecipe.difficulty}
                  </span>
                  <span>
                    <i className="fas fa-globe"></i> {selectedRecipe.cuisine}
                  </span>
                </div>

                <div className="grid grid-2">
                  <div>
                    <h3>Ingredients</h3>
                    <ul>
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={ingredient.id}>
                          {ingredient.amount} {ingredient.unit} {ingredient.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Nutrition</h3>
                    <div className="grid grid-2">
                      <div>Calories: {selectedRecipe.nutrition.calories}</div>
                      <div>Protein: {selectedRecipe.nutrition.protein}g</div>
                      <div>Carbs: {selectedRecipe.nutrition.carbs}g</div>
                      <div>Fat: {selectedRecipe.nutrition.fat}g</div>
                    </div>
                  </div>
                </div>

                <h3>Instructions</h3>
                <ol>
                  {selectedRecipe.instructions.map((instruction, index) => (
                    <li key={index} style={{ marginBottom: '0.5rem' }}>
                      {instruction}
                    </li>
                  ))}
                </ol>

                {/* Recipe Rating Component */}
                <RecipeRating 
                  recipe={selectedRecipe} 
                  onAddReview={handleAddReview}
                />
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                <i className="fas fa-utensils" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}></i>
                <p>Select a recipe to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
