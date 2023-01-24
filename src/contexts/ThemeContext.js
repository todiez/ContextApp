import React, { createContext, useContext, Component, useState } from "react";

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);



export default function ThemeProvier({ children }) {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "555" },
  });

  const toggleTheme = () => {
    //    this.setState({ isLightTheme: !this.state.isLightTheme });
  
    if (theme.isLightTheme) theme.isLightTheme = false;
    else theme.isLightTheme = true;
    console.log(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// class ThemeContextProvider extends Component {
//     state = {
//         isLightTheme: true,
//         light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
//         dark: { syntax: "#ddd", ui: "#333", bg: "555" }
//      }
//      toggleTheme = () => {
//         this.setState({ isLightTheme: !this.state.isLightTheme });
//      }

//     render() {
//         return (
//             <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//               {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }
// }

// export default ThemeContextProvider;
