import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import { useThemeContext } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme} = useThemeContext();
  console.log(theme.isLightTheme);

 
  return <button onClick={toggleTheme}>ToggleTheme</button>;
}

// class ThemeToggle extends Component {
//     static  contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context;
//         return (
//             <button onClick={toggleTheme}>ToggleTheme</button>
//         );
//     }
// }

export default ThemeToggle;
