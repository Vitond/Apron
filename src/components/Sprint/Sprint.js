import React from 'react';
import WorkGraph from '../WorkGraph/WorkGraph';
import * as classes from './Sprint.module.scss';
import SprintBacklog from './SprintBacklog/SprintBacklog';


const sprint = (props) => {

    const classNames = [props.className, classes.Sprint];
    const classString = classNames.join(' ');
    return (
      <div className={classString}>
        {props.sprint ? <h1>Sprint {props.sprint.id} ({props.sprint.begin} - {props.sprint.end})</h1> : null }
        <h3>Workgraph</h3>
        <p>Celkem stanoveno: {props.sprint.totalSet}</p>
        <p>Celkem odpracováno: {props.sprint.totalWorked}</p>
        <WorkGraph data={props.workData}/>
        <h3>Backlog</h3>
        <SprintBacklog backlog={props.sprint.backlog}></SprintBacklog>
      </div>
    );
  
}

export default sprint;