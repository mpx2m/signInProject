import { Spin } from 'antd'

const Spinning = () =>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "768px" }}>
        <Spin size="large" tip="数据加载中..."/>
    </div>

export default Spinning