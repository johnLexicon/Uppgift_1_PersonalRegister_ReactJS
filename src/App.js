import React, { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import { Container } from "react-bootstrap";
import EmployeeRegister from "./components/EmployeeRegister";

function App() {
  //useState returns an array [value, function]
  const [employees, addEmployee] = useState([]);

  const addNewEmployee = (name, salary) => {
    const id = "234";
    addEmployee([...employees].concat({ id: id, name: name, salary: salary }));
  };

  return (
    <Container>
      <h3 className="header">The employee Register</h3>
      <EmployeeForm addNewEmployee={addNewEmployee} />
      <EmployeeRegister employees={employees} />
      {/* 
      {employees.map((e) => (
        <div>
          <span>{e.name}</span>
          <span>{e.salary}</span>
        </div>
      ))} */}
    </Container>
  );
}

export default App;
