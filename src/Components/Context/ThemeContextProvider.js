import React , { useState } from 'react';

// styles
import { ThemeProvider } from 'styled-components';
import { BasicTheme , DarkTheme } from '../../Styles/Theme/Theme';

// context
export const ThemeContext = React.createContext();

const ThemeContextProvider = ({children}) => {
    const [darkMode , setDarkMode] = useState(false);
    const handleTheme = () => setDarkMode(!darkMode);
    return (
        <ThemeProvider theme={darkMode ? DarkTheme : BasicTheme}>
            <ThemeContext.Provider value={[darkMode , handleTheme]}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export default ThemeContextProvider;