// Options for getDisplayMedia()

export const displayMediaOptions = {
  video: {
    cursor: "always",
  },
  audio: false,
}

export async function startRecording(_player){//, onDataAvailableCallback, onRecordingStartedCallback, onStopCallback) {
  try {
    _player.srcObject = await navigator.mediaDevices.getDisplayMedia(
      displayMediaOptions
    )
    //dumpOptionsInfo(_player)
    const options = { mimeType: "video/webm; codecs=vp9" }
    //let mediaRecorder = await new MediaRecorder(_player.srcObject, options)
    let mediaRecorder = new MediaRecorder(_player.srcObject, options)

    //mediaRecorder.ondataavailable = onDataAvailableCallback
    //mediaRecorder.onstop = onStopCallback
    mediaRecorder.start(1000)
    //onRecordingStartedCallback(mediaRecorder);
    return mediaRecorder;
    //enableAutoPlay()
  } catch (err) {
    console.error("Error: " + err)
    //log({ type: "error", message: err })
  }


}

export function stopRecording(_player, mediaRecorder) {
  if (_player.srcObject !== null) {
    let tracks = _player.srcObject.getTracks()

    tracks.forEach(track => track.stop())
    //_player.srcObject = null;
    mediaRecorder.stop();
    _player.srcObject = null;
    //onDownloadReadyCallback();
  }
}

/* un-exported private functions */

function dumpOptionsInfo(_player) {
  /*const videoTrack = _player.srcObject.getVideoTracks()[0]
  log({ type: "info", message: "Track settings:" })
  log({
    type: "info",

    message: videoTrack.getSettings(),
  })
  log({
    type: "info",
    message: videoTrack.getConstraints(),
  })*/
}

export const log = item => {
  /*setConsoleMessages([
          ...consoleMessages,
           message
        ]);*/
  //dispatch({ type: ADD_LOG_ITEM, payload: { item } })
}
