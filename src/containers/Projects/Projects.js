import React, { Component } from 'react';
import Project from '../../components/Project/Project';

class Projects extends Component {

  state = {
    currentProject: {}
  };

  render() {
    return (
      <Project></Project>
    );
  }
}

export default Projects;