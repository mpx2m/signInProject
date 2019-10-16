import { useState, useEffect, useRef } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import ReactEchartsCore from 'echarts-for-react/lib/core'

export default function ({ securityData }) {

    const option = {
        grid: {
            top: '0%',
            left: '0%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.87)' //坐标轴数据
                },
                fontSize: 14,
                fontFamily: "FzLtHbJt",
            },
            axisTick: {
                show: false//刻度
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.87)' //坐标轴颜色 'rgba(180, 186, 200,0.8)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.4)', //刻度线颜色
                    type: "dashed"
                }
            }
        },
        yAxis: {
            z:100,
            type: 'category',
            data: securityData[0],
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.87)' //坐标轴数据
                },
                fontSize: 14,
                fontFamily: "FzLtHbJt",
            },
            axisTick: {
                show: false//刻度
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.87)' //坐标轴颜色
                }
            },
        },
        barWidth: 14, //数据条宽度
        series: [
            {
                silent: true, //不触发鼠标事件
                type: 'bar',
                itemStyle: {
                    color: (params) => {
                        var colorList = ['#277ACE', '#F3D924', '#1FB4BF']
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius:[0,14,14,0]
                },
                data: securityData[1]
            }
        ]
    }

    return (
        <ReactEchartsCore
            echarts={echarts}
            option={option}
            style={{ height: 130, width: "100%" }}
        />
    )
}