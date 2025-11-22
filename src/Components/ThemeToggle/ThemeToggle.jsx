import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <div className="theme-toggle-container">
            <button onClick={toggleTheme} className="theme-toggle-fab" aria-label="Toggle Theme">
                {theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
    );
};

export default ThemeToggle;
