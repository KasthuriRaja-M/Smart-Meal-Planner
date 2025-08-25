# Smart Meal Planner

A comprehensive meal planning application built with React and TypeScript that helps users manage recipes, plan meals, and organize grocery lists.

## Features

### 🍽️ Recipe Management
- Browse and search recipes by name, description, or tags
- Filter recipes by cuisine type and difficulty level
- View detailed recipe information including ingredients, instructions, and nutrition facts
- Add recipes to meal plans

### 📅 Meal Planning
- Create daily meal plans with breakfast, lunch, and dinner
- Drag and drop recipes into meal slots
- View daily nutrition summaries
- Plan meals for different dates

### 🛒 Grocery List Management
- Create and manage shopping lists
- Organize items by categories (Protein, Vegetables, Dairy, etc.)
- Check off items as you shop
- Add new items with quantities and units
- Clear completed items

### 📊 Dashboard
- Overview of meal planning statistics
- Quick access to recent recipes
- Today's meal plan summary
- Quick action buttons for common tasks

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Custom CSS with modern design
- **Build Tool**: Webpack with development server
- **Icons**: Font Awesome
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
smart-meal-planner/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── RecipeCard.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Recipes.tsx
│   │   ├── MealPlan.tsx
│   │   └── GroceryList.tsx
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── App.css
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smart-meal-planner
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

### Dashboard
- View your meal planning overview
- Access quick statistics
- Navigate to different sections

### Recipes
- Browse all available recipes
- Use search and filters to find specific recipes
- View recipe details and nutrition information
- Add recipes to your meal plan

### Meal Planning
- Select a date to plan meals
- Choose meal types (breakfast, lunch, dinner)
- Add recipes from your collection
- View daily nutrition summaries
- Remove meals from your plan

### Grocery List
- Add items to your shopping list
- Organize items by categories
- Check off items as you shop
- Clear completed items
- View shopping tips

## Features in Detail

### Recipe Management
- **Search**: Find recipes by name, description, or tags
- **Filtering**: Filter by cuisine type and difficulty level
- **Nutrition Info**: View calories, protein, carbs, fat, fiber, and sugar
- **Cooking Details**: Prep time, cook time, servings, and difficulty

### Meal Planning
- **Daily Planning**: Plan meals for specific dates
- **Meal Types**: Organize by breakfast, lunch, and dinner
- **Nutrition Tracking**: Automatic calculation of daily nutrition totals
- **Recipe Integration**: Easy addition of recipes to meal plans

### Grocery List
- **Categorized Items**: Organize by food categories
- **Progress Tracking**: Visual progress bar for shopping completion
- **Item Management**: Add, remove, and check off items
- **Shopping Tips**: Helpful tips for efficient shopping

## Design Features

- **Modern UI**: Clean, responsive design with gradient backgrounds
- **Interactive Elements**: Hover effects and smooth transitions
- **Mobile Responsive**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Proper semantic HTML and keyboard navigation
- **Visual Feedback**: Loading states and empty states

## Future Enhancements

- User authentication and profiles
- Recipe sharing and social features
- Nutritional goal tracking
- Meal plan templates
- Recipe import from external sources
- Shopping list sharing
- Mobile app version
- Integration with grocery delivery services

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please open an issue in the repository.

---

**Smart Meal Planner** - Making meal planning simple and enjoyable! 🍳✨
