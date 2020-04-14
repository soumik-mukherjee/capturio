import React, {useState} from "react";
import styled from "styled-components";
import { RecorderControls } from "../index";

const RecorderControlsContainer = styled.div`
  display: block;
  width: 100%;
  max-width: 860px;
  margin: 0.4rem;
  border: 0px solid black;
`;

const Separator = styled.div`
  width: 844px;
  margin: 0.2rem;
  padding: 0.1rem;
  border-bottom: 3px solid lightgray;
  color: white;
`;

const SimButton = styled.button`
  margin: 1rem;
  padding: 0.2rem;
`;

export default { title: "Recorder Controls" };

export const withDefaultLayout = () => {
  const [isDownloadReady, setIsDownloadReady] = useState(true);
  const handleToggleMic = () => {
    console.log("Mic selection toggled!");
  };
  const handleToggleCam = () => {
    console.log("Cam selection toggled!");
  };
  const handleToggleScreen = () => {
    console.log("Screen selection toggled!");
  };
  const handleToggle_DownloadReady = () => {
    setIsDownloadReady(!isDownloadReady);
  };
  return (
    <RecorderControlsContainer>
      <SimButton onClick={handleToggle_DownloadReady}>Toggle Download Ready</SimButton>
      <Separator />
      <RecorderControls
        onStartRecorder={() => null}
        onStopRecorder={() => null}
        isDownloadReady={isDownloadReady}
        downloadUrl="#"
        onToggleMic={handleToggleMic}
        onToggleScreen={handleToggleScreen}
        onToggleCam={handleToggleCam}
      />
    </RecorderControlsContainer>
  );
};
