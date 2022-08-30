import React, { useRef, useState, useEffect } from "react";
import { select, line, axisBottom, axisRight, scaleLinear } from "d3";

import "../components/LineChart.css";

const LineChart = (props) => {
  const [data, setData] = useState([
    0, 20, 30, 45, 27, 48, 80, 34, 56, 76, 34, 45, 5, 77, 34, 67,
  ]);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);

    const xScale = scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 300]);

    const yScale = scaleLinear().domain([0, 80]).range([150, 0]);

    const xAxis = axisBottom(xScale).ticks(7);
    svg.select(" .x-axis").style("transform", "translateY(150px)").call(xAxis);

    const yAxis = axisRight(yScale).ticks(4);
    svg.select(" .y-axis").style("transform", "translateX(300px)").call(yAxis);

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale);

    svg
      .selectAll(" .line")
      .data([data])
      .join("path")
      .attr("d", myLine)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <div className="main-div">
      <h1>The Line Chart</h1>
      <div className="svg-style">
        <svg ref={svgRef}>
          {/* <path d="M0, 120,110,120,160,215" stroke="blue" fill="none" /> */}
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>

      <div className="actions">
        <button onClick={() => setData(data.map((value) => value + 5))}>
          Update Data
        </button>
        <button onClick={() => setData(data.filter((value) => value <= 20))}>
          Filter Data
        </button>
      </div>
    </div>
  );
};

export default LineChart;
