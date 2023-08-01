import React, { useState } from "react";
import styles from './Calendar.module.css';
import Heading from "./heading/Heading";
import DayLabels from "./dayLabels/DayLabels";
import AllDays from "./allDays/AllDays";

const Calendar = () => {
    const [ curMonth, setCurMonth ] = useState("January");

    return (
        <div className={styles.calendar}>
            <Heading heading={curMonth}/>
            <DayLabels />
            <AllDays />
        </div>
    )
}

export default Calendar;