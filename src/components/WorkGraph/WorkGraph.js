import React, { Component } from 'react';
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom, scaleOrdinal, svg } from 'd3';
import * as classes from './WorkGraph.module.scss';

class WorkGraph extends Component {

  render() {
    return (
      <svg width="800" height="400"></svg>
    );
  }

  componentDidUpdate() {
    if (this.props.data) {
      this.renderData(this.props.data);
    } else {
      const svg = select('svg');
      svg.selectAll('*').remove();
    }
  }

  renderData(data) {

    // const color = scaleOrdinal()
    // .range(["#ff8c00", "#bc6fc9", "#2d7ce3", "#e0341d", "#9e339b", "#65c750", ])

    const svg = select('svg');
    svg.selectAll('*').remove();

    svg.attr('class', classes.WorkGraph);

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const xValue = d => d.odph;
    const yValue = d => d.clen;
    const margin = { top: 20, right: 20, bottom: 20, left: 100};
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = scaleLinear()
      .domain([0, max(data, d => d.odph > d.sth ? d.odph : d.sth)])
      .range([0, innerWidth]);

    const yScale = scaleBand()
      .domain(data.map(yValue))
      .range([0, innerHeight])
      .padding(0.1)

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    g.append('g').call(axisLeft(yScale));
    g.append('g').call(axisBottom(xScale))
      .attr('transform', `translate(0,${innerHeight})`);

    g
    .selectAll('.sth')
    .data(data)
    .enter()
        .append('rect')
          .attr('class', 'sth')
          .attr('y', d => yScale(yValue(d)))
          .attr('width', d => xScale(d.sth))
          .attr('height', yScale.bandwidth())
    
    g
    .selectAll(".odph")
    .data(data)
    .enter()
    .append("rect")
      .attr('class', classes.odph)
      .attr('y', d => yScale(yValue(d)))
      .attr('width', d => xScale(xValue(d)))
      .attr('height', yScale.bandwidth())
      //.attr("fill", d => color(d.key));
  }
  
}

export default WorkGraph;

