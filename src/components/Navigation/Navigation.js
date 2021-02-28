import React from 'react';
import * as classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';


const navigation = () => {
  
  return (
     <div className={classes.navigation}>
       <ul className={classes.navigation__list}>
         <li className={classes.navigation__item}><NavLink activeClassName={classes.active} to="/" exact>Home</NavLink></li>
         <li className={classes.navigation__item}><NavLink activeClassName={classes.active} to="/sprints">Sprints</NavLink></li>
         <li className={classes.navigation__item}><NavLink activeClassName={classes.active} to="/projects">Projects</NavLink></li>
         <li className={classes.navigation__item}><NavLink activeClassName={classes.active} to="/estimates">Estimates</NavLink></li>
         <li className={classes.navigation__item}><NavLink activeClassName={classes.active} to="/meetings">Meetings</NavLink></li>
         <li className={classes.navigation__item}><NavLink activeClassName={classes.active} to="/progress">Progress</NavLink></li>
       </ul>
     </div>
  )
};

export default navigation;