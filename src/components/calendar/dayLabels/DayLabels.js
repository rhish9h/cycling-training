import React from "react";
import styles from './DayLabels.module.css';

const DayLabels = () => {
    const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    return (
        <div>
            <div className={styles.dayLabels}>
                {days.map((day, index) => (
                <div
                    key={index}
                    className={styles.dayLabel}
                >
                    {day}
                </div>
                ))}
            </div>
        </div>
    )
}

export default DayLabels;