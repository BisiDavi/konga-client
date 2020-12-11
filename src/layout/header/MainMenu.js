import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  mainmenu: {
    background: '#ed017f',
    color: '#4a4a4a',
    height: '3.75rem',
    maxWidth: '90rem'
  }
});



const MainMenu = () => {
  const classes = useStyles();

  return (
    <nav className={classes.mainmenu}>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="menulinks">
        <a>Store Locator</a>
      </div>
      <div className="menulinks">
      </div>
      <div className="menulinks">
      </div>
      <div className="menulinks">
      </div>
      <div className="menulinks">
      </div>

    </nav>
  )
}

export default MainMenu;
