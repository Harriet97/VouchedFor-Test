import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const YourIncome = (props) => {
  return (
    <Card className="card " border="info" style={{ textAlign: "left" }}>
      <h4 className="cardHeader">YOUR INCOME AND SPEND</h4>
      <Card.Body>
        <Form>
          <h6 style={{ color: "#0a787c", fontWeight: "700" }}>
            Annual income:
          </h6>
          {props.incomes.map((income) => (
            <Form.Row>
              <Col>
                <Form.Group inline>
                  <Form.Label>{income.name}:</Form.Label>
                  <Form.Control
                    type="text"
                    value={`£${income.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                    name="amount"
                    id={income.name}
                    onChange={props.incomeChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group inline>
                  <Form.Label>From age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.from_age}
                    id={income.name}
                    name="from_age"
                    onChange={props.incomeChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group inline>
                  <Form.Label>To age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={income.to_age}
                    id={income.name}
                    name="to_age"
                    onChange={props.incomeChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
          ))}

          <h6 style={{ color: "#0a787c", fontWeight: "700" }}>
            Monthly spending:
          </h6>
          {props.expenditures.map((expenditure) => (
            <Form.Row>
              <Col>
                <Form.Group inline>
                  <Form.Label>{expenditure.name}:</Form.Label>
                  <Form.Control
                    type="text"
                    value={`£${expenditure.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                    name="amount"
                    id={expenditure.name}
                    onChange={props.expenditureChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group inline>
                  <Form.Label>From age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={expenditure.from_age}
                    name="from_age"
                    id={expenditure.name}
                    onChange={props.expenditureChange}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group inline>
                  <Form.Label>To age:</Form.Label>
                  <Form.Control
                    type="text"
                    value={expenditure.to_age}
                    id={expenditure.name}
                    name="to_age"
                    onChange={props.expenditureChange}
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
