import React from "react";
import styles from './Heading.module.css';

const Heading = ({heading}) => {
    return (
        <div className={styles.heading}>
            {heading}
        </div>
    )
}

export default Heading;