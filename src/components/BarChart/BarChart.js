import React, { useEffect, useRef, useState } from "react";
import { axisBottom, scaleBand, select, scaleLinear, axisRight } from "d3";
import "../LineChart.css";

const BarChart = () => {
  const [barData, setBarData] = useState([2, 42, 5, 61, 7, 56, 46]);

  const barRef = useRef();

  useEffect(() => {
    const svg = select(barRef.current);
    const xScale = scaleBand()
      .domain(barData.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

    const colorScale = scaleLinear().domain([0, 150]).range(["green", "red"]);

    const xAxis = axisBottom(xScale).ticks(barData.length);

    svg.select(" .x-axis").style("transform", "translateY(150px").call(xAxis);

    const yAxis = axisRight(yScale);

    svg.select(" .y-axis").style("transform", "translateX(300px").call(yAxis);

    svg
      .selectAll("bar")
      .data(barData)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", colorScale)
      .attr("x", (value, index) => xScale(index))
      .attr("y", yScale)
      .attr("width", xScale.bandwidth())
      .transition()
      .attr("height", (value) => 150 - yScale(value));
  }, [barData]);

  return (
    <div className="main-div">
      <h1>The Bar Chart Graph</h1>

      <div className="svg-style">
        <svg ref={barRef}>
          {/* <path d="M0, 120,110,120,160,215" stroke="blue" fill="none" /> */}
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>

      <div className="actions">
        <button onClick={() => setBarData(barData.map((value) => value + 5))}>
          Update Data
        </button>
        <button
          onClick={() => setBarData(barData.filter((value) => value <= 20))}
        >
          Filter Data
        </button>
      </div>
    </div>
  );
};

export default BarChart;
