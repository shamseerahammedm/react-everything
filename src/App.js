import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './form/form.component';
import FormikTag from './form/Formik/FormikForm/FormikForm';
import LoadMore from './load-more/load-more';
import LifeCycleMethods from './lifecycle/lifecycle';

import IntersectionObserverTesting from './intersection-observer/intersection-observer.component';
import Refs from './refs/refs';
import RouteComponent from './route/route';
import TransitionGroup from './animations/transitiongroup';
import Csstransition from './animations/csstransition';
import Promise from './promises/promises';
import Redux from './redux/redux';
import TailWind from './non-react/tail-wind/tail-wind.component';
import Hooks from './Hooks/Hooks.component';
import MaterialUiFullForm from './material/material-ui-full-form/full-form.component';
import MaterialUIFUll from './material/material-ui-full/MaterialUIFull'; // refer this for complete things
import Javascript from './javascript/javscript';
import Authentication from './authentication/authentication';

import FormikFullFormFormArrayValidation from './form/Formik/formik-form-array-validation/FormikFullFormFormArrayValidation';
import HooksApiTest from './Hooks/HooksAPITest.component';
// import ReduxFormTest from './form/redux-form/redux.form';
import StepForm from './form/step-form/step-form';
// import Calendar from './calendar/calendar';
// import TextEditor from './text-editor/textEditor';
// import SoundRecorder from './SoundRecorder/SoundRecorder';

// Material ui starts 

import Dashboard from './material/dashboard/dashboard';
// import MaterialEmail from './material/MaterialEmail/MaterialEmail';
import MaterialUiTheme from './material/MaterialUiTheme/MaterialUiTheme';
import Questionare from './material/questionare/Qustionare';
import Login from './material/login/Login';
import MaterilFileTree from './FileManager/MaterilFileTree/MaterilFileTree';
import FolderBrowser from './FileManager/FolderBrowser';
import UseimperativeHandle from './UseimperativeHandle/UseimperativeHandle';

// import MultiStepForm from './multi-step-form/multistepform';
import Context from './Context/Context';
import MultiParent from './Stepper/index';

import FormikFormArrays from './form/Formik/formik-form-array-validation/bootstrap';
import CssGrid from './css-grids/CssGrid';
import FormArray from './form/react-hook-form/form-array/form-array';
import FormArray2 from './form/react-hook-form/FormArray2/FormArray2';
import Phase1 from './form/react-hook-form/phase1/Phase1';
import RenderProps from './RenderProps/RenderProps';
import AutoResizerHookForms from './form/react-hook-form/AutoResizerHookForms/AutoResizerHookForms';
import Test from './form/react-hook-form/phase1/Phase1';
import TestComponent from './TestComponent/TestComponent';
import BindingComponent from './Binding/Binding';
import FormikBackEndErrors from 'form/Formik/FormikBackEndErrors/FormikBackEndErrors';
import FormikBackEndErrorsProper from 'form/Formik/FormikBackEndErrors/FormikBackEndErrorsProper';
import FormikForm from 'form/Formik/FormikForm/FormikForm';
import CustomFormikMaterialUI from 'form/Formik/CustomFormikMaterilUI/CustomFormikMaterilUI';

function App() {

  return (
    <div className="App">
      <Switch>

        {/* Form section starts*/}
        <Route exact path="/" component={Form} />
        <Route exact path="/formtag" component={FormikTag} />
        <Route exact path="/formik" component={FormikForm} />
        <Route exact path="/formikformarray" component={FormikFullFormFormArrayValidation} />
        {/* <Route exact path="/reduxform" component={ReduxFormTest} /> */}
        <Route exact path="/stepform" component={StepForm} />
        <Route exact path="/formik-backend-errors" component={FormikBackEndErrors} />
        <Route exact path="/formik-backend-errors-proper" component={FormikBackEndErrorsProper} />
        <Route exact path="/formik-custom-material-ui" component={CustomFormikMaterialUI} />

        {/* Form section ends*/}

        <Route exact path="/binding" component={BindingComponent} />
        <Route exact path="/pagination" component={LoadMore} />
        <Route exact path="/refs" component={Refs} />
        <Route exact path="/lifecyclemethods" component={LifeCycleMethods} />
        <Route exact path="/intersectionobserver" component={IntersectionObserverTesting} />
        <Route exact path="/test" component={TestComponent} />
        <Route exact path="/route" component={RouteComponent} />
        <Route exact path="/transitiongroup" component={TransitionGroup} />
        <Route exact path="/csstransition" component={Csstransition} />
        <Route exact path="/redux" component={Redux} />
        <Route exact path="/promise" component={Promise} />

        <Route exact path="/hooks" component={Hooks} />
        <Route exact path="/hooks_difference" component={HooksApiTest} />

        <Route exact path="/full-form" component={MaterialUiFullForm} />
        <Route exact path="/materialui" component={MaterialUIFUll} />
        <Route exact path="/dashboard" component={Dashboard} />
        {/* <Route exact path="/materialemail" component={MaterialEmail} /> */}
        <Route exact path="/materialtheme" component={MaterialUiTheme} />
        <Route exact path="/login" component={Login} />

        <Route exact path="/handle" component={UseimperativeHandle} />
        <Route exact path="/context" component={Context} />

        <Route exact path="/authentication" component={Authentication} />
        <Route exact path="/javascript" component={Javascript} />

        {/* <Route exact path="/calendar" component={Calendar} /> */}
        {/* <Route exact path="/text_editor" component={TextEditor} /> */}
        <Route exact path="/material_file_tree" component={MaterilFileTree} />
        {/* <Route exact path="/chonky" component={Chonky} /> */}
        {/* <Route exact path="/folder_browser" component={FolderBrowser} /> */}
        {/* <Route exact path="/soundrecord" component={RecordView} /> */}
        {/* <Route exact path="/audiorecorder" component={AudioRecorderComponent} /> */}
        {/* // the one that worked */}
        {/* <Route exact path="/soundrecorder" component={SoundRecorder} /> */}
        {/* <Route exact path="/multistep" component={MultiStepForm} /> */}
        <Route exact path="/stepper" component={MultiParent} />
        <Route exact path="/formarray" component={FormikFormArrays} />
        <Route exact path="/css-grid" component={CssGrid} />

        {/* React Hook Form */}
        {/* <Route exact path="/react-hook-form/field-array" component={FormArray} /> */}
        {/* <Route exact path="/react-hook-form/field-array2" component={FormArray2} /> */}
        <Route exact path="/react-hook-form/phase1" component={Phase1} />
        <Route exact path="/resizer" component={AutoResizerHookForms} />

        {/* Render props */}
        <Route exact path="/render-props" component={RenderProps} />

        {/* Non react starts */}
        <Route exact path="/tailwind" component={TailWind} />
        <Route path="*" render={() => <p> 404 Not found </p>} />

        {/* <Route exact path="/reactlazy" component={ReactLazy} /> */}

        <Route exact path="/material_file_tree" component={MaterilFileTree} />
      </Switch>

    </div>
  );
}

export default App;
