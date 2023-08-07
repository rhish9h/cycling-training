import React from "react";
import styles from './DayCard.module.css';

const DayCard = ({day}) => {
    return (
        <div className={styles.card}>
            {day}
        </div>
    )
}

export default DayCard;