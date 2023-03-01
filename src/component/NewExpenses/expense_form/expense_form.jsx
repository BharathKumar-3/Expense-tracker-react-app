import React, { useState } from "react";
import './expense_form.css'
const NewExpense = (props)=>{

    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setAmountChange] = useState(0);
    const [enteredDate , setDateChange] = useState('');
    const onTitleChange  = (event)=> setEnteredTitle(event.target.value);
    const onAmountChange = (event)=> setAmountChange(event.target.value);
    const onDateChange   = (event)=> setDateChange(event.target.value);


    const onExpenseSubmit = (event) =>{
        event.preventDefault();
        console.log('call from Form',enteredTitle," ",enteredAmount," ",enteredDate," ",typeof enteredDate);
        const NewExpenseDetails = {
            title: enteredTitle,
            amount : enteredAmount,
            Date : enteredDate
        }
        props.onSave(NewExpenseDetails);
    }
    return(
    <div>
        <form onSubmit={onExpenseSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label htmlFor="title">Title</label>
                  <input type="text" name="title" id="title" value={enteredTitle} onChange={onTitleChange}/>
                </div>

                <div className="new-expense__control">
                  <label htmlFor="amount">Amount</label>
                  <input type="number" name="amount" id="amount" min="0"
                    value={enteredAmount} onChange={onAmountChange}/>
                </div>

                <div className="new-expense__control">
                  <label htmlFor="date">Date</label>
                  <input type="date" name="date" id="date"
                   value={enteredDate} onChange={onDateChange}/>
                </div>
            </div>
            <div>
              <button>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
          </form>
    </div>
    )
}

export default NewExpense