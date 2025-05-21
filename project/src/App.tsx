import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailTab from './components/DetailTab';
import './App.css';

// Create the context for theme
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const Context1 = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Context1.Provider value={{ theme, toggleTheme }}>
      <Router>
        <Routes>
          <Route path="/" element={<div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <a href="/room/1" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300">
              View Room Details
            </a>
          </div>} />
          <Route path="/room/:id" element={<DetailTab />} />
        </Routes>
      </Router>
    </Context1.Provider>
  );
}

export default App;