import React from "react";
import DayCard from "./dayCard/DayCard";
import styles from './AllDays.module.css';

const AllDays = ({curDate}) => {
    const month = curDate.getMonth();
    const year = curDate.getFullYear();
    // next month's 0th day ie give number of days of current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, daysInMonth).getDay();
    const days = [];

    for (let i = daysInPrevMonth - firstDay + 2; i <= daysInPrevMonth; i++) {
        days.push(i);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    for (let i = 1; i <= 7 - lastDay; i++) {
        days.push(i);
    }

    return (
        <div className={styles.gridContainer}>
            <div className={styles.daysGrid}>
                {days.map((day, index) => (
                    <div key={index}>
                        <DayCard day={day} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllDays;