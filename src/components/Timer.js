import { useState, useEffect } from 'react'

export default function Timer() {

    const [timer, setTimer] = useState(moment().format('YYYY年MoDo HH:mm:ss'))
    
    useEffect(() => {
        setInterval(() => setTimer(moment().format('YYYY年MoDo HH:mm:ss')), 1000)
    }, [])

    return (
        <div style={{ color: "white", fontSize: 14, display: "flex" }}>
            <section style={{ flex: 1, marginRight: "9%" }}></section>
            <section style={{ flex: 1 }}>{timer}</section>
        </div>
    )
}