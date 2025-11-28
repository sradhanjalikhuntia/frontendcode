//ThemeContext.jsx

import { createContext, useState } from "react";


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");


  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


//App.jsx

import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import Home from "./Home";

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

function MainApp() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const bgStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    height: "100vh",
    padding: "20px"
  };

  return (
    <div style={bgStyle}>
      <h1>College Portal Theme Switcher</h1>

      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <Home />
    </div>
  );
}


//Home.jsx

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  const card = {
    marginTop: "30px",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
    color: theme === "light" ? "#000" : "#fff"
  };

  return (
    <div style={card}>
      <h2>Welcome Student!</h2>
      <p>Current Theme: {theme.toUpperCase()}</p>
    </div>
  );
}
