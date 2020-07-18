import React from "react";
import { Table } from "react-bootstrap";

const EmployeeRegister = (props) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Name</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((e, index) => (
          <tr key={index}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.salary}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default EmployeeRegister;
