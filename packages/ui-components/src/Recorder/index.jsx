import React, { useState, useEffect, useReducer } from "react"
import styled from "styled-components"

import RecorderControls from "./RecorderControls"
import { recorderReducer } from "./reducers"
import {
  RECORDER_DATA_AVAILABLE,
  RECORDING_DOWNLOAD_READY,
} from "./actionTypes"

const Player = styled.video`
  border: 1px solid #999;
  width: 98%;
  max-width: 860px;
`
const REC_STATUS_OFF = "OFF"
const REC_STATUS_ON_REQUESTED = "REQ_ON"
const REC_STATUS_ON = "ON"
const REC_STATUS_OFF_REQUESTED = "REQ_OFF"
const REC_DATA_AVAIL_FREQUENCY_MILLIS = 5000

const initialState = {
  logItems: [],
  autoplay: false,
  recordedChunks: [],
  isDownloadReady: false,
  downloadUrl: "file:///",
}
let player = null
let mediaRecorder = null
let mediaStream = null
const Recorder = props => {
  const [state, dispatch] = useReducer(recorderReducer, initialState)
  const [recordingStatus, setRecordingStatus] = useState(REC_STATUS_OFF)

  const setPlayerRef = element => {
    player = element
  }

  const setMediaStream = stream => {
    mediaStream = stream
  }

  const setMediaRecorder = recorder => {
    mediaRecorder = recorder
  }

  useEffect(() => {
    const recOptions = { mimeType: "video/webm; codecs=vp9,opus", videoBitsPerSecond : 3000000, audioBitsPerSecond : 128000}
    const displayMediaOptions = {
      video: {
        cursor: "always",
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 128000
      },
    }
    function recordingCallback_DataAvailble(event) {
      if (event.data.size > 0) {
        dispatch({
          type: RECORDER_DATA_AVAILABLE,
          payload: { mediaData: event.data },
        })
      } else {
        console.info("Data available but size zero ")
      }
    }

    function recordingCallback_OnStop(event) {
      dispatch({
        type: RECORDING_DOWNLOAD_READY,
      })
    }

    switch (recordingStatus) {
      case REC_STATUS_OFF:
        break
      case REC_STATUS_ON_REQUESTED:
        navigator.mediaDevices
          .getDisplayMedia(displayMediaOptions)
          .then(function(streamObj) {
            player.srcObject = streamObj
            let audioTrack = streamObj.getAudioTracks();
            setMediaStream(streamObj)
            let recorder = new MediaRecorder(streamObj, recOptions)

            recorder.ondataavailable = recordingCallback_DataAvailble
            recorder.onstop = recordingCallback_OnStop
            recorder.start(REC_DATA_AVAIL_FREQUENCY_MILLIS)
            setMediaRecorder(recorder)
            setRecordingStatus(REC_STATUS_ON)
          })
          .catch(function(err) {
            console.error("Error: " + err)
            setRecordingStatus(REC_STATUS_OFF_REQUESTED)
          })
        break
      case REC_STATUS_ON:
        break
      case REC_STATUS_OFF_REQUESTED:
        mediaRecorder.stop()
        let tracks = mediaStream.getTracks()
        tracks.forEach(track => track.stop())
        player.srcObject = null
        setMediaStream(null)
        setRecordingStatus(REC_STATUS_OFF)
        break
    }

    return function cleanup() {}
  }, [recordingStatus])

  return (
    <>
      <p>
        This example shows you the contents of the selected part of your
        display. Click the Start Capture button to begin.
      </p>
      <RecorderControls
        onStartRecorder={() => setRecordingStatus(REC_STATUS_ON_REQUESTED)}
        onStopRecorder={() => setRecordingStatus(REC_STATUS_OFF_REQUESTED)}
        isDownloadReady={state.isDownloadReady}
        downloadUrl={state.downloadUrl}
      />
      <Player id="video" ref={setPlayerRef} autoPlay />
      <br />
    </>
  )
}

export default Recorder
