import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the theme context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);  // Toggle between dark and light mode
    };

    // Set the theme based on the state
    const theme = isDarkMode ? 'dark' : 'light';

    // Apply the theme to the document's root element
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkMode]);  // Run when the theme changes

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}  {/* Render child components */}
        </ThemeContext.Provider>
    );
};

export default useTheme = () => useContext(ThemeContext);
