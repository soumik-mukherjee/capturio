import React, { useReducer } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toogleButtonReducer } from "./reducers";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.4rem;
  margin: 0.4rem;
  border: 2px solid palevioletred;
  border-radius: 5px;
  background: ${(props) => props.bg};
  color: ${(props) => props.fg};
  text-decoration: none;
  &:hover {
    background: ${(props) => props.fg};
    border: 2px solid palevioletred;
    color: ${(props) => props.bg};
  }
`;

const DisabledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid gray;
  background: lightgray;
  color: gray;
`;

const Label = styled.span`
  margin: 0 0.4rem 0 0.8rem;
  line-height: 1.2;
  &::before {
    margin: 0 10px;
  }
`;

const InitialState = {
  isSelected: false,
  fg: "palevioletred",
  bg: "white",
};

const ToggleButton = (props) => {
  const [state, dispatch] = useReducer(toogleButtonReducer, InitialState);
  const { onClick, faIcon, label, isDisabled } = props;

  const handleClick = (e) => {
    dispatch({
      type: "TOGGLE_BUTTON_SELECTION",
    });
    let { isSelected } = state;
    let data = { ...e, isSelected };
    onClick(data);
  };

  if (isDisabled) {
    return (
      <DisabledContainer
        fg={state.fg}
        bg={state.bg}
        isSelected={state.isSelected}
      >
        <FontAwesomeIcon icon={faIcon} />
        <Label>{label}</Label>
      </DisabledContainer>
    );
  } else {
    return (
      <Container
        onClick={handleClick}
        fg={state.fg}
        bg={state.bg}
        isSelected={state.isSelected}
      >
        <FontAwesomeIcon icon={faIcon} />
        <Label>{label}</Label>
      </Container>
    );
  }
};

export default ToggleButton;
