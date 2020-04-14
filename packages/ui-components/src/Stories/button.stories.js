import React from "react";
import { FaIconButton, ToggleButton } from "@project/ui-components";
import {
  faDownload,
  faCircle,
  faStopCircle,
  faTv,
  faMicrophone,
  faCameraRetro
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const SimpleIconButtonContainer = styled.div`
  display: flex;
  width: 98%;
  max-width: 860px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin: 0.4rem;
  border: 0.5px solid black;
`;

export default { title: "Buttons" };

export const simpleButtonsWithIcons = () => (
  <SimpleIconButtonContainer>
    <FaIconButton
      onClick={e => console.log("Click Handled, from FaIconButton!")}
      faIcon={faCircle}
      label="Record"
    />
    <FaIconButton
      onClick={e => console.log("Click Handled, from FaIconButton!")}
      faIcon={faStopCircle}
      label="Stop"
    />
  </SimpleIconButtonContainer>
);
export const toggleButtonWithIcon = () => (
  <ToggleButton
    onClick={() => console.log("Click Handled, from ToggleButton!")}
    faIcon={faMicrophone}
    label="Mic"
  />
);
