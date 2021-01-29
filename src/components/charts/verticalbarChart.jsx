import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Color from '@/constants/color'
// 自定义构建的echarts
import * as echarts from './echarts'
import EChart from 'techarts'

export default class verticalbarChart extends Component {
    render() {
        const demoData = [
            { value: 42, name: '地基与基础', diff: '+7%' },
            { value: 18, name: '主体结构', diff: '+5%' },
            { value: 26, name: '建筑装饰装修', diff: '-13%' },
            { value: 14, name: '建筑给水排水', diff: '+8%' }
        ]
        // let lengendData = demoData.map(item => item.name)
        let chartOptions = {
            color: Color.verticalbarColor,
            dataset: {
                source: [
                    ["date", "03/15", "03/16", "03/17", "03/18", "03/19", "03/20", "03/21"],
                    ["工作", 320, 332, 301, 334, 390, 320, 332],
                    ["娱乐", 220, 182, 191, 234, 290, 220, 182],
                    ["学习", 120, 122, 191, 234, 290, 220, 182],
                ]
            },
            tooltip: {
                trigger: "axis",
                alwaysShowContent: false,
                // triggerOn: 'mousemove',
                padding: [10, 10, 10, 10],
                position: function (pt) {
                    return [pt[0], 130];
                },
                // formatter: function (params) {
                //     console.log(params);
                //     let res = "2020/" + params[0].name + '<br />'
                //     for (var i = 0; i < params.length; i++) {
                //         res += params[i].marker + params[i].seriesName + ': ' + params[i].data[i + 1] + '<br />'
                //     }
                //     return res;
                // },
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }

            },
            legend: {
                itemWidth: 9,
                itemHeight: '7',
                right: 8
            },
            grid: {
                right: 0,
                top: 30,
                bottom: 20
            },
            xAxis: {
                type: "category",
                axisTick: {
                    show: true
                },
                axisLabel: {
                    fontSize: 8,
                    color: '#7E7E7E'
                }
            },
            yAxis: {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#7E7E7E',
                    fontSize: 8
                }
            },
            series: [{
                type: "bar",
                seriesLayoutBy: "row",
                barWidth: '8'
            }, {
                type: "bar",
                seriesLayoutBy: "row",
                barWidth: '8'
            }, {
                type: 'line',
                seriesLayoutBy: "row",
                smooth: true,
                symbol: 'circle',
                symbolSize: '8'
            }]
        };
        return <View style={{ height: '280px' }}>
            <EChart echarts={echarts} option={chartOptions} />
        </View>
    }
}