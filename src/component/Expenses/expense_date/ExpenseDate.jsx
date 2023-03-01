import './ExpenseDate.css'
import React from "react"
const ExpenseDate = (props = {})=>{
    const month_arr = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const {date,year,month} = props;
    return(
    <div className="expense-date">
       <div className="expense-date__day">
            {year}
        </div>
        <div className="expense-date__year">
            {month_arr[month]}
        </div>
        <div className="expense-date__month ">
            {date}
        </div>
    </div>
    )
}
export default ExpenseDate;