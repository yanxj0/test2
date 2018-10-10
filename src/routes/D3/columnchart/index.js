import React, { Component } from 'react';
import { connect } from 'dva';
import Columnchart from '../../../components/D3/columchart';
import * as d3 from 'd3';

class chart extends Component{
    
    componentDidMount() {
        //画布大小
        let width = 400;
        let height = 400;

        //在 body 里添加一个 SVG 画布   
        let svg = d3.select("#d3-column-chart-svg")
            .attr("width", width)
            .attr("height", height);

        //画布周边的空白
        let padding = { left: 30, right: 30, top: 20, bottom: 20 };
        //定义一个数组
        let dataset = [10, 20, 30, 40, 33, 24, 12, 5];

        //x轴的比例尺
        let xScale = d3.scaleLinear()
            .domain([0,dataset.length])
            .range([0, width - padding.left - padding.right]);
        //y轴的比例尺
        let yScale = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([height - padding.top - padding.bottom, 0]);
        //定义x轴
        let xAxis = d3.axisBottom()
            .scale(xScale);

        //定义y轴
        let yAxis = d3.axisLeft()
            .scale(yScale);
        //矩形之间的空白
        let rectPadding = 4;

        //添加矩形元素
        let rects = svg.selectAll(".MyRect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "MyRect")
            .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function (d, i) {
                return xScale(i) + rectPadding / 2;
            })
            .attr("y", function (d) {
                return yScale(d);
            })
            .attr("width", 30)
            .attr("height", function (d) {
                return height - padding.top - padding.bottom - yScale(d);
            });

        //添加文字元素
        let texts = svg.selectAll(".MyText")
            .data(dataset)
            .enter()
            .append("text")
            .attr("class", "MyText")
            .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
            .attr("x", function (d, i) {
                return xScale(i) + rectPadding / 2;
            })
            .attr("y", function (d) {
                return yScale(d);
            })
            .attr("dx", 15)
            .attr("dy", '1em')
            .text(function (d) {
                return d;
            });
        //添加x轴
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
            .call(xAxis);

        //添加y轴
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding.left + "," + padding.top + ")")
            .call(yAxis);
    }
    render() {
        const data = this.props;
        return (
            <Columnchart data={data}/>
        );
    }
}

export default connect(({ D3 }) => ({
    D3,
  }))(chart);