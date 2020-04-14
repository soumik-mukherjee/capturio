import React from "react";
import styled from "styled-components";
import {
  faDownload,
  faCircle,
  faStopCircle,
  faTv,
  faMicrophone,
  faCameraRetro
} from "@fortawesome/free-solid-svg-icons";
import { FaIconButton, ToggleButton } from "@project/ui-components";

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

const RecorderControls = props => {
  const {
    onStartRecorder,
    onStopRecorder,
    downloadUrl,
    isDownloadReady
  } = props;

  return (
    <Container>
      <FaIconButton
        onClick={onStartRecorder}
        faIcon={faCircle}
        label="Record"
      />
      <FaIconButton
        onClick={onStopRecorder}
        faIcon={faStopCircle}
        label="Stop"
      />
      <ElasticSpacer />
      <ToggleButton onClick={() => null} faIcon={faTv} label="Screen" />
      <ToggleButton onClick={() => null} faIcon={faCameraRetro} label="Cam" />
      <ToggleButton onClick={() => null} faIcon={faMicrophone} label="Mic" />
      <ElasticSpacer />
      <FaIconButton
        id="download"
        as="a"
        href={downloadUrl}
        download="test.webm"
        faIcon={faDownload}
        label="Download"
      />
      {/*
      <Button id="start" onClick={onStartRecorder}>
        <FontAwesomeIcon icon={faCircle} />
        <Label>Record</Label>
      </Button>
      <Button id="stop" onClick={onStopRecorder}>
        <FontAwesomeIcon icon={faStopCircle} /> <Label>Stop</Label>
      </Button>
      <ElasticSpacer />
      <Label>Sources</Label>
      <ToggleButton id="srcScreen">
        <FontAwesomeIcon icon={faTv} />
        <Label>Screen</Label>
      </ToggleButton>
      <ToggleButton id="srcCam">
        <FontAwesomeIcon icon={faCameraRetro} />
        <Label>Cam</Label>
      </ToggleButton>
      <ToggleButton id="srcMic">
        <FontAwesomeIcon icon={faMicrophone} />
        <Label>Mic</Label>
      </ToggleButton>
      <ElasticSpacer />
      <Button id="download" as="a" href={downloadUrl} download="test.webm">
        <FontAwesomeIcon icon={faDownload} /> <Label>Download</Label>
      </Button>
      */}
    </Container>
  );
};

export default RecorderControls;
