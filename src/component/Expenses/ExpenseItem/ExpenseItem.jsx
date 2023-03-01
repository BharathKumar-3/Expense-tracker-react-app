import React from  "react"
import './ExpenseItem.css'
import ExpenseDate from "../expense_date/ExpenseDate"
const ExpenseItem = (props)=>
{   
    const title = props.title;
    const amount = props.amount;
    const date = props.Date;
    let dat,year,month;
    let parts = date.split('-');
    year = parts[0];
    month = parts[1]-1;
    dat = parts[2];
    return(
        <div className="expense-item">
            <ExpenseDate
                date = {dat}
                year = {year}
                month = {month}
            />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${amount}
                </div>
            </div>
        </div>
    ) 
}

export default ExpenseItem;