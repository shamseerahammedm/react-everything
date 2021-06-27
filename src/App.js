/* eslint-disable */
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
// import ReduxFormTest from './form/redux-form/redux.form';
import StepForm from './form/step-form/step-form';
// import Calendar from './calendar/calendar';
// import TextEditor from './text-editor/textEditor';
// import SoundRecorder from './SoundRecorder/SoundRecorder';

// Material ui starts 

import Questionare from './material/questionare/Qustionare';
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
import CustomFormikNormal from 'form/Formik/CustomFormikNormal/CustomFormikNormal';
import CustomFormikMaterilUIPage from 'form/Formik/CustomFormikMaterilUI/Page';
import CustomHookFormMaterilUIPage from 'form/react-hook-form/CustomHookFormMaterilUI/Page';
import CustomHookFormMaterilUI from 'form/react-hook-form/CustomHookFormMaterilUI/CustomHookFormMaterilUI';
import ReactTable from './ReactTable/ReactTable';
import BarChart from './Charts/ReactChart/ReactChart';
import CustomHook from 'Hooks/CustomHook/CustomHook';
import ToDoApp from 'Context/TodoApp/TodoApp';
import MultistepWizard from 'form/Formik/MultistepWizard/MultistepWizard';
import Catalogue from 'Catalogue/Catalogue';


export const routePaths = [
  {
    name: 'Formik section',
    linksDetails: [
      {
        linkName: "Root Page",
        path: "/",
        exact: true,
        exclude: false,
        component: Catalogue
      },
      {
        linkName: "Simple form",
        path: "/formtag",
        exact: true,
        exclude: false,
        component: FormikTag
      },
      {
        linkName: "Simple form",
        path: "/formik",
        exact: true,
        exclude: false,
        component: FormikForm
      },
      {
        linkName: "Simple form",
        path: "/formikformarray",
        exact: true,
        exclude: false,
        component: FormikFullFormFormArrayValidation
      },
      {
        linkName: "Simple form",
        path: "/stepform",
        exact: true,
        exclude: false,
        component: StepForm
      },
      {
        linkName: "Simple form",
        path: "/formik-backend-errors",
        exact: true,
        exclude: false,
        component: FormikBackEndErrors
      },
      {
        linkName: "Simple form",
        path: "/formik-backend-errors-proper",
        exact: true,
        exclude: false,
        component: FormikBackEndErrorsProper
      },
      {
        linkName: "Simple form",
        path: "/formik-custom-material-ui",
        exact: true,
        exclude: false,
        component: CustomFormikMaterilUIPage
      },
      {
        linkName: "Simple form",
        path: "/formik-custom-material-ui-create",
        exact: true,
        exclude: false,
        component: CustomFormikMaterialUI
      },
      {
        linkName: "Simple form",
        path: "/formik-custom-material-ui-edit/:Id",
        exact: true,
        exclude: false,
        component: CustomFormikMaterialUI
      },
      {
        linkName: "Simple form",
        path: "/react-hook-from-custom-material-ui",
        exact: true,
        exclude: false,
        component: CustomHookFormMaterilUIPage
      },
      {
        linkName: "Simple form",
        path: "/react-hook-from-custom-material-ui-create",
        exact: true,
        exclude: false,
        component: CustomHookFormMaterilUI
      },
      {
        linkName: "Simple form",
        path: "/react-hook-from-custom-material-ui-edit/:Id",
        exact: true,
        exclude: false,
        component: CustomHookFormMaterilUI
      },
      {
        linkName: "Simple form",
        path: "/formik-custom-normal",
        exact: true,
        exclude: false,
        component: CustomFormikNormal
      },
      {
        linkName: "Simple form",
        path: "/binding",
        exact: true,
        exclude: false,
        component: BindingComponent
      },
      {
        linkName: "Simple form",
        path: "/pagination",
        exact: true,
        exclude: false,
        component: LoadMore
      },
      {
        linkName: "Simple form",
        path: "/refs",
        exact: true,
        exclude: false,
        component: Refs
      },
      {
        linkName: "Simple form",
        path: "/lifecyclemethods",
        exact: true,
        exclude: false,
        component: LifeCycleMethods
      },
      {
        linkName: "Simple form",
        path: "/intersectionobserver",
        exact: true,
        exclude: false,
        component: IntersectionObserverTesting
      },
      {
        linkName: "Simple form",
        path: "/test",
        exact: true,
        exclude: false,
        component: TestComponent
      },
      {
        linkName: "Simple form",
        path: "/route",
        exact: true,
        exclude: false,
        component: RouteComponent
      },
      {
        linkName: "Simple form",
        path: "/transitiongroup",
        exact: true,
        exclude: false,
        component: TransitionGroup
      },
      {
        linkName: "Simple form",
        path: "/csstransition",
        exact: true,
        exclude: false,
        component: Csstransition
      },
      {
        linkName: "Simple form",
        path: "/redux",
        exact: true,
        exclude: false,
        component: Redux
      },
      {
        linkName: "Simple form",
        path: "/promise",
        exact: true,
        exclude: false,
        component: Promise
      },
      {
        linkName: "Simple form",
        path: "/hooks",
        exact: true,
        exclude: false,
        component: Hooks
      },
      {
        linkName: "Simple form",
        path: "/full-form",
        exact: true,
        exclude: false,
        component: MaterialUiFullForm
      },
      {
        linkName: "Simple form",
        path: "/materialui",
        exact: true,
        exclude: false,
        component: MaterialUIFUll
      },
      {
        linkName: "Simple form",
        path: "/userimperativehandle",
        exact: true,
        exclude: false,
        component: UseimperativeHandle
      },
      {
        linkName: "Simple form",
        path: "/authentication",
        exact: true,
        exclude: false,
        component: Authentication
      },
      {
        linkName: "Simple form",
        path: "/javascript",
        exact: true,
        exclude: false,
        component: Javascript
      },
      {
        linkName: "Simple form",
        path: "/material_file_tree",
        exact: true,
        exclude: false,
        component: MaterilFileTree
      },
      {
        linkName: "Simple form",
        path: "/stepper",
        exact: true,
        exclude: false,
        component: MultiParent
      },
      {
        linkName: "Simple form",
        path: "/formarray",
        exact: true,
        exclude: false,
        component: FormikFormArrays
      },
      {
        linkName: "Simple form",
        path: "/css-grid",
        exact: true,
        exclude: false,
        component: CssGrid
      },
      {
        linkName: "Simple form",
        path: "/react-chart",
        exact: true,
        exclude: false,
        component: BarChart
      },
      {
        linkName: "Simple form",
        path: "/react-hook-form/phase1",
        exact: true,
        exclude: false,
        component: Phase1
      },
      {
        linkName: "Simple form",
        path: "/resizer",
        exact: true,
        exclude: false,
        component: AutoResizerHookForms
      },
      {
        linkName: "Simple form",
        path: "/render-props",
        exact: true,
        exclude: false,
        component: RenderProps
      },
      {
        linkName: "Simple form",
        path: "/tailwind",
        exact: true,
        exclude: false,
        component: TailWind
      },
      {
        linkName: "Simple form",
        path: "/material_file_tree",
        exact: true,
        exclude: false,
        component: MaterilFileTree
      },
      {
        linkName: "Simple form",
        path: "/react-table",
        exact: true,
        exclude: false,
        component: ReactTable
      },
      
      {
        linkName: "Simple form",
        path: "/to-do-context",
        exact: true,
        exclude: false,
        component: ToDoApp
      },
      {
        linkName: "Simple form",
        path: "/multistep1",
        exact: true,
        exclude: false,
        component: MultistepWizard
      },
    ]
  },
  {
    name: 'context routes',
    linksDetails: [
      {
        linkName: "Simple form",
        path: "/custom-hook",
        exact: true,
        exclude: false,
        component: CustomHook
      },
      {
        linkName: "Simple form",
        path: "/context",
        exact: true,
        exclude: false,
        component: Context
      },
      {
        linkName: "Simple form",
        path: "*",
        exclude: false,
        component: <p> 404 Not found </p>
      }
    ]
  },
]



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