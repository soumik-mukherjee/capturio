import {
  ADD_LOG_ITEM,
  ENABLE_AUTOPLAY,
  RECORDER_DATA_AVAILABLE,
  RECORDING_DOWNLOAD_READY
} from "./actionTypes";

export function recorderReducer(state, action) {
  switch (action.type) {
    case RECORDER_DATA_AVAILABLE:
      let { mediaData } = action.payload;
      return {
        ...state,
        isDownloadReady: false,
        recordedChunks: [...state.recordedChunks, mediaData]
      };
    case RECORDING_DOWNLOAD_READY:
      let blob = new Blob(state.recordedChunks, {
        type: "video/webm"
      });
      let url = URL.createObjectURL(blob);
      return { ...state, downloadUrl: url, isDownloadReady: true };
    default:
      return state;
  }
}

export function recorderControlsReducer(state, action) {
  switch (action.type) {
    case "RECORD_ON":
      return {
        ...state,
        recordButton: { isDisabled: true },
        stopButton: { isDisabled: false },
        srcMicButton: { isDisabled: true },
        srcCamButton: { isDisabled: true },
        srcScreenButton: { isDisabled: true },
        downloadButton: { isDisabled: true }
      };
      case "RECORD_OFF":
        return {
          ...state,
          recordButton: { isDisabled: false },
          stopButton: { isDisabled: true },
          srcMicButton: { isDisabled: false },
          srcCamButton: { isDisabled: false },
          srcScreenButton: { isDisabled: false },
          downloadButton: { isDisabled: true }
        };
    default:
      return state;
  }
}
