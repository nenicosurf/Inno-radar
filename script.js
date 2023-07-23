// Sample data for the bar chart
const data = [
    { label: "Category 1", value: 10 },
    { label: "Category 2", value: 20 },
    { label: "Category 3", value: 15 },
    // Add more data points as needed
  ];
  
  // Set the dimensions of the chart
  const width = 500;
  const height = 300;
  
  // Create a scale for the y-axis
  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([0, height]);
  
  // Create the SVG element
  const svg = d3.select("#chart-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
  
  // Create the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * (width / data.length))
    .attr("y", d => height - yScale(d.value))
    .attr("width", width / data.length - 5)
    .attr("height", d => yScale(d.value))
    .attr("fill", "steelblue");
  