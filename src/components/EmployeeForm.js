import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";

function EmployeeForm(props) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");

  return (
    <Form className="employeeForm">
      <Form.Row>
        <Col>
          <Form.Group controlId="formEmployeeName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter employee name"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmployeeSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter employee salary"
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Button
            style={{ float: "right" }}
            variant="primary"
            onClick={() => {
              props.addNewEmployee(name, salary);
              setName("");
              setSalary("");
            }}
          >
            Add Employee
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default EmployeeForm;
