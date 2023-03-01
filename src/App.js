import './App.css';
import Formentry from './component/NewExpenses/newexpense.jsx'
import Expenses from './component/Expenses/Expenses';
import { useEffect, useState } from 'react';
function App() {

  let x = 0;
  const [expesnses,updateData] = useState([])
  const onAddexpenses = (value)=>{
    updateData([value,...expesnses]);
    fetch('https://expansetracker.onrender.com/expense',{
      method:'POST',
      mode:'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(value)
    }).then(console.log("success"))
  }
  useEffect(()=>{
    fetch('http://localhost:8080/api/v1/expense',{method:'GET',mode:'cors'})
    .then(Response => Response.json())
    .then(json=>{updateData(json)});
    },[x])
  return (
    <div className="App">
      <Formentry
      onAddexpenses = {onAddexpenses}/>
      <Expenses
      data = {expesnses}/>
    </div>
  );
}

export default App;
