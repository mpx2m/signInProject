// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import ReactEchartsCore from 'echarts-for-react/lib/core'

export default function ({ rankBarData }) {
    const option = {
        color: ['#277ACE', '#FFDC0D', '#197C7F', '#5C176E', '#ED7C30', '#80FF80', '#FF8096', '#800080'], //颜色
        legend: {
            //关闭交互
            selectedMode: false,
            //图例样式
            icon: 'rect',
            itemWidth: 10,
            itemHeight: 10,
            //图例位置
            top: 0,
            right: 0,
            /*   orient:'vertical', */
            textStyle: {
                fontSize: 14,
                color: "#e8ebee",
                fontFamily: "FzLtHbJt",
            },
        },
        grid: {
            top: '25%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [
            {
                boundaryGap: true,
                type: 'category',
                data: rankBarData[1],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#e8ebee' //坐标轴数据
                    },
                    fontSize: 14,
                    fontFamily: "FzLtHbJt",
                },
                axisTick: {
                    show: false//刻度
                }
            },
        ],
        yAxis: [
            {
                show: false, //不显示y轴
                /* type : 'value' */
            }
        ],
        series: rankBarData[0].map(({ name, data }) => ({
            silent: true,
            label: {    //bar上显示数据
                offset: [1, 0], //偏移
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: 12,
                    fontFamily: "FzLtHbJt"
                },
            },
            name,
            data: data.map(item => Math.floor(item)), //四舍五入为整数
            type: 'bar',
            barWidth: 17,
            barGap: '10%',
        }))
    }

    return (
        <ReactEchartsCore
            echarts={echarts}
            option={option}
            style={{ height: 200, width: "100%" }}
        />
    )
}