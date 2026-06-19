import React, { useState } from "react";
import { ButtonGroup, Button, styled } from "@mui/material";

// WRAPPER
const Component = styled(ButtonGroup)`
  margin-top: 20px;
  border-radius: 50px;
  overflow: hidden;
`;

// ROUND BUTTONS 
const StyledButton = styled(Button)`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  min-width: 40px;
  font-size: 20px;
  background: #000000;             /* Black button */
  color: #FFD700;                  /* Yellow text */
  border: 2px solid #FFD700;       /* Yellow border */

  &:hover {
    background: #1a1a1a;
  }
`;

// COUNTER DISPLAY 
const CounterBox = styled(Button)`
  width: 45px;
  height: 40px;
  background: #fff;
  color: #000;
  font-weight: 700;
  border: 2px solid #FFD700 !important;
  border-radius: 10px;
  pointer-events: none;
`;

const GroupedButton = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <Component>
      <StyledButton onClick={handleDecrement} disabled={counter === 0}>
        -
      </StyledButton>

      <CounterBox disabled>{counter}</CounterBox>

      <StyledButton onClick={handleIncrement}>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
