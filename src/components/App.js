import { useState, useEffect } from 'react'
import { Row, Col } from 'antd'
import axios from 'axios'

export default function () {

    //载入数据
    useEffect(() => {
        axios.get('/api?index=2101&data=%7b%7d')
            .then(res=>{
                console.log(response)
            }) .catch(console.log)
    }, [])

    return (
        <div class="main">1111</div>
    )
}