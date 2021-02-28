import React from 'react';
import * as classes from './Event.module.scss';

const Event = (props) => {
  return (
    <div className={classes.Event}>
      <h4 className={classes.Event__heading}>{props.heading}</h4>
      <p className={classes.Event__date}>{props.date}</p>
      <p >{props.description}</p>
    </div>
  );
};

export default Event;