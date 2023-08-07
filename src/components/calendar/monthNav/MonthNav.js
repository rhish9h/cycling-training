import React from "react";

const MonthNav = ({showPrevMonth, showNextMonth}) => {
    return (
        <div>
            <div onClick={showPrevMonth}>
                prev month
            </div>
            <div onClick={showNextMonth}>
                next month
            </div>
        </div>
    )
}

export default MonthNav;