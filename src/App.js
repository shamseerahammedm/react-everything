/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import routePaths from './routes';

function App() {
  return (
    <div className="App">
      <Switch>
        {
          routePaths.map(item => {
            return item.linksDetails.map(linkItem => {
              return (
                <Route
                  exact={linkItem.exact}
                  path={linkItem.path}
                  component={linkItem.component}
                />
              );
            });
          })
        }
      </Switch>
    </div>
  );
}

export default App;





// Section Starts :: old links that exists in repo but not included in link array -- 

const details =
  <>

    {/* Form section starts*/}

    {/* <Route exact path="/reduxform" component={ReduxFormTest} /> */}

    {/* Form section ends*/}



    {/* <Route exact path="/calendar" component={Calendar} /> */}
    {/* <Route exact path="/text_editor" component={TextEditor} /> */}

    {/* <Route exact path="/chonky" component={Chonky} /> */}
    {/* <Route exact path="/folder_browser" component={FolderBrowser} /> */}
    {/* <Route exact path="/soundrecord" component={RecordView} /> */}
    {/* <Route exact path="/audiorecorder" component={AudioRecorderComponent} /> */}
    {/* // the one that worked */}
    {/* <Route exact path="/soundrecorder" component={SoundRecorder} /> */}
    {/* <Route exact path="/multistep" component={MultiStepForm} /> */}


    {/* React Hook Form */}
    {/* <Route exact path="/react-hook-form/field-array" component={FormArray} /> */}
    {/* <Route exact path="/react-hook-form/field-array2" component={FormArray2} /> */}


    {/* Non react starts */}


    {/* <Route exact path="/reactlazy" component={ReactLazy} /> */}


    {/* -----------------------  Context starts ----------------------- */}

    {/* -----------------------  Context ends ----------------------- */}

    {/* formik multi step form */}
  </>

// Section Starts :: old links that exists in repo but not included in link array -- 