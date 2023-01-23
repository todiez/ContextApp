import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";




import { useThemeContext } from "../contexts/ThemeContext";

function Booklist() {
  const { theme } = useThemeContext();

  const { isLightTheme, light, dark } = theme;

  const styleTheme = isLightTheme ? light : dark;

  return (
          <div className="book-list" style={{color: styleTheme.syntax, background: styleTheme.bg}}>
            <ul>
              <li style={{background: theme.ui}}>Sapiens</li>
              <li style={{background: theme.ui}}>Homo Deus</li>
              <li style={{background: theme.ui}}>Dogs4Life</li>
            </ul>
          </div>
        );
}


// class Booklist extends Component {
//   static contextType = ThemeContext
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;


//     return (
//       <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
//         <ul>
//           <li style={{background: theme.ui}}>Sapiens</li>
//           <li style={{background: theme.ui}}>Homo Deus</li>
//           <li style={{background: theme.ui}}>Dogs4Life</li>
//         </ul>
//       </div>
//     );
//   }
// }

export default Booklist;
