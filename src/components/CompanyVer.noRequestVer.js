import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'

//component
import Timer from './Timer'
import PieChart from './PieChart'
import PieChartV2 from './PieChartV2'
import CarouselTable from './CarouselTable'
import ChinaMap from './ChinaMap'
import RankBarV2 from './RankBarV2'
import SecurityBar from './SecurityBar'

export default function () {

    //当窗口大小变化时候重新渲染图形
    const [render, setRender] = useState({})
    window.onresize = () => setRender({})

    //页面所有状态
    const [state, setState] = useState({
        hrInformation:{}
    })

    //载入数据状态
    useEffect(() => {
        a => a
    }, []) //重新渲染图形

    //多种经营指标
    const [bussinessColumn, setBussinessColumn] = useState([
        { title: '城市', dataIndex: 'city', key: 'city' },
        { title: '目标', dataIndex: 'goal', key: 'goal' },
        { title: '年度累计收入', dataIndex: 'situation', key: 'situation' },
        { title: '完成率', dataIndex: 'achieve', key: 'achieve' }
    ])

    const [bussinessData, setBussinessData] = useState([
        { city: "合计", goal: "733.1万", situation: "751.0万", achieve: "102.4%" },
        { city: "天津", goal: "13.0万", situation: "83.2万", achieve: "639.9%" },
        { city: "福安", goal: "6.0万", situation: "6.3万", achieve: "105.5%" },
        { city: "长沙", goal: "118.0万", situation: "119.6万", achieve: "101.4%" },
        { city: "福州", goal: "381.3万", situation: "357.1万", achieve: "93.7%" },
        { city: "从化", goal: "56.0万", situation: "49.7万", achieve: "88.8%" },
        { city: "闽南", goal: "115.8万", situation: "100.4万", achieve: "86.7%" },
        { city: "徐淮", goal: "17.0万", situation: "14.4万", achieve: "84.8%" },
        { city: "成都", goal: "26.1万", situation: "20.2万", achieve: "77.4%" },
    ])

    //中国地图数据
    const [ChinaMapData, setChinaMapData] = useState([
        { name: '广东', selected: true },
        { name: '四川', selected: true },
        { name: '湖南', selected: true },
        { name: '福建', selected: true },
        { name: '河南', selected: true },
        { name: '江苏', selected: true },
        { name: '天津', selected: true },
    ])

    //各区域公司收缴率排名
    const [rankBarData, setRankBarData] = useState([
        [
            { name: '截止上月度（%）', data: [76.15, 90.52, 95.41, 85.46, 94.79, 86.92, 87.75, 75.00] },
            { name: '年度收缴率（%）', data: [81.41, 97.55, 98.41, 92.13, 99.52, 88.11, 97.03, 86.55] }
        ],
        ['闽南', '福州', '宁德', '天津', '成都', '淮安', '从化', '长沙']
    ])

    //停车场系统
    const [pie1Data, setPie1Data] = useState([
        { value: 79, name: '使用' },
        { value: 21, name: '未使用' },
    ])

    //安防系统
    const [securityData, setSecurityData] = useState([
        ['安防报警', '线上总数', '监控点总数'],
        [80, 260, 287],
    ])

    //IEM系统
    const [pie2Data, setPie2Data] = useState([
        { name: '监控点位', value: 287, },
        { name: '未监控点位', value: 70,  },
    ])

    const [pie3Data, setPie3Data] = useState([
        { name: '报警总数', value: 23, },
        { name: '未报警总数', value: 3,  },
    ])

    const [pie4Data, setPie4Data] = useState([
        { name: '设备完好率', value: 91, },
        { name: '设备完好率2', value: 9,  },
    ])

    //垂直响应调试
    /* console.log(document.body.clientHeight) */

    return (
        <div class="main">
            <Row style={{ paddingTop: 45 }}>
                <Col span={17}></Col>
                <Col span={7}>
                    <Link to={"/extra"}>
                        <Timer />
                    </Link>
                </Col>
            </Row>
            {/* 65默认 */} {/* 917-35 */}
            <Row style={document.body.clientHeight > 917 ?
                { paddingTop: 35 + (document.body.clientHeight - 917) / 2 } :
                { paddingTop: 35 }
            }>
                {/* 第一列开始 */}
                <Col span={7}>
                    {/* 人事指标 */}
                    <div className="container1">
                        <header className="title alignTextCenter">人事指标</header>
                        <Row gutter={5} className="alignTextCenter">
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">在职员工总数</header>
                                        <section className="hrBlockText">1762 人</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">平均年龄</header>
                                        <section className="hrBlockText">38.3 岁</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">平均司龄</header>
                                        <section className="hrBlockText">1.76 年</section>
                                    </section>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 84 }}>
                                    <section>
                                        <header className="blockTitleColor">满岗率</header>
                                        <section className="hrBlockText">89.81%</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ height: 83 }}>
                                    <section>
                                        <header className="blockTitleColor">本科以上学历占比</header>
                                        <section className="hrBlockText">8.24%</section>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* 品质指标 */}
                    <div className="container1" style={{ marginTop: 36 }}>
                        <header className="title alignTextCenter">品质指标</header>
                        <Row gutter={5} className="alignTextCenter">
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">上季度督导完成合格率</header>
                                        <section className="hrBlockText">98%</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">上季度巡检完成率</header>
                                        <section className="hrBlockText">96%</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">业主满意率</header>
                                        <section className="hrBlockText">91.32%</section>
                                    </section>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 172 }}>
                                    <section>
                                        <header className="blockTitleColor">截止上月业主报事</header>
                                        <section className="hrBlockText">38220 条</section>
                                        <header className="blockTitleColor">报事完结率</header>
                                        <section className="hrBlockText">97%</section>
                                        <header className="blockTitleColor">报事回访满意度</header>
                                        <section className="hrBlockText">80%</section>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* 多种经营指标 */}
                    <div className="container1" style={{ marginTop: 36, paddingLeft: "11%", paddingRight: "4%" }}>
                        <header className="title alignTextCenter">多种经营指标</header>
                        <CarouselTable bussinessData={bussinessData} bussinessColumn={bussinessColumn} />
                    </div>
                </Col>
                {/* 第一列结束 */}

                {/* 第二列开始 */}
                <Col span={10}>
                    <div className="container2">
                        <Row>
                            <Col span={18}>
                                <div>
                                    <ChinaMap ChinaMapData={ChinaMapData} />
                                </div>
                            </Col>
                            <Col span={6} className="displayItemCenter alignTextCenter" style={{ height: 470 }}>
                                <div>
                                    <div>
                                        <header>项目数</header>
                                        <section className="projectInfoNumber">77 个</section>
                                    </div>
                                    <div style={{ paddingTop: 10 }}>
                                        <header>分布城市</header>
                                        <section className="projectInfoNumber">18 个</section>
                                    </div>
                                    <div style={{ paddingTop: 10 }}>
                                        <header>服务面积</header>
                                        <section className="projectInfoNumber">1800 万㎡</section>
                                    </div>
                                    <div style={{ paddingTop: 10 }}>
                                        <header>总户数</header>
                                        <section className="projectInfoNumber">5.2 万户</section>
                                    </div>
                                    <div style={{ paddingTop: 10 }}>
                                        <header>总业主数</header>
                                        <section className="projectInfoNumber">21 万人</section>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="container2" style={{ paddingLeft: "3%", paddingRight: "4%" }}>
                        <img src="/assets/img/backGroundDivider.png" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="container2" style={{ paddingLeft: "0%" }}>
                        <header className="title alignTextCenter" style={{ paddingTop: 20, marginBottom: 7 }}>城市公司物业费收缴率</header>
                        <RankBarV2 rankBarData={rankBarData} />
                    </div>
                </Col>
                {/* 第二列结束 */}

                {/* 第三列开始 */}
                <Col span={7}>
                    <div className="container3" >
                        <header className="title alignTextCenter">停车场系统</header>
                        <Row gutter={5}>
                            <Col span={8}>
                                <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">通行次数</header>
                                        <section className="hrBlockText">2957263 次</section>
                                    </section>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div className="blockBackground" style={{ height: 54, display:"flex", alignItems:"center"}}>
                                    <header className="blockTitleColor" style={{marginLeft:"12%"}}>总车位数</header>
                                    <section className="hrBlockText" style={{marginLeft:"24%", marginTop:4}}>8722 个</section>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={5} style={{marginTop:5}}>
                            <Col span={8}>
                                <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">异常次数</header>
                                        <section className="hrBlockText">19287 次</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 54, marginTop: 5 }}>
                                    <section>
                                        <header className="blockTitleColor">车场收费</header>
                                        <section className="hrBlockText">7938172 元</section>
                                    </section>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div className="blockBackground" style={{ height: 113, display: "flex", alignItems: "center" }}>
                                    <header className="blockTitleColor" style={{ marginLeft:"12%" }}>车位使用率</header>
                                    <PieChart pieData={pie1Data} color={["#F3D924", "#277ACE"]} pieChartStyle={{ marginLeft: "9%", height: 120, width: 120 }} highLightItem={0} render={render}/>
                                </div>
                            </Col>
                        </Row>
                        <Row gutter={5} style={{ marginTop: 5 }}>
                            <Col span={8}>
                                <div className="displayItemCenter" style={{ height: 54 }}>
                                    <span className="titleFont">蓝牙开门</span>
                                </div>
                            </Col>
                            <Col span={16}>
                                <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 54 }}>
                                    <section>
                                        <header className="blockTitleColor">人行通行总次数</header>
                                        <section className="hrBlockText">2108212 次</section>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="container3" style={{ marginTop: 27 }}>
                        <header className="title alignTextCenter">安防系统</header>
                        <SecurityBar securityData={securityData}/>
                    </div>
                    <div className="container3" style={{ marginTop: 28 }}>
                        <header className="title alignTextCenter">IEM系统</header>
                        <div className="blockBackground" >
                            <section style={{ display: "flex", justifyContent: "space-around" }}>
                                <PieChartV2 pieData={pie2Data} color={["#F3D924", "#277ACE"]} pieChartStyle={{ height: 120, width: 120 }} highLightItem={0} unit="个" render={render} />
                                <PieChartV2 pieData={pie3Data} color={["#1FB4BF", "#F3D924"]} pieChartStyle={{ height: 120, width: 120 }} highLightItem={0} unit="次" render={render} />
                                <PieChartV2 pieData={pie4Data} color={["#277ACE", "#F3D924"]} pieChartStyle={{ height: 120, width: 120 }} highLightItem={0} unit="%" render={render} />
                            </section>
                            <section style={{ display: "flex", justifyContent: "center" }}>
                                <span style={{paddingBottom:6}}>设备总数 287个</span>
                            </section>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}