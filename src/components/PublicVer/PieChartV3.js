import { useState, useEffect, useRef } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/pie'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import ReactEchartsCore from 'echarts-for-react/lib/core'

export default function PieChart({ pieData, color, pieChartStyle, highLightItem, unit, render }) {

    const option = {
        animationDuration: 300, //初始动画的时长
        color: color,
        series: [
            {   clockwise:false, //是否顺时针排布
                silent: true, //关闭交互
                animationType: 'scale',
                type: 'pie',
                radius: ['58%', '72%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: "white",
                            fontSize: '16',
                            lineHeight:16,
                            fontFamily:"FzLtHbJt",
                            padding:[9, 0, 0, 0]
                        },
                        formatter: ({ name, value }) => `${value} ${unit}`,
                    },
                },
                data: pieData,
                hoverOffset: 4,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.28)'
                    }
                }
            }
        ]
    }

    //登记Instance
    const myChart = useRef(null)

    useEffect(() => {

        //触发第一次highlight
        setTimeout(() => {
            myChart.current.getEchartsInstance().dispatchAction({
                type: 'highlight',
                dataIndex: highLightItem
            })
        }, 400)

        return () => {
            myChart.current.getEchartsInstance().resize()
        }

    }, [render]) //重新渲染图形

    return (
        <ReactEchartsCore
            ref={myChart}
            echarts={echarts}
            option={option}
            style={pieChartStyle}
        />
    )
}