
import React from 'react';
import FormikTag from './form/Formik/FormikForm/FormikForm';
import LoadMore from './load-more/load-more';
import LifeCycleMethods from './lifecycle/lifecycle';

import IntersectionObserverTesting from './intersection-observer/intersection-observer.component';
import Refs from './refs/refs';
import RouteComponent from './route/routeParent';
import TransitionGroup from './animations/transitiongroup';
import Csstransition from './animations/csstransition';
import Promise from './promises/promises';
import Redux from './redux/redux';
import TailWind from './non-react/tail-wind/tail-wind.component';
import Hooks from './Hooks/Hooks.component';
import MaterialUiFullForm from './material/material-ui-full-form/full-form.component';
import Javascript from './javascript/javscript';
import Authentication from './authentication/authentication';
import FormikFullFormFormArrayValidation from './form/Formik/formik-form-array-validation/FormikFullFormFormArrayValidation';
import StepForm from './form/step-form/step-form';

// import ReduxFormTest from './form/redux-form/redux.form';
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

import RenderProps from './RenderProps/RenderProps';
import AutoResizerHookForms from './form/react-hook-form/AutoResizerHookForms/AutoResizerHookForms';
import Test from './form/react-hook-form/phase1/Phase1';
import TestComponent from './Test/TestComponent/TestComponent';
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
import PhaseOne from 'form/react-hook-form/phase1/Phase1';
import AutoresizerIssue from 'form/react-hook-form/AutoresizerIssue/AutoresizerIssue';
import TestComponent2 from 'Test/TestComponent2/TestComponent2';
import HookFormBackEndValidation from 'form/react-hook-form/HookFormBackEndValidation/HookFormBackEndValidation';
import FormInsideLoop from 'form/react-hook-form/FormInsideLoop/FormInsideLoop';
import FormikNormal from 'form/Formik/FormikNormal/FormikNormal';
import PDFCreation from 'PDFCreation/PDFCreation';
import StepParent from 'form/Formik/Multistep/RoutedMultistepWizard/StepParent';
import { Step1 } from 'form/Formik/Multistep/RoutedMultistepWizard/StepParent';
import { Step2 } from 'form/Formik/Multistep/RoutedMultistepWizard/StepParent';
import ArrayOperations from 'ArrayOperations/ArrayOperations';
import DesignPatterns from './DesignPatterns/DesignPatterns';
import CustomBrowser from './FileManager/Custom/Custom';
// import VirtualizedTable from './ReactVirtualized/VirtualizedTable';
// import VitualizedHookFormTable from './ReactVirtualized/VitualizedHookFormTable';
import FastForms from './form/FastForms/FastForms';
import YupAllValidations from 'form/react-hook-form/YupAllValidations/YupAllValidations';

const routePaths = [
  {
    name: 'Formik section',
    linksDetails: [
      {
        linkName: 'Root Page',
        path: '/',
        linkDescription: null,
        exact: true,
        exclude: true,
        component: Catalogue
      },
      {
        linkName: 'Array Operations',
        path: '/array_operations',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: ArrayOperations
      },
      {
        linkName: 'stepform',
        path: '/stepform',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: StepForm
      },
      {
        linkName: 'Simple form',
        path: '/binding',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: BindingComponent
      },
      {
        linkName: 'Simple form',
        path: '/pagination',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: LoadMore
      },
      {
        linkName: 'Simple form',
        path: '/refs',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Refs
      },
      {
        linkName: 'Life cycle methods',
        path: '/lifecyclemethods',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: LifeCycleMethods
      },
      {
        linkName: 'Intersection observer',
        path: '/intersectionobserver',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: IntersectionObserverTesting
      },
      {
        linkName: 'Simple form',
        path: '/route',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: RouteComponent
      },
      {
        linkName: 'Animation - transitiongroup',
        path: '/transitiongroup',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: TransitionGroup
      },
      {
        linkName: 'Animation - csstransition',
        path: '/csstransition',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Csstransition
      },
      {
        linkName: 'Simple form',
        path: '/redux',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Redux
      },

      {
        linkName: 'Simple form',
        path: '/hooks',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Hooks
      },
      {
        linkName: 'Simple form',
        path: '/full-form',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: MaterialUiFullForm
      },
      {
        linkName: 'Simple form',
        path: '/userimperativehandle',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: UseimperativeHandle
      },
      {
        linkName: 'Simple form',
        path: '/authentication',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Authentication
      },
      {
        linkName: 'Simple form',
        path: '/javascript',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Javascript
      },
      {
        linkName: 'Simple form',
        path: '/material_file_tree',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: MaterilFileTree
      },
      {
        linkName: 'Simple form',
        path: '/stepper',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: MultiParent
      },
      {
        linkName: 'Simple form',
        path: '/css-grid',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CssGrid
      },
      {
        linkName: 'Simple form',
        path: '/react-chart',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: BarChart
      },
      {
        linkName: 'Auto resizer ',
        path: '/resizer',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: AutoResizerHookForms
      },
      {
        linkName: 'AutoresizerIssue',
        path: '/autoresizerissue',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: AutoresizerIssue
      },
      {
        linkName: 'Simple form',
        path: '/render-props',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: RenderProps
      },
      {
        linkName: 'Simple form',
        path: '/tailwind',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: TailWind
      },
      {
        linkName: 'Simple form',
        path: '/material_file_tree',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: MaterilFileTree
      },
      {
        linkName: 'React Table',
        path: '/react-table',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: ReactTable
      },

      {
        linkName: 'Simple form',
        path: '/to-do-context',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: ToDoApp
      },
      {
        linkName: 'Simple form',
        path: '/multistep1',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: MultistepWizard
      },
      {
        linkName: 'PDF Creation and barcode generator',
        path: '/pdf_creation',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: PDFCreation
      },
      {
        linkName: 'Design patterns',
        path: '/design_patterns',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: DesignPatterns
      },
      {
        linkName: 'File Browser',
        path: '/file_browser',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomBrowser
      },
    ]
  },
  {
    name: 'context routes',
    linksDetails: [
      {
        linkName: 'Simple form',
        path: '/custom-hook',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomHook
      },
      {
        linkName: 'Context',
        path: '/context',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Context
      }
    ]
  },
  {
    name: 'React hook form',
    linksDetails: [
      {
        linkName: 'React hook form',
        path: '/react-hook-form/phase1',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: PhaseOne
      },
      {
        linkName: 'Custom material ui ',
        path: '/react-hook-from-custom-material-ui',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomHookFormMaterilUIPage
      },
      {
        linkName: 'Custom material ui :: Create',
        path: '/react-hook-from-custom-material-ui-create',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomHookFormMaterilUI
      },
      {
        linkName: 'Custom material ui :: Edit',
        path: '/react-hook-from-custom-material-ui-edit/:Id',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomHookFormMaterilUI
      },
      {
        linkName: 'Back end validation',
        path: '/hook_form_back_end_validation',
        linkDescription: 'Back end validation, dependant fields with react hook form',
        exact: true,
        exclude: false,
        component: HookFormBackEndValidation
      },
      {
        linkName: 'Inside loop',
        path: '/hook_form_inside_loop',
        linkDescription: 'Hook form inside loop',
        exact: true,
        exclude: false,
        component: FormInsideLoop
      },
      {
        linkName: 'yup all validation with hook form',
        path: '/yup_validations',
        linkDescription: 'yup all validation with hook form',
        exact: true,
        exclude: false,
        component: () => {
          const isCommercialLoan = false,isGreenCardLoan = true,isNewLoanApplication = true, isEnhancementApplication = false;
          const dummyComponent = (
            <YupAllValidations
              isCommercialLoan={isCommercialLoan}
              isGreenCardLoan={isGreenCardLoan}
              isNewLoanApplication={isNewLoanApplication}
              isEnhancementApplication={isEnhancementApplication}
            />
          );
          return dummyComponent;
        }
      },
    ]
  },
  {
    name: 'Formik',
    linksDetails: [
      // Section Starts :: RoutedMultistepWizard was file in formik docs -- 
      {
        linkName: 'RoutedMultistepWizard',
        path: '/step',
        linkDescription: 'Only solution that worked',
        exact: true,
        exclude: false,
        component: StepParent
      },
      {
        linkName: 'RoutedMultistepWizard',
        path: '/step/1',
        linkDescription: 'Only solution that worked',
        exact: true,
        exclude: false,
        component: StepParent
      },
      {
        linkName: 'RoutedMultistepWizard',
        path: '/step/2',
        linkDescription: 'Only solution that worked',
        exact: true,
        exclude: false,
        component: StepParent
      },
      // Section Starts :: RoutedMultistepWizard was file in formik docs -- 
      {
        linkName: 'Formik back end errors',
        path: '/formik-backend-errors',
        linkDescription: 'Only solution that worked',
        exact: true,
        exclude: false,
        component: FormikBackEndErrors
      },
      {
        linkName: 'Formik back end error',
        path: '/formik-backend-errors-proper',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: FormikBackEndErrorsProper
      },
      {
        linkName: 'Custom material ui',
        path: '/formik-custom-material-ui',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomFormikMaterilUIPage
      },
      {
        linkName: 'Custom material ui :: Create',
        path: '/formik-custom-material-ui-create',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomFormikMaterialUI
      },
      {
        linkName: 'Custom material ui :: Edit',
        path: '/formik-custom-material-ui-edit/:Id',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: CustomFormikMaterialUI
      },
      {
        linkName: 'formikformarray',
        path: '/formikformarray',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: FormikFullFormFormArrayValidation
      },
      {
        linkName: 'Simple form',
        path: '/formarray',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: FormikFormArrays
      },
      {
        linkName: 'formik :: initialErrors',
        path: '/formik',
        linkDescription: 'initialErrors',
        exact: true,
        exclude: false,
        component: FormikForm
      },
      {
        linkName: 'Radio & checkbox inputs with Formik',
        path: '/formik-custom-normal',
        linkDescription: 'Formik checkbox component setup',
        exact: true,
        exclude: false,
        component: CustomFormikNormal
      },
      {
        linkName: 'formtag',
        path: '/formtag',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: FormikTag
      },
      {
        linkName: 'FormikNormal',
        path: '/formik_normal',
        linkDescription: 'Formik normal html input components',
        exact: true,
        exclude: false,
        component: FormikNormal
      },
      
    ]
  },
  {
    name: 'Javascript',
    linksDetails: [
      {
        linkName: 'Promise',
        path: '/promise',
        linkDescription: null,
        exact: true,
        exclude: false,
        component: Promise
      }
    ]
  },
  // {
  //   name: 'Editable Table',
  //   linksDetails: [
  //     {
  //       linkName: 'React Virtualized table',
  //       path: '/virtualizedtable',
  //       linkDescription: null,
  //       exact: true,
  //       exclude: false,
  //       component: VirtualizedTable
  //     },
  //     {
  //       linkName: 'React Virtualized table with hook form',
  //       path: '/hookfromvirtualized',
  //       linkDescription: null,
  //       exact: true,
  //       exclude: false,
  //       component: VitualizedHookFormTable
  //     },
  //   ]
  // },
];

routePaths.push({
  name: 'General',
  linksDetails: [
    {
      linkName: 'Test Component',
      path: '/test',
      linkDescription: null,
      exact: true,
      exclude: false,
      component: TestComponent
    },
    
    {
      linkName: 'Test Component2',
      path: '/test2',
      linkDescription: null,
      exact: true,
      exclude: false,
      component: TestComponent2
    },
    {
      linkName: 'fast_forms',
      path: '/fast_forms',
      linkDescription: null,
      exact: true,
      exclude: false,
      component: FastForms
    },
    {
      linkName: '4o4',
      path: '*',
      exclude: true,
      component: <p> 404 Not found </p>
    },
  ]
});

export default routePaths;

// Removable

/* 
  jsbarcode
*/