

// 创建 SVG 容器
 var svg = d3.select("#chart");
  
// 绘制线段
svg.append("line")
  .attr("x1", 50)
  .attr("y1", 150)
  .attr("x2", 300)
  .attr("y2", 150)
  .attr("stroke", "lime")
  .attr("stroke-width", "10px");


  // 显示文字
svg.append("text")
.attr("x", 150)
.attr("y", 100)
.attr("text-anchor", "middle")
.attr("alignment-baseline", "middle")
.text("10kV I段母线")
.attr("fill", "black")
.attr("font-size", 25);

  // 绘制红色长方形
svg.append("rect")
.attr("x", 150)
.attr("y", 250)
.attr("width", 20)
.attr("height", 40)
.attr("fill", "red")
.attr("stroke", "black")
.attr("stroke-width", 0.2);

svg.append("line")
  .attr("x1", 160)
  .attr("y1", 150)
  .attr("x2", 160)
  .attr("y2", 250)
  .attr("stroke", "lime")
  .attr("stroke-width", "5px");

  svg.append("line")
  .attr("x1", 160)
  .attr("y1", 290)
  .attr("x2", 160)
  .attr("y2", 390)
  .attr("stroke", "lime")
  .attr("stroke-width", "5px");


  // 定义三角形的路径
var path = "M 160 440 L 150 390 L 170 390 Z";

// 绘制三角形
svg.append("path")
  .attr("d", path)
  .attr("fill", "lime");
