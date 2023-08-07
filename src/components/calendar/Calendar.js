import React, { useState } from "react";
import styles from './Calendar.module.css';
import Heading from "./heading/Heading";
import DayLabels from "./dayLabels/DayLabels";
import AllDays from "./allDays/AllDays";
import MonthNav from "./monthNav/MonthNav";

const Calendar = () => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December'];
    const [ curDate, setCurDate ] = useState(new Date());
    const showNextMonth = () => {
        setCurDate(prevDate => {
            const nextMonth = new Date(prevDate);
            nextMonth.setDate(1);
            nextMonth.setMonth(nextMonth.getMonth() + 1);
            return nextMonth;
        });
    }
    const showPrevMonth = () => {
        setCurDate(prevDate => {
            const nextMonth = new Date(prevDate);
            nextMonth.setDate(1);
            nextMonth.setMonth(nextMonth.getMonth() - 1);
            return nextMonth;
        });
    }

    return (
        <div className={styles.calendar}>
            <Heading heading={months[curDate.getMonth()] + " " + curDate.getFullYear()}/>
            <MonthNav showNextMonth={showNextMonth} showPrevMonth={showPrevMonth} />
            <DayLabels />
            <AllDays curDate={curDate}/>
        </div>
    )
}

export default Calendar;