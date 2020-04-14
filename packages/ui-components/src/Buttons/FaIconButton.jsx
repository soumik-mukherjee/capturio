import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.4rem;
  margin: 0.4rem;
  border-radius: 5px;
  text-decoration: none;
  border: 2px solid palevioletred;
  background: white;
  color: palevioletred;
  &:hover {
      background: palevioletred;
      border: 2px solid palevioletred;
      color: white;
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

const FaIconButton = props => {
  const { onClick, faIcon, label, isDisabled } = props;
  
  if(isDisabled){
    return (
      <DisabledContainer>
        <FontAwesomeIcon icon={faIcon} />
        <Label>{label}</Label>
      </DisabledContainer>
    );
  }
  else{
    return (
      <Container onClick={onClick}>
        <FontAwesomeIcon icon={faIcon} />
        <Label>{label}</Label>
      </Container>
    );
  }

};

export default FaIconButton;
