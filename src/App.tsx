import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import MealPlan from './pages/MealPlan';
import GroceryList from './pages/GroceryList';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/grocery-list" element={<GroceryList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
