import React, { Component } from 'react';
import Sprint from '../../components/Sprint/Sprint';
import Aux from '../../hoc/Aux';
import { csv } from 'd3';
import * as classes from './Sprints.module.scss';

class Sprints extends Component {

  state = {
    currentSprint: {
      id: 0
    },
    sprints: [{id: 0, begin: '31.1.2021', end: '6.2.2021'}, {id: 1, begin: '7.2.2021', end: '13.2.2021', backlog: [['Adlux', {subItems: [['Dokončit úkol', {subItems: [['Udělat tohlenc', {}]]}]]}]]}, {id: 2, begin: '14.2.2021', end: '20.2.2021'}, {id: 3}],
    workData: null
  }

  componentDidMount() {
    csv(`csv/data-${this.state.currentSprint.id}.csv`).then(data => {
      data.forEach(d => {d.odph = +d.odph; d.sth = +d.sth})
      this.setState({workData: data});
    });
    this.updateWorkData(0);
  }

  updateWorkData(id) {
    csv(`csv/data-${id}.csv`).then(data => {
      data.forEach(d => {d.odph = +d.odph; d.sth = +d.sth})
      const odphTotal = data.reduce((prevValue, curValue ) => {
        return curValue.odph + prevValue;
      }, 0);
      const sthTotal = data.reduce((prevValue, curValue ) => {
        return curValue.sth + prevValue;
      }, 0);

      const sprintClone = {...this.state.sprints[id], totalWorked: odphTotal, totalSet: sthTotal};

      this.setState({workData: data, currentSprint: sprintClone});
    });
  }

  onCurrentSprintChangedHandler(id) {
   this.updateWorkData(id);  
  } 


  render() {
    const sprintList = this.state.sprints.map((sprint, id) => <li onClick={() => this.onCurrentSprintChangedHandler(id)} key={id}>Sprint {id} ({sprint.begin} -  {sprint.end})</li>);
    return (
    <Aux>
        <ul className={classes.sprintList}>
         {sprintList}
        </ul>
      <Sprint sprint={this.state.currentSprint} className={classes.currentSprint} workData={this.state.workData}></Sprint>
    </Aux>
    );
  }
  
}

export default Sprints;