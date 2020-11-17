import React, { useState } from "react";

// data:
import messages from "../../data/messages.json";

// components:
import Countdown from "react-countdown";
import { getRandomArrayItem } from "../../utils/utils";
import { BsTrash } from "react-icons/bs";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// context:
import { useStreaks } from "../../context/StreaksProvider";
import { useNotification } from "../../context/NotificationProvider";

// style:
import "./Streak.scss";

export const Streak = ({ id, title, motivation }) => {
  const { deleteStreak } = useStreaks();
  const { printNotification } = useNotification();

  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);

  const handleIncrement = () => {
    setStatus(true);
    setCount(count + 1);

    const getRandomSuccessMessage = getRandomArrayItem(messages.increment);
    printNotification(getRandomSuccessMessage);
  };

  const handleLoss = () => {
    setStatus(false);
    setCount(0);

    const getRandomLossMessage = getRandomArrayItem(messages.loss);
    printNotification(getRandomLossMessage);
  };

  const handleDeleteStreak = (e) => {
    e.preventDefault();
    deleteStreak(id);
  };

  return (
    <>
      <Card key={id} className={`streak`} style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Header>
          <BsTrash className={"streak__icon"} onClick={handleDeleteStreak} />
        </Card.Header>
        <Card.Body className={"streak__content"}>
          <Card.Title className={"streak__title"}>{title}</Card.Title>

          <Card.Subtitle className={"streak__motivation"}>
            {motivation}
          </Card.Subtitle>

          <div className="streak__countdown">
            {status === true ? (
              <Countdown date={Date.now() + 2000} onComplete={handleLoss} />
            ) : null}
          </div>

          <Card.Text className="streak__counter">{count}</Card.Text>
          <Button
            onClick={handleIncrement}
            className="streak-btn"
            variant="primary"
          >
            Increment
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
