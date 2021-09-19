import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import  '../css/ThemeSwitcher.css';

  function ThemeSwitcher(props) {
    const {toggleMode, newStyles} = props
    return(
      <div className="switch">
        <FontAwesomeIcon icon={faMoon} className="moon-icon" onClick={toggleMode} />
        <h4 style={newStyles.h2} >Dark Mode</h4>
      </div>
    )
  }
  export default ThemeSwitcher;