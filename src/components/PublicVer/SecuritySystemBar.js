// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 引入柱状图
import 'echarts/lib/chart/bar'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

import ReactEchartsCore from 'echarts-for-react/lib/core'

export default function ({ rankBarData, SecuritySystemBarStyle }) {
    const option = {
        grid: {//距离容器的距离
            top:20,
            left: 0,
            right: 0,
            bottom: 0,
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : rankBarData.map(({title})=>title), //数据
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    show: false  //数据不显示坐标轴
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#e8ebee' //坐标轴数据
                    },
                    fontSize: 17,   //坐标轴字体
                    fontFamily: "FzLtHbJt",
                },
            }
        ],
        yAxis : [
            {   
                show:false, //不显示y轴
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '28%',
                data:rankBarData.map(({value})=>value), //数据
                //渐变
                itemStyle: {
                    color: (params) => {
                        var colorList = ['#277ACE', '#F3D924', '#1FB4BF']
                        return colorList[params.dataIndex]
                    },
                },
                //在柱状图上面显示数值
                label: {
                    offset:[1, -2], //偏移
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: { //数值样式
                        color: 'rgba(255,255,255,0.9)',
                        fontFamily: "FzLtHbJt",
                        fontSize: 17    //顶部字体大小   
                    },
                   /*  formatter:'{c}个' //显示单位 */
                }
            }
        ],
        silent:true //不触发交互 */
    }

    return (
        <ReactEchartsCore
            echarts={echarts}
            option={option}
            style={SecuritySystemBarStyle}
        />
    )
}