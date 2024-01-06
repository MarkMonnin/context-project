import { createContext, useContext, useState } from "react";

// start the context
const ThemeContext = createContext(undefined);

// define the context: a theme variable and a toggleTheme function
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light")
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
};

// save the context
export const useTheme = () => useContext(ThemeContext);

