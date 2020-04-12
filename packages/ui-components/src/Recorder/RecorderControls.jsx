import React from "react"
import styled from "styled-components"

const Button = styled.button``
const Container = styled.div``
const DownloadLink = styled.a`
  visibility: visible;
`
// visibility: ${props => props.isDownloadReady?"visible":"hidden"};

const RecorderControls = props => {
  const {
    onStartRecorder,
    onStopRecorder,
    downloadUrl,
    isDownloadReady,
  } = props
  return (
    <Container>
      <Button id="start" onClick={onStartRecorder}>
        Start Capture
      </Button>
      <Button id="stop" onClick={onStopRecorder}>
        Stop Capture
      </Button>
      <DownloadLink id="download" href={downloadUrl} download="test.webm">
        Download
      </DownloadLink>
    </Container>
  )
}

export default RecorderControls
