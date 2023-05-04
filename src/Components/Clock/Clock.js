import './Clock.css';

import { useEffect, useState } from "react";

const Clock = () => {
    
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setDate(new Date()), 1000);

        return function cleanup() {
        clearInterval(timerID);
        };
    });

    const day = date.toLocaleString("en-US", { weekday: "long" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const dayNum = date.toLocaleString("en-US", { day: "numeric" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    const time = date.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

    return (
        <div className='d-flex flex-column align-items-end px-3 ms-4'>
            <small className='text-light m-0 text-center date'>{day}, {month} {dayNum}, {year}</small>
            <small className='text-light m-0 text-center date'>{time}</small>
        </div>
    )
}
export default Clock;