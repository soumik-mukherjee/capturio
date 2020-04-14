import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.4rem;
  margin: 0.4rem;
  border: 2px solid palevioletred;
  border-radius: 5px;
  background: white;
  color: palevioletred;
  text-decoration: none;
  &:hover {
    background: palevioletred;
    border: 2px solid palevioletred;
    color: white;
  }
`;

const Label = styled.span`
  margin: 0 0.4rem 0 0.8rem;
  line-height: 1.2;
  &::before {
    margin: 0 10px;
  }
`;

const FaIconButton = props => {
  const { onClick, faIcon, label } = props;
  return (
    <Container onClick={onClick}>
      <FontAwesomeIcon icon={faIcon} />
      <Label>{label}</Label>
    </Container>
  );
};

export default FaIconButton;
