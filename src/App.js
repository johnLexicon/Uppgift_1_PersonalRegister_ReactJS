import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import { Container } from "react-bootstrap";
import EmployeeRegister from "./components/EmployeeRegister";

function App() {
  //useState returns an array [value, function]
  const [employees, addEmployee] = useState([]);

  const addNewEmployee = (name, salary) => {
    //If name is null, undefined, "" or "   "
    if (!(Boolean(name) && name.trim().length > 0)) {
      name = "Unknown";
    }

    const id = uuidv4();
    addEmployee([...employees].concat({ id: id, name: name, salary: salary }));
  };

  return (
    <Container>
      <h3 className="header">The employee Register</h3>
      <EmployeeForm addNewEmployee={addNewEmployee} />
      <EmployeeRegister employees={employees} />
    </Container>
  );
}

export default App;
