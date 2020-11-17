import React, { useState } from "react";
import { useStreaks } from "../../context/StreaksProvider";

// -- Bootstrap components:
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// style:
import "./CreateStreak.scss";

export const CreateStreak = () => {
  const [title, setTitle] = useState("");
  const [motivation, setMotivation] = useState("");
  const [intervalNum, setIntervalNum] = useState(1);
  const [intervalUnit, setIntervalUnit] = useState("days");

  const { addStreak } = useStreaks();
  const handleSubmit = (e) => {
    let newStreak = { title, motivation, intervalNum, intervalUnit };
    e.preventDefault();
    addStreak(newStreak);
  };

  return (
    <>
      <Form className="CreateStreak" onSubmit={handleSubmit}>
        <h1 className="CreateStreak__title">Create New Streak</h1>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            placeholder="I have stopped smoking!"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="motivation">
          <Form.Label>Motivation</Form.Label>
          <Form.Control
            value={motivation}
            as="textarea"
            placeholder="So I can play football at the park with my kids"
            onChange={(e) => setMotivation(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Why maintaining this Streak is important to you?
          </Form.Text>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="intervalNum">
            <Form.Label>Time interval</Form.Label>
            <Form.Control
              value={intervalNum}
              type="number"
              placeholder="1"
              onChange={(e) => setIntervalNum(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              Should be updated every...
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="intervalUnit">
            <Form.Label>Time unit</Form.Label>
            <Form.Control
              value={intervalUnit}
              as="select"
              onChange={setIntervalUnit}
              required
            >
              <option value="seconds">Seconds</option>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              <option value="days">Days</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" block>
          Submit
        </Button>
      </Form>
    </>
  );
};
