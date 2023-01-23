import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Booklist extends Component {
  static contextType = ThemeContext
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;


    return (
      <div className="book-list" style={{color: theme.syntax, background: theme.bg}}>
        <ul>
          <li style={{background: theme.ui}}>Sapiens</li>
          <li style={{background: theme.ui}}>Homo Deus</li>
          <li style={{background: theme.ui}}>Dogs4Life</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;
