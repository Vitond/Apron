import React, { Component } from 'react';
import * as classes from './SprintBacklog.module.scss';
import Aux from '../../../hoc/Aux';

class SprintBacklog extends Component {

  render() {
   
    let backlog;
    if (this.props.backlog) {

      //Browsing all subItems (projects) of the backlog object, for each rendering a heading with the project name and all of it´s subordinate tasks
      backlog = this.props.backlog.map((project, id) => {

          //Rendering all project´s subordinate elements
         const subItems = project[1].subItems.map((subItem, id) => {

            //Rendering all  subItem´s subordinate elements
            const subItems = subItem[1].subItems.map((subItem, id) => {
              return <li key={id}>{subItem[0]}</li>
            });

            return (
              <Aux key={id}>
                <p>{subItem[0]}</p>
                <ul>
                  {subItems}
                </ul>
              </Aux>
            );

         })

         return (
          <Aux key={id}>
            <h4>{project[0]}</h4>
            {subItems}
          </Aux>
         );
         
      });

    }  
    return <div className={classes.SprintBacklog}>
      {backlog}
    </div>;
  }
}

export default SprintBacklog;