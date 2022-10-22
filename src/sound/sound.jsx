import React from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

const Sound = () => (
  <div>
    <ReactMediaRecorder

      render={({ status, startRecording, stopRecording, pauseRecording, mediaBlobUrl }) => {
        console.log(mediaBlobUrl);
        return (
          <div>
            <p>{status}</p>
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            <button onClick={pauseRecording}>Pause Recording</button>
            <audio src={mediaBlobUrl} controls  />
          </div>
        );
      }
      }
    />
  </div>
);

export default Sound;

