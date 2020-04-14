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
      isDisabled={false}
    />
    <FaIconButton
      onClick={e => console.log("Click Handled, from FaIconButton!")}
      faIcon={faStopCircle}
      label="Stop"
      isDisabled={false}
    />
    <FaIconButton
      onClick={e => console.log("Click Handled, from FaIconButton!")}
      faIcon={faTv}
      label="Disabled Button"
      isDisabled={true}
    />
  </SimpleIconButtonContainer>
);
export const toggleButtonWithIcon = () => (
  <SimpleIconButtonContainer>
    <ToggleButton
      onClick={() => console.log("Click Handled, from ToggleButton!")}
      faIcon={faMicrophone}
      label="Mic"
      isDisabled={false}
    />

    <ToggleButton
      onClick={() => console.log("Click Handled, from ToggleButton!")}
      faIcon={faCameraRetro}
      label="Disabled Toggle"
      isDisabled={true}
    />
  </SimpleIconButtonContainer>
);
