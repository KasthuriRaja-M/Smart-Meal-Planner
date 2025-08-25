import React, { useState } from 'react';
import { GroceryItem } from '../types';

const GroceryList: React.FC = () => {
  const [groceryItems, setGroceryItems] = useState<GroceryItem[]>([
    {
      id: '1',
      name: 'Chicken breast',
      amount: 2,
      unit: 'pounds',
      category: 'Protein',
      isChecked: false
    },
    {
      id: '2',
      name: 'Mixed greens',
      amount: 1,
      unit: 'bag',
      category: 'Vegetables',
      isChecked: false
    },
    {
      id: '3',
      name: 'Cherry tomatoes',
      amount: 1,
      unit: 'pint',
      category: 'Vegetables',
      isChecked: false
    },
    {
      id: '4',
      name: 'Cucumber',
      amount: 2,
      unit: 'pieces',
      category: 'Vegetables',
      isChecked: false
    },
    {
      id: '5',
      name: 'Olive oil',
      amount: 1,
      unit: 'bottle',
      category: 'Pantry',
      isChecked: false
    },
    {
      id: '6',
      name: 'Spaghetti',
      amount: 1,
      unit: 'pound',
      category: 'Pasta',
      isChecked: false
    },
    {
      id: '7',
      name: 'Pancetta',
      amount: 8,
      unit: 'ounces',
      category: 'Protein',
      isChecked: false
    },
    {
      id: '8',
      name: 'Eggs',
      amount: 12,
      unit: 'large',
      category: 'Dairy',
      isChecked: false
    },
    {
      id: '9',
      name: 'Parmesan cheese',
      amount: 1,
      unit: 'cup',
      category: 'Dairy',
      isChecked: false
    },
    {
      id: '10',
      name: 'Quinoa',
      amount: 1,
      unit: 'cup',
      category: 'Grains',
      isChecked: false
    }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    amount: 1,
    unit: '',
    category: 'Vegetables'
  });

  const categories = ['Protein', 'Vegetables', 'Fruits', 'Dairy', 'Grains', 'Pantry', 'Pasta', 'Spices'];

  const toggleItem = (id: string) => {
    setGroceryItems(items =>
      items.map(item =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const addItem = () => {
    if (newItem.name.trim() && newItem.unit.trim()) {
      const item: GroceryItem = {
        id: Date.now().toString(),
        name: newItem.name.trim(),
        amount: newItem.amount,
        unit: newItem.unit.trim(),
        category: newItem.category,
        isChecked: false
      };
      setGroceryItems([...groceryItems, item]);
      setNewItem({ name: '', amount: 1, unit: '', category: 'Vegetables' });
    }
  };

  const removeItem = (id: string) => {
    setGroceryItems(items => items.filter(item => item.id !== id));
  };

  const clearCompleted = () => {
    setGroceryItems(items => items.filter(item => !item.isChecked));
  };

  const groupByCategory = (items: GroceryItem[]) => {
    const grouped: { [key: string]: GroceryItem[] } = {};
    items.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });
    return grouped;
  };

  const groupedItems = groupByCategory(groceryItems);
  const completedCount = groceryItems.filter(item => item.isChecked).length;
  const totalCount = groceryItems.length;

  return (
    <div className="main">
      <div className="container">
        <h1 className="page-title">Grocery List</h1>

        {/* Add New Item */}
        <div className="card">
          <h2 className="card-title">
            <i className="fas fa-plus"></i> Add New Item
          </h2>
          <div className="grid grid-4">
            <div className="form-group">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., Bananas"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-input"
                min="0.1"
                step="0.1"
                value={newItem.amount}
                onChange={(e) => setNewItem({ ...newItem, amount: parseFloat(e.target.value) || 1 })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Unit</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g., pounds, pieces"
                value={newItem.unit}
                onChange={(e) => setNewItem({ ...newItem, unit: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-input"
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <button 
            className="btn btn-primary"
            onClick={addItem}
            disabled={!newItem.name.trim() || !newItem.unit.trim()}
          >
            <i className="fas fa-plus"></i> Add Item
          </button>
        </div>

        {/* Progress and Actions */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 className="card-title">
              <i className="fas fa-shopping-cart"></i> Shopping List
            </h2>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ color: '#666' }}>
                {completedCount} of {totalCount} items completed
              </span>
              <div style={{ 
                width: '100px', 
                height: '8px', 
                background: '#e9ecef', 
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%`,
                  height: '100%',
                  background: '#667eea',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
              {completedCount > 0 && (
                <button 
                  className="btn btn-secondary"
                  onClick={clearCompleted}
                >
                  <i className="fas fa-trash"></i> Clear Completed
                </button>
              )}
            </div>
          </div>

          {/* Grocery Items by Category */}
          {Object.keys(groupedItems).length > 0 ? (
            Object.entries(groupedItems).map(([category, items]) => (
              <div key={category} style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                  color: '#667eea', 
                  marginBottom: '1rem', 
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid #667eea'
                }}>
                  <i className="fas fa-tag"></i> {category}
                </h3>
                <div className="grocery-list">
                  {items.map(item => (
                    <div 
                      key={item.id} 
                      className={`grocery-item ${item.isChecked ? 'checked' : ''}`}
                    >
                      <input
                        type="checkbox"
                        className="grocery-checkbox"
                        checked={item.isChecked}
                        onChange={() => toggleItem(item.id)}
                      />
                      <span className="grocery-item-name">{item.name}</span>
                      <span className="grocery-item-amount">
                        {item.amount} {item.unit}
                      </span>
                      <button
                        className="btn btn-danger"
                        style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-state-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>Your grocery list is empty</h3>
              <p>Add some items to get started with your shopping!</p>
            </div>
          )}
        </div>

        {/* Shopping Tips */}
        <div className="card">
          <h2 className="card-title">
            <i className="fas fa-lightbulb"></i> Shopping Tips
          </h2>
          <div className="grid grid-2">
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
                <i className="fas fa-clock"></i> Plan Your Route
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Organize your list by store sections to save time and avoid backtracking.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
                <i className="fas fa-dollar-sign"></i> Budget Friendly
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Stick to your list to avoid impulse purchases and stay within budget.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
                <i className="fas fa-leaf"></i> Fresh First
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Buy fresh produce last to keep it fresh longer and avoid spoilage.
              </p>
            </div>
            <div>
              <h4 style={{ color: '#667eea', marginBottom: '0.5rem' }}>
                <i className="fas fa-mobile-alt"></i> Digital List
              </h4>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                Use your phone to check off items as you shop for convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
