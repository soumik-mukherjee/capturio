import React from "react";
import { FaIconButton, ToggleButton, FaIconLink } from "@project/ui-components";
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
      onToggle={(e) => console.log("Mic ToggleButton.onToggle isSelected:" + e.isSelected.toString())}
      faIcon={faMicrophone}
      label="Mic"
      isDisabled={false}
    />

    <ToggleButton
      onToggle={(e) => console.log("Cam ToggleButton.onToggle isSelected:" + e.isSelected.toString())}
      faIcon={faCameraRetro}
      label="Disabled Toggle"
      isDisabled={true}
    />
  </SimpleIconButtonContainer>
);

export const LinkWithIcon = () => (
  <SimpleIconButtonContainer>
    <FaIconLink
      faIcon={faDownload}
      label="Download "
      isDisabled={false}
      href="https://www.thehindu.com/society/yhmwnu/article26855911.ece/ALTERNATES/FREE_660/hym16fido-dido"
      download="fido.jpg"
    />
  </SimpleIconButtonContainer>
);
