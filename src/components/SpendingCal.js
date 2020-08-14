import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const SpendingCal = (props) => {
  return (
    <Card border="info" style={{ textAlign: "left" }} className="card">
      <Card.Header style={{ textAlign: "center" }}>SPEND LESS</Card.Header>
      <Card.Body>
        <p>
          Try reducing your monthly spending to see how your forecast could
          improve
        </p>

        {props.expenditures.map((expenditure) => (
          <Form.Row>
            <Col sm={3}>
              <Form.Group>
                <Form.Label>{expenditure.name}</Form.Label>
                <Form.Control
                  type="range"
                  className="range"
                  name="amount"
                  value={expenditure.amount}
                  min="0"
                  max="2000"
                  step="1"
                  onChange={props.expenditureChange}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
        ))}

        <Form.Group>
          <strong>
            This means you're saving{" "}
            <span className="text-secondary">£{props.savings} </span>per month
          </strong>
        </Form.Group>
      </Card.Body>
      <Card.Footer>Was this helpful?</Card.Footer>
    </Card>
  );
};

export default SpendingCal;
