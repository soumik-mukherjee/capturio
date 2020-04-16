import React, { useReducer } from "react";
import styled from "styled-components";
import {
  faDownload,
  faCircle,
  faStopCircle,
  faTv,
  faMicrophone,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { FaIconButton, ToggleButton, FaIconLink } from "@project/ui-components";
import { recorderControlsReducer } from "./reducers";

const Container = styled.span`
  display: flex;
  width: 98%;
  max-width: 860px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin: 0.4rem;
`;

const ElasticSpacer = styled.div`
  flex-grow: 1;
`;

const InitialState = {
  recordButton: { isDisabled: false },
  stopButton: { isDisabled: true },
  srcMicButton: { isDisabled: false },
  srcCamButton: { isDisabled: false },
  srcScreenButton: { isDisabled: false },
  downloadButton: { isDisabled: true },
};
const RecorderControls = (props) => {
  const {
    onStartRecorder,
    onStopRecorder,
    downloadUrl,
    isDownloadReady,
    onToggleMic,
    onToggleScreen,
    onToggleCam,
  } = props;

  const [state, dispatch] = useReducer(recorderControlsReducer, InitialState);

  const handleClick_RecordOn = () => {
    dispatch({
      type: "RECORD_ON",
    });
    onStartRecorder();
  };

  const handleClick_RecordOff = () => {
    dispatch({
      type: "RECORD_OFF",
    });
    onStopRecorder();
  };

  return (
    <Container>
      <FaIconButton
        onClick={handleClick_RecordOn}
        faIcon={faCircle}
        label="Record"
        isDisabled={state.recordButton.isDisabled}
      />
      <FaIconButton
        onClick={handleClick_RecordOff}
        faIcon={faStopCircle}
        label="Stop"
        isDisabled={state.stopButton.isDisabled}
      />
      <ElasticSpacer />
      <ToggleButton
        onClick={onToggleScreen}
        faIcon={faTv}
        label="Screen"
        isDisabled={state.srcScreenButton.isDisabled}
      />
      <ToggleButton
        onClick={onToggleCam}
        faIcon={faCameraRetro}
        label="Cam"
        isDisabled={state.srcCamButton.isDisabled}
      />
      <ToggleButton
        onClick={onToggleMic}
        faIcon={faMicrophone}
        label="Mic"
        isDisabled={state.srcMicButton.isDisabled}
      />
      <ElasticSpacer />
      <FaIconLink
        id="download"
        faIcon={faDownload}
        label="Download"
        isDisabled={state.downloadButton.isDisabled ^ isDownloadReady}
        href={downloadUrl}
        download="recording.webm"
      />
    </Container>
  );
};

export default RecorderControls;
