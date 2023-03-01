import React from "react";
import NewExpense from "./expense_form/expense_form";
import './newexpense.css';
const Formentry=(props)=>{
    const onSave =(value)=>{
        props.onAddexpenses(value);
    }
    return (
      <div className="new-expense">
          <NewExpense
            onSave = {onSave}/>
      </div>
    )
}

export default Formentry;