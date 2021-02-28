import React, { Component } from 'react';
import * as classes from './Progress.module.scss';
import Event from '../../components/Event/Event';

class Progress extends Component {

  state = {
    events: [{heading: 'Nový projekt: MyDevil', description: 'Zahajujeme práci na novém projektu MyDevil, který se týká depresivních potisků na mikiny.', date: '11.2.2021'},]
  }

  render() {
    const events = this.state.events.map((event) => {
      return <Event heading={event.heading} description={event.description} date={event.date}></Event>;
    });
    
    return (
      <div className={classes.Progress}>
       {events} 
      </div>
    );
  }
}

export default Progress;