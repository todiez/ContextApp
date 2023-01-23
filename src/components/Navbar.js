// import React, { Component } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";

import { useThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { theme } = useThemeContext();

  const { isLightTheme, light, dark } = theme;

  const styleTheme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: styleTheme.ui, color: styleTheme.syntax }}>
      <h1>Context App</h1>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

// class Navbar extends Component {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(context) => {
//           const { isLightTheme, light, dark } = context;
//           console.log(isLightTheme);
//           const theme = isLightTheme ? light : dark;
//           return (
//             <nav style={{ background: theme.ui, color: theme.syntax }}>
//               <h1>Context App</h1>
//               <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//               </ul>
//             </nav>
//           );
//         }}
//       </ThemeContext.Consumer>
//     );
//   }
// }

export default Navbar;
