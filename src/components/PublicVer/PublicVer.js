import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import axios from 'axios'

//public component
import Timer from '../Timer'
import ChinaMap from '../ChinaMap'
import Spinning from '../Spinning'

//PublicVer component
import SecuritySystemBar from './SecuritySystemBar'
import PieChartV3 from './PieChartV3'

export default function PublicVer() {

    //当窗口大小变化时候重新渲染图形
    const [render, setRender] = useState({})
    window.onresize = () => setRender({})

    //ready
    const [ready, setReady] = useState(false)

    //页面状态
    const [state, setState] = useState({
        qualityInformation: {
            supervisionCompletedRate: 0,
            inspectionCompletedRate: 0,
            satisfactionRate: 0,
            reportLastMonth: 0,
            reportCompletedRate: 0,
            reportSatisfactionRate: 0
        },
        securitySystemBar: [
            { title: "监控点总数", value: 50 },
            { title: "线上总数", value: 50 },
            { title: "安防报警", value: 50 },
        ],
        centerData: {
            projectNumber: 0,
            cityNumber: 0,
            serviceArea: 0,
            totalHouseUnit: 0,
            ownerNumber: 0
        },
        ChinaMapData: [
            { name: '福建', selected: true },
        ],
        parkingSystem: {
            passTimes: 0,
            availableNumber: 0,
            pedestrian: 0,
        },
        IEMSystem: {
            pie1: [{ name: '监控点位', value: 50 }, { name: '未监控点位', value: 50 }],
            pie2: [{ name: '报警总数', value: 50 }, { name: '未报警总数', value: 50 }],
            pie3: [{ name: '设备完好率', value: 50 }, { name: '设备完好率2', value: 50 }],
            devicesNumber: 0
        }
    })

    //载入数据
    useEffect(() => {
        axios.get('http://res.fusliving.com/bigScreen/db2.json')
            .then(response => {
                setState(response.data.app2)
                setReady(true)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    //分解state数据
    const {
        qualityInformation,
        securitySystemBar,
        centerData,
        ChinaMapData,
        parkingSystem,
        IEMSystem
    } = state

    //垂直响应调试
    /* console.log(document.body.clientHeight) */

    return (!ready ?
        <Spinning /> :
        <div class="main">
            <Row style={{ paddingTop: 50 }}>
                <Col span={17}></Col>
                <Col span={7}>
                    <Link to={"/"}>
                        <Timer />
                    </Link>
                </Col>
            </Row>
            {/* 65默认 */} {/* 917-35 */}
            <Row style={document.body.clientHeight > 800 ?
                { paddingTop: (document.body.clientHeight - 800) / 2 } :
                { paddingTop: 20 }
            }>
                {/* 第一列开始 */}
                <Col span={7}>
                    {/* 品质指标 */}
                    <div className="container1">
                        <header className="title alignTextCenter">品质指标</header>
                        <Row gutter={5} className="alignTextCenter">
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 80 }}>
                                    <section>
                                        <header className="blockTitleColor blockTitle_PublicVer">上季度督导完成合格率</header>
                                        <section className="blockContent_PublicVer">{qualityInformation.supervisionCompletedRate}%</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 80 }}>
                                    <section>
                                        <header className="blockTitleColor blockTitle_PublicVer">上季度巡检完成率</header>
                                        <section className="blockContent_PublicVer">{qualityInformation.inspectionCompletedRate}%</section>
                                    </section>
                                </div>
                                <div className="blockBackground displayItemCenter" style={{ height: 80 }}>
                                    <section>
                                        <header className="blockTitleColor blockTitle_PublicVer">业主满意率</header>
                                        <section className="blockContent_PublicVer">{qualityInformation.satisfactionRate}%</section>
                                    </section>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter" style={{ marginBottom: 5, height: 250 }}>
                                    <section>
                                        <header className="blockTitleColor blockTitle_PublicVer">截止上月业主报事</header>
                                        <section className="blockContent_PublicVer" style={{position:"relative", top:-2}}>{qualityInformation.reportLastMonth} 条</section>
                                        <header className="blockTitleColor blockTitle_PublicVer">报事完结率</header>
                                        <section className="blockContent_PublicVer">{qualityInformation.reportCompletedRate}%</section>
                                        <header className="blockTitleColor blockTitle_PublicVer">报事回访满意度</header>
                                        <section className="blockContent_PublicVer">{qualityInformation.reportSatisfactionRate}%</section>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    {/* 多种经营指标 */}
                    <div className="container1" style={{ marginTop: 50, paddingLeft: "11%", paddingRight: "4%" }}>
                        <header className="title alignTextCenter">安防系统</header>
                        <SecuritySystemBar rankBarData={securitySystemBar} SecuritySystemBarStyle={{ height: 218, width: "100%" }} />
                    </div>
                </Col>
                {/* 第一列结束 */}

                {/* 第二列开始 */}
                <Col span={10}>
                    <div className="container2" style={{paddingLeft:"4%"}}>
                        <ChinaMap ChinaMapData={ChinaMapData} />
                    </div>
                    <div className="container2" style={{ marginTop: 45, paddingLeft:"4%", paddingRight:"6%"}}>
                        <Row className="alignTextCenter">
                            <Col span={8}>
                                <div>
                                    <header className="blockTitle_PublicVer">项目数</header>
                                    <section className="projectInfoNumber">{centerData.projectNumber} 个</section>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <header className="blockTitle_PublicVer">分布城市</header>
                                    <section className="projectInfoNumber">{centerData.cityNumber} 个</section>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <header className="blockTitle_PublicVer">服务面积</header>
                                    <section className="projectInfoNumber">{centerData.serviceArea} 万㎡</section>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <header className="blockTitle_PublicVer" style={{marginTop:5}}>总户数</header>
                                    <section className="projectInfoNumber">{centerData.totalHouseUnit} 万户</section>
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <header className="blockTitle_PublicVer" style={{marginTop:5}}>总业主数</header>
                                    <section className="projectInfoNumber">{centerData.ownerNumber} 万人</section>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                {/* 第二列结束 */}

                {/* 第三列开始 */}
                <Col span={7}>
                    <div className="container3" >
                        <header className="title alignTextCenter">人行车行数据</header>
                        <Row gutter={5}>
                            <Col span={12}>
                                <Row gutter={5}>
                                    <Col>
                                        <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 100 }}>
                                            <section>
                                                <header className="blockTitleColor blockTitle_PublicVer">车行次数</header>
                                                <section className="hrBlockText blockContent_PublicVer">{parkingSystem.passTimes} 次</section>
                                            </section>
                                        </div>
                                    </Col>
                                    <Col style={{ marginTop: 5 }}>
                                        <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 100 }}>
                                            <section>
                                                <header className="blockTitleColor blockTitle_PublicVer">总车位数</header>
                                                <section className="hrBlockText blockContent_PublicVer">{parkingSystem.availableNumber} 个</section>
                                            </section>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <div className="blockBackground displayItemCenter alignTextCenter" style={{ height: 205 }}>
                                    <section>
                                        <header className="blockTitleColor blockTitle_PublicVer" style={{position:"relative", top:-12}}>人行次数</header>
                                        <section className="hrBlockText blockContent_PublicVer" style={{position:"relative", top:-9}}>{parkingSystem.pedestrian} 次</section>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="container3" style={{ marginTop: 60 }}>
                        <header className="title alignTextCenter">IEM系统</header>
                        <Row>
                            <Col>
                                <div className="blockBackground alignTextCenter" style={{ height: 54, fontSize:20, lineHeight:"60px" }}>
                                    设备总数 {IEMSystem.devicesNumber}个
                                </div>
                            </Col>
                            <Col style={{ marginTop: 5 }}>
                                <Row gutter={5}>
                                    <Col span={8}>
                                        <div className="blockBackground displayItemCenter" style={{ height: 174 }}>
                                            <section>
                                                <PieChartV3 pieData={IEMSystem.pie1} color={["#F3D924", "#277ACE"]} pieChartStyle={{ height: 120, width: 120 }} highLightItem={0} unit="个" render={render} />
                                                <header className="alignTextCenter blockTitle_PublicVer">{IEMSystem.pie1[0].name}</header>
                                            </section>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="blockBackground displayItemCenter" style={{ height: 174 }}>
                                            <section>
                                                <PieChartV3 pieData={IEMSystem.pie2} color={["#1FB4BF", "#F3D924"]} pieChartStyle={{ height: 120, width: 120 }} highLightItem={0} unit="次" render={render} />
                                                <header className="alignTextCenter blockTitle_PublicVer">{IEMSystem.pie2[0].name}</header>
                                            </section>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div className="blockBackground displayItemCenter" style={{ height: 174 }}>
                                            <section>
                                                <PieChartV3 pieData={IEMSystem.pie3} color={["#277ACE", "#F3D924"]} pieChartStyle={{ height: 120, width: 120 }} highLightItem={0} unit="%" render={render} />
                                                <header className="alignTextCenter blockTitle_PublicVer">{IEMSystem.pie3[0].name}</header>
                                            </section>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Col>
                {/* 第三列结束 */}
            </Row>
        </div>
    )
}