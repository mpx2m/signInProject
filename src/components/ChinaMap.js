// 引入 ECharts 主模块
import echarts from 'echarts'

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/map/js/china.js'
import ReactEchartsCore from 'echarts-for-react/lib/core'

export default function ChinaMap({ ChinaMapData }) {

    const option = {
     /*    tooltip: {
            trigger: 'item',
            formatter: '{b}'
        }, */
        series: [
            {   /* aspectScale:0.85, */ //中国地图长宽比
                top:'middle', //地图在容器的位置 10%
                zoom: 1.25, //地图大小
                silent: true, //不触发鼠标事件
                name: '中国',
                type: 'map',
                mapType: 'china',
                selectedMode: 'multiple',
                label: {
                    normal: {
                        show: false //隐藏省份名称
                    },
                    emphasis: {
                        show: false,
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#1fc0cd',
                        borderColor: '#0E5482' //省份边框 15a5ba
                    },
                    emphasis: {
                        areaColor: '#FFDC0D'  //高亮颜色 【黄色】
                    }
                },
                data: [
                    {
                        name: "南海诸岛",
                        value: 0,
                        itemStyle: { opacity: 0 },
                        label: { show: false },
                        emphasis: {
                            label: { show: false },
                            itemStyle: { opacity: 0 }
                        }
                    },
                    ...ChinaMapData
                ],

            }
        ]
    }

    return (
        <ReactEchartsCore
            /* className="ChinaMap" */
            echarts={echarts}
            option={option}
            style={{ height: 470, width: "100%"/* , minWidth:535 */ }}
        />
    )
}