import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Color from '@/constants/color'
// 自定义构建的echarts
import * as echarts from './echarts'
import EChart from 'techarts'

export default class pieChart extends Component {
    render() {
        const demoData = [
            { value: 42, name: '效率办公', diff: '+7%' },
            { value: 18, name: '通讯聊天', diff: '+5%' },
            { value: 26, name: '视频音乐', diff: '-13%' },
            { value: 14, name: '娱乐消遣', diff: '+8%' }
        ]
        let lengendData = demoData.map(item => item.name)
        let chartOptions = {
            title: {
                show: true,
                text: '30个',
                subtext: '总软件个数',
                top: '45%',
                left: '21%',
                textAlign: 'center',
                textVerticalAlign: 'center',
                textStyle: {
                    fontSize: '18',
                    fontWeight: '400',
                    color: '#000',
                    lineHeight: '10'
                },
                subtextStyle: {
                    fontSize: '8',
                    fontWeight: '400',
                    color: '#000'

                }
            },
            tooltip: {
                show: false
            },
            color: Color.pieColor,
            legend: {
                orient: 'vertical',
                selectedMode: false,
                right: 20,
                top: 40,
                itemGap: 10,
                itemHeight: '7',
                data: lengendData,
                icon: 'circle',//diamond 
                formatter: (name) => {
                    let data = demoData;
                    let tname, trick, target, diff;
                    for (let i = 0, l = data.length; i < l; i++) {
                        if (data[i].name == name) {
                            tname = data[i].name;
                            trick = name.length < 6 ? '一'.repeat(6 - name.length) : '';
                            target = data[i].value;
                            diff = data[i].diff;
                        }
                    }
                    return `{a|${tname}}{trick|${trick}}   {b|${target}}    {c|${diff}}`
                },
                textStyle: {
                    rich: {
                        a: {
                            fontSize: '12',
                            fontWeight: 400,
                            color: '#7E7E7E',
                            opacity: '0.6',
                            align: 'left',
                        },
                        trick: { //占位对齐
                            fontSize: '12',
                            fontWeight: 400,
                            color: '#fff',
                            align: 'left',
                        },
                        b: {
                            fontSize: '12',
                            fontWeight: 400,
                            color: '#7E7E7E',
                            opacity: '0.6',
                            align: 'center',

                        },
                        c: {
                            fontSize: '12',
                            fontWeight: 400,
                            color: '#000',
                            align: 'right',
                        }
                    }
                }
            },
            series: [
                {
                    type: 'pie',
                    radius: ['50%', '70%'],
                    center: ['22%', '50%'],
                    labelLine: {
                        show: false
                    },
                    label: {
                        show: true,
                        position: 'inner',
                        formatter: '{d}%',
                        fontSize: '10',
                        fontWeight: '500',
                        color: '#fff'
                    },
                    data: demoData
                }
            ]
        };
        return <View style={{ height: "180px" }}>
            <EChart echarts={echarts} option={chartOptions} />
        </View >
    }
}