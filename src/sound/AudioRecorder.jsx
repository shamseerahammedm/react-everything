import React from 'react'
import AudioRecorder from 'react-audio-recorder';

const AudioRecorderComponent = () => {
    return (
        <AudioRecorder 
            downloadable
            filename="shamseer.wav"
            playLabel="play"
            playingLabel="playing"
            recordLabel="record"
            recordingLabel="Recording"
            removeLabel="remove"
        />
    )
}

export default AudioRecorderComponent;
