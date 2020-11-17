import React, { useState } from "react";

// data:
import messages from "../../data/messages.json";

// components:
import Countdown from "react-countdown";
import { getRandomArrayItem } from "../../utils/utils";
import { BsTrash } from "react-icons/bs";

// -- Bootstrap components:
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// context:
import { useStreaks } from "../../context/StreaksProvider";
import { useNotification } from "../../context/NotificationProvider";

// style:
import "./Streak.scss";

export const Streak = ({
  id,
  title,
  motivation,
  intervalNum,
  intervalUnit,
}) => {
  const { deleteStreak } = useStreaks();
  const { printNotification } = useNotification();

  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const getIntervalInMilliseconds = (intervalNum, intervalUnit) => {
    let intervalInMilliseconds;
    switch (intervalUnit) {
      case "seconds":
        intervalInMilliseconds = intervalNum * 1000;
        break;
      case "minutes":
        intervalInMilliseconds = intervalNum * 60000;
        break;
      case "hours":
        intervalInMilliseconds = intervalNum * 3.6e6;
        break;
      case "days":
        intervalInMilliseconds = intervalNum * 8.64e7;
        break;
      default:
        intervalInMilliseconds = intervalNum * 8.64e7;
    }
    return intervalInMilliseconds;
  };

  const handleIncrement = (e) => {
    console.log(e.currentTarget);
    setIsActive(true);
    setCount(count + 1);

    const getRandomSuccessMessage = getRandomArrayItem(messages.increment);
    printNotification(getRandomSuccessMessage);
  };

  const handleLoss = () => {
    setIsActive(false);
    setCount(0);

    const getRandomLossMessage = getRandomArrayItem(messages.loss);
    printNotification(getRandomLossMessage);
  };

  const handleDeleteStreak = () => {
    deleteStreak(id);
  };

  return (
    <>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Header className={"streak__header"}>
          <BsTrash className={"streak__icon"} onClick={handleDeleteStreak} />
        </Card.Header>

        <Card.Body className={"streak__content"}>
          <Card.Title className={"streak__title"}>{title}</Card.Title>
          <Card.Text className={"streak__interval"}>
            Maintained every {intervalNum} {intervalUnit}
          </Card.Text>

          <Card.Subtitle className={"streak__motivation"}>
            {motivation}
          </Card.Subtitle>

          {isActive ? (
            <div className="streak__countdown">
              <Countdown
                date={
                  Date.now() +
                  getIntervalInMilliseconds(intervalNum, intervalUnit)
                }
                onComplete={handleLoss}
              />
            </div>
          ) : null}

          <Card.Text className="streak__counter">{count}</Card.Text>
        </Card.Body>

        <Card.Footer className="streak__cta">
          <Button
            onClick={(e) => handleIncrement(e)}
            className="streak__button"
            variant="primary"
          >
            Increment
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};
