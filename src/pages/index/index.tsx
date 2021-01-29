import React, { Component } from 'react'
import { View } from '@tarojs/components'
import PieChart from '@/components/charts/pieChart'
import VerticalbarChart from '@/components/charts/verticalbarChart'

import './index.less'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='page-box' >
        <View className='card-box1'>
          <View className='title'>手机使用时长</View>
          <VerticalbarChart />
        </View>

        <View className='card-box2'>
          <View className='title'>手机软件类型占比</View>
          <PieChart />
        </View>

        <View className='default'>数据和可视化效果只做展示,并无真实意义</View>
      </View>
    )
  }
}
