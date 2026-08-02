import React from 'react'

function EmployeeAward({name, years}) {
 const isEligible = years >= 5

 return (
  <div>
    <h3>{name}</h3>
    <p>Years of service: {years}</p>
    <p>
      Status: {isEligible ? 'Eligible for long service award!' : 'Not eligible.'}
    </p>
  </div>
 )
}

function App() {
  return (
    <div>
      <h1><strong>Employee Long Service Award</strong></h1>
      <EmployeeAward name = {"Alice Tan"} years = {2}/>
      <EmployeeAward name = {"Ben Wong"} years = {6}/>
      <EmployeeAward name = {"Chloe Lim"} years = {10}/>
      <EmployeeAward name = {"Daniel Lee"} years = {4}/>
    </div>
  )
}

export default App