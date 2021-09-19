import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import '../css/Nav.css';


function Nav(props) {
  const {newStyles, toggleMode,good} = props;
  return(
    <div className="nav" style={newStyles.countriesContainerColor}>
      <div className="nav-items">
          <h1 style={newStyles.h2}>Where in the world?</h1>
          <ThemeSwitcher newStyles={newStyles} toggleMode={toggleMode} good={good}/>
      </div>
    </div> 
  )
}
export default Nav;