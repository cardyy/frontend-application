import React, { useState, useEffect, useMemo } from "react";
import Container from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import LoginPopup from "./LoginPopup";
import useStyles from "../customHooks/useStyles.hook";
import texts from "../store/localData";

const LandingPage = () => {
  const { classes } = useStyles();
  const [textIndex, setTextIndex] = useState(0);
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const currentText = useMemo(() => texts[textIndex], [textIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((x) => (x + 1) % texts.length);
      setIsAnimationPlayed(false);
    }, 8000);
    return () => clearInterval(interval);
  }, [textIndex]);

  return (
    <Container className={["root"]}>
      <div className="overlay"></div>

      {isPopupOpen ? (
        <LoginPopup
          isPopupOpen
          setIsPopupOpen={() => {
            setIsPopupOpen((x) => !x);
          }}
        />
      ) : (
        <>
          <div className="text-wrapper">
            <div className="text">
              <ul>
                {currentText.map((item, index) => (
                  <li
                    key={index}
                    className={`${isAnimationPlayed ? "" : "animate"}`}
                    onAnimationEnd={() => setIsAnimationPlayed(true)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
            <Button
              variant="contained"
              color="primary"
              className={[classes.button, "button"]}
              onClick={() => setIsPopupOpen(true)}
            >
              Get Started
            </Button>
        </>
      )}
    </Container>
  );
};

export default LandingPage;
