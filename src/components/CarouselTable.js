import { Carousel, Table } from 'antd'
//lib
import Array2Table from '../lib/Array2Table'

export default function CarouselTable({ bussinessData, bussinessColumn }) {
    return (
        <Carousel autoplay={true} autoplaySpeed={7000} dots={false}>
            {Array2Table(bussinessData).map((dataSource, i) =>
                <Table
                    id="carouselTable"
                    key={i}
                    rowClassName="businessTable"
                    bordered={false}
                    columns={bussinessColumn}
                    dataSource={dataSource}
                    size="small"
                    pagination={false} />)
            }
        </Carousel>
    )
}