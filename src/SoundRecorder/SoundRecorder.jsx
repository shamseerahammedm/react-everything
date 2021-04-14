import React, { useReducer, useEffect } from 'react';
import './styles.scss';

import Recorder from '../assets/Recorderjs-master/src/index';
import { PlyrComponent } from 'plyr-react';

import { useDispatch } from 'react-redux'
import Plyr from 'plyr';

import mp3Sample from './sample.mp3';
import wav from './2020-08-01T20_36_03.667Z.wav';
import { store } from '../redux/redux-files/store';
// import MuiAudioPlayer from "./AudioPlayer";
import AudioPlayer from 'material-ui-audio-player';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
// import '../assets/web-audio-recorder-js-master/lib-minified/WebAudioRecorder.min.js'
import RecordRTC, { getSeekableBlob, invokeSaveAsDialog, StereoAudioRecorder, MediaStreamRecorder } from 'recordrtc';
import { Decoder, tools, Reader } from 'ts-ebml';
import lamejs  from 'lamejs';

//rec rtc
let recRtc;


//webkitURL is deprecated but nevertheless
// URL = window.URL || window.webkitURL;


let gumStream; 						//stream from getUserMedia()
let rec; 							//Recorder.js object
let input;

//MediaStreamAudioSourceNode we'll be recording
// shim for AudioContext when it's not avb. 
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new (window.AudioContext || window.webkitAudioContext)();




const startRecordHandler = (dispatch) => {
    /*
        Simple constraints object, for more advanced audio features see
        https://addpipe.com/blog/audio-constraints-getusermedia/
    */

    let constraints = { audio: true, video: false }

    /*
      Disable the record button until we get a success or fail from getUserMedia() 
        */
    dispatch({ type: 'start_recording' });


    /*
        We're using the standard promise based getUserMedia() 
        https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
    */

    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        console.log("getUserMedia() success, stream created, initializing Recorder.js ...");

        /*
            create an audio context after getUserMedia is called
            sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
            the sampleRate defaults to the one set in your OS for your playback device

        */
        // audioContext = new AudioContext();

        //update the format 
        document.getElementById("formats").innerHTML = "Format: 1 channel pcm @ " + audioContext.sampleRate / 1000 + "kHz"

        /*  assign to gumStream for later use  */
        gumStream = stream;

        /* use the stream */
        // input = audioContext.createMediaStreamSource(stream);

        /* 
            Create the Recorder object and configure to record mono sound (1 channel)
            Recording 2 channels  will double the file size
        */
        // rec = new Recorder(input, { numChannels: 1 });



        // 5000 --> 108 KB



        
        recRtc = RecordRTC(stream, {
            type: 'audio',
            // mimeType: 'audio/webm',
            mimeType: 'audio/wav',
            recorderType : StereoAudioRecorder,
            numberOfAudioChannels: 1,
            // audioBitsPerSecond : 128000,

            desiredSampRate: 96000,
            // bufferSize:16384, // -->  no effect
            // sampleRate: 4000,
        });

        console.log('recRtc',recRtc);




        //start the recording process
        // rec.record()
        recRtc.startRecording();


        console.log("Recording started");

    }).catch(function (err) {

        //enable the record button if getUserMedia() fails
        if (err)
        {
            dispatch({ action: 'stop_recording' });
        }

    });
}






const pauseRecordHandler = (dispatch) => {

    // console.log("pauseButton clicked rec.recording=", rec.recording);

    console.log('pauseButton clicked recRtc = ', recRtc.getState());

    if (recRtc.getState() === 'recording')
    {
        dispatch({ type: 'pause_recording' });
        recRtc.pauseRecording();
    }
    else
    {
        recRtc.resumeRecording();
        dispatch({ type: 'resume_recording' });
    }



    // if (rec.recording)
    // {

    //     dispatch({ type: 'pause_recording' });
    //     //pause
    //     rec.stop();

    // } else
    // {
    //     dispatch({ type: 'resume_recording' });
    //     //resume
    //     rec.record()
    // }
}


const stopRecordHandler = (dispatch) => {

    //tell the recorder to stop the recording
    // rec.stop();


    recRtc.stopRecording(() => {
        let blob = recRtc.getBlob();
       

        console.log('blob',blob);
        // getSeekableBlob(recRtc.getBlob(), function (seekableBlob) {
        //     console.log('seekableBlob', seekableBlob);
        // });


        // this is for getting seekable blob as the directly generated blob was not seekable

        // for webm 
        // use this for seekable webm 
        // injectMetadata(blob).then(seekableBlob => {

        //     console.log('seekableBlob',seekableBlob);
        //     const url = URL.createObjectURL(seekableBlob);
        //     customCallBackWrapper(dispatch, url);
        // })
        const url = URL.createObjectURL(blob);
        customCallBackWrapper(dispatch, url);


        // const url = URL.createObjectURL(blob);
        






        // for mp3 StereoAudioRecorder should be given in config, 
        // var reader = new FileReader();
        // reader.onload = function(event) {
        //     var buffer = event.target.result;
        //     var mp3Blob = encodeMP3(buffer);
        //     console.log('mp3Blob',mp3Blob);
        //     // setUploadAudioData(mp3Blob);
        //     // invokeSaveAsDialog(mp3Blob);
        //     customCallBackWrapper(dispatch, mp3Blob);
        // };
        // reader.readAsArrayBuffer(blob);





        
        
    });
    //stop microphone access
    gumStream.getAudioTracks()[0].stop();

    //create the wav blob and pass it on to createDownloadLink

    // rec.exportWAV(customCallBackWrapper(dispatch));

}




function customCallBackWrapper(dispatch, blob) {


    // var url = URL.createObjectURL(blob);
    // console.log('url',url);
    // var au = document.createElement('audio');
    // //add controls to the <audio> element
    // au.controls = true;
    // au.src = url;


    dispatch({ type: 'stop_recording', payload: blob })
    // var li = document.createElement('li');




    var link = document.createElement('a');

    //name of .wav file to use during upload and download (without extension)
    // var filename = `CAP-${new Date().toISOString()}`;
    var filename = new Date().toISOString();



    // //save to disk link
    // link.href = url;
    // link.download = filename + ".wav"; //download forces the browser to donwload the file using the  filename
    // link.innerHTML = "Save to disk";

    // //add the new audio element to li
    // li.appendChild(au);

    // //add the filename to the li
    // li.appendChild(document.createTextNode(filename + ".wav "))

    // //add the save to disk link to li
    // li.appendChild(link);



    // const recordingsList = document.getElementById('recordingsList')
    // recordingsList.appendChild(li);
}




const INITIAL_STATE = {
    isRecordButtonDisabled: false,
    isStopButtonDisabled: true,
    isPauseButtonDisabled: true,
    isPaused: false,
    recordedData: [],
    dispatch: null
}

function recorderReducer(state, { type, payload }) {
    switch (type)
    {
        case 'start_recording':
            return {
                ...state,
                isRecordButtonDisabled: true,
                isPauseButtonDisabled: false,
                isStopButtonDisabled: false,
            }

        case 'stop_recording':

            // const recordedData =

            return {
                ...state,
                isRecordButtonDisabled: false,
                isStopButtonDisabled: true,
                isPauseButtonDisabled: true,
                recordedData: [
                    ...state.recordedData,
                    payload
                ]
            }

        case 'pause_recording':
            return {
                ...state,
                isRecordButtonDisabled: true,
                isPauseButtonDisabled: false,
                isStopButtonDisabled: false,
                isPaused: true
            }

        case 'resume_recording':
            return {
                ...state,
                isRecordButtonDisabled: true,
                isPauseButtonDisabled: false,
                isStopButtonDisabled: false,
            }



        default:
            return state;
    }

}


const SoundRecorder = () => {

    const muiTheme = createMuiTheme({});

    const [state, dispatch] = useReducer(recorderReducer, INITIAL_STATE)





    const {
        isRecordButtonDisabled,
        isStopButtonDisabled,
        isPauseButtonDisabled,
        isPaused,
        recordedData
    } = state;



    console.log(recordedData);
    return (
        <div className="recorder">

            <div className="container">

                {/* <h1>Simple Recorder.js demo</h1>
                <p><small>Made by the <a href="https://addpipe.com" target="_blank">Pipe Video Recording Platform</a></small></p>
                <p>This demo uses <a href="https://github.com/mattdiamond/Recorderjs" target="_blank">Recorder.js</a> to record wav/PCM audio directly in the browser. Matt Diamond‘s <a target="_blank" href="https://github.com/mattdiamond/Recorderjs">Recorder.js</a> is a popular JavaScript library for recording audio in the browser as uncompressed pcm audio in .wav containers. Before it, the only way to record audio was to use Flash.</p>
                <p>Check out the <a href="https://github.com/addpipe/simple-recorderjs-demo" target="_blank">code on GitHub</a> and <a href="https://addpipe.com/blog/using-recorder-js-to-capture-wav-audio-in-your-html5-web-site/" target="_blank">our blog post on using Recorder.js to capture WAV audio</a>.</p> */}
                <div id="controls">
                    <button disabled={isRecordButtonDisabled} onClick={() => startRecordHandler(dispatch)}>Record</button>
                    <button disabled={isPauseButtonDisabled} onClick={() => pauseRecordHandler(dispatch)}>
                        {isPaused ? 'Resume ' : 'Pause'}
                    </button>
                    <button disabled={isStopButtonDisabled} onClick={() => stopRecordHandler(dispatch)}>Stop</button>
                </div>
                <div id="formats">Format: start recording to see sample rate</div>
                <p><strong>Recordings:</strong></p>
                {/* <ol id="recordingsList"></ol> */}

                {
                    recordedData
                        ?
                        recordedData.map(recordedItem => {
                            return (
                                <>
                                    <PlyrComponent
                                        options={{
                                            settings: ['captions', 'quality', 'speed', 'loop'],
                                            autopause: true,
                                            // controls :[ 'rewind', 'play', 'fast-forward','progress','current-time', 'mute', 'volume', 'settings', 'pip', 'restart', 'download']
                                            controls: ['rewind', 'play', 'fast-forward', 'progress', 'current-time', 'mute', 'volume', 'settings']
                                        }}
                                        sources={{
                                            type: 'audio',
                                            sources: [
                                                {
                                                    src: recordedItem,
                                                    type: 'audio/mp3',
                                                },
                                            ],
                                        }}
                                    />
                                    <audio src={recordedItem} controls></audio>
                                </>
                            )
                        })
                        :
                        <div key={123}>
                            <PlyrComponent

                                options={{
                                    settings: ['captions', 'quality', 'speed', 'loop'],
                                    autopause: true,
                                    // controls :[ 'rewind', 'play', 'fast-forward','progress','current-time', 'mute', 'volume', 'settings', 'pip', 'restart', 'download']
                                    controls: ['rewind', 'play', 'fast-forward', 'progress', 'current-time', 'mute', 'volume', 'settings']
                                }}
                                sources={{
                                    type: 'audio',
                                    sources: [
                                        {
                                            src: null,
                                            type: 'audio/mp3',
                                        },
                                    ],
                                }}
                            />
                        </div>
                }
                <hr />
                {/* {
                    mp3Sample &&
                    <ThemeProvider theme={muiTheme}>
                        <AudioPlayer
                            elevation={1}
                            width="100%"
                            variation="secondary"
                            spacing={3}
                            download={false}
                            autoplay={false}
                            order="standart"
                            preload="auto"
                            loop={true}
                            src={mp3Sample}
                        />
                    </ThemeProvider>
                } */}
            </div>




        </div>
    )
}

export default SoundRecorder;




const readAsArrayBuffer = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        reader.onloadend = () => { resolve(reader.result); };
        reader.onerror = (ev) => { reject(ev.error); };
    });
}

const injectMetadata = blob => {
    const decoder = new Decoder();
    const reader = new Reader();
    reader.logging = false;
    reader.drop_default_duration = false;

    return readAsArrayBuffer(blob)
        .then(buffer => {
            const elms = decoder.decode(buffer);
            elms.forEach((elm) => { reader.read(elm); });
            reader.stop();

            const refinedMetadataBuf =
                tools.makeMetadataSeekable(reader.metadatas, reader.duration, reader.cues);
            const body = buffer.slice(reader.metadataSize);

            return new Blob([refinedMetadataBuf, body], { type: blob.type });
        });
}




var mp3encoder;
var encodeMP3 = function(buffer) {
    // var samples = new Int16Array(buffer);
    // var liblame = new lamejs();
    // console.log(samples);
    // console.log(samples.byteLength);
    // mp3encoder = new liblame.Mp3Encoder(1, 44100, 128);
    // mp3encoder.encodeBuffer(samples);
    // var mp3Data = mp3encoder.flush();
    // console.log(mp3Data);
    //         return mp3Data;




    mp3encoder = new lamejs.Mp3Encoder(1, 44100, 64);
    var mp3Data = [];
    
    var samples = new Int16Array(buffer); //one second of silence (get your data from the source you have)
    var sampleBlockSize = 1152; //can be anything but make it a multiple of 576 to make encoders life easier
    
    var mp3Data = [];
    for (var i = 0; i < samples.length; i += sampleBlockSize) {
        var sampleChunk = samples.subarray(i, i + sampleBlockSize);
        var mp3buf = mp3encoder.encodeBuffer(sampleChunk);
        if (mp3buf.length > 0) {
            mp3Data.push(mp3buf);
        }
    }
    var mp3buf = mp3encoder.flush();   //finish writing mp3
    
    if (mp3buf.length > 0) {
        mp3Data.push(new Int8Array(mp3buf));
    }
    
    var blob = new Blob(mp3Data, {type: 'audio/mp3'});
    var url = window.URL.createObjectURL(blob);
    console.log('MP3 URl: ', url);
    return url;

};

