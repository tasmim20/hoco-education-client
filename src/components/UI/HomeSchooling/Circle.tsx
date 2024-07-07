import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation: ${rotate} 20s linear infinite;
`;

const CircleText = styled.div`
  position: absolute;
  width: 200%;
  text-align: center;
  transform-origin: center center;
  animation: ${rotate} 20s linear infinite reverse;
  color: #ffc53a;
  font-weight: 600;
`;

const Circle = () => {
  return (
    <CircleWrapper>
      <CircleText>
        <span>the best online learning platform </span>
        <span>the best online learning platform </span>
        <span>the best online learning platform </span>
      </CircleText>
    </CircleWrapper>
  );
};

export default Circle;
