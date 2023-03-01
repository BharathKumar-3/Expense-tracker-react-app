import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './Expenses.css'

const Expenses = (props)=>{
    const expenses = props.data;
    return (
      <div className="expenses">
      {expenses.map((x)=>
            <ExpenseItem 
            key={x._id}
            amount = {x.amount}
            Date = {x.Date}
            title = {x.title}
            />
      )
      } 
      </div>  
    )
}

export default Expenses;
