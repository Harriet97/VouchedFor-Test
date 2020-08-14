import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const YourIncome = (props) => {
  return (
    <Card className="card" border="info" style={{ textAlign: "left" }}>
      <Card.Header style={{ textAlign: "center" }}>
        YOUR INCOME AND SPENDING
      </Card.Header>
      <Card.Body>
        <Form>
          <h3>Annual income</h3>
          {props.incomes.map((income) => (
            <Form.Row>
              <Col sm={3}>
                <Form.Group inline>
                  <Form.Label>{income.name}</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.amount}
                    name="amount"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group inline>
                  <Form.Label>From age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.from_age}
                    name="from_age"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group inline>
                  <Form.Label>To age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.to_age}
                    name="to_age"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          ))}

          <h3>Monthly spending</h3>
          {props.expenditures.map((income) => (
            <Form.Row>
              <Col sm={3}>
                <Form.Group inline>
                  <Form.Label>{income.name}</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.amount}
                    name="amount"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group inline>
                  <Form.Label>From age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.from_age}
                    name="from_age"
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col sm={3}>
                <Form.Group inline>
                  <Form.Label>To age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.to_age}
                    name="to_age"
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          ))}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default YourIncome;
