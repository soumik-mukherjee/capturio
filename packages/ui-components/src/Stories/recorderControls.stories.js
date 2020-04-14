import React from "react";
import { RecorderControls } from "../index";

export default { title: "Recorder Controls" };

export const withDefaultLayout = () => (
  <RecorderControls
    onStartRecorder={() => null}
    onStopRecorder={() => null}
    isDownloadReady={true}
    downloadUrl="#"
  />
);
