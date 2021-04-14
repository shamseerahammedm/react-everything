import React, { useState, useEffect } from 'react';
import { Email, Item, A, renderEmail } from 'react-html-email';
import image from '../../assets/Capture.PNG';
import Dashboard from '../dashboard/dashboard';
import Grid from '@material-ui/core/Grid';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ckFullCustomized from '../../assets/ckfull/ckeditor';
import { Field, Form, Formik, FormikProps } from 'formik';
import GridContainer from '../GridContainer/GridContainer';
import Input from '../material-ui-full/Input';
import * as Yup from 'yup';
import Box from '@material-ui/core/Box';
import './styles.scss';
// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';


// Template component 
const TemplateComponent = ({ name, detailsNeeded, children }) => {
    return (
        <Email title='link'>
            <Item>
                <img src={image} alt="" />
            </Item>
            <Item>
                {children}
            </Item>
            <Item>
                <img src={image} alt="" />
            </Item>
        </Email>
    );
}

// email composing component , where we bring in the 'Template component' and compose email
const EmailTemplateComponsing = ({ handleModelChange }) => {

    const name = "Shamseer";
    const detailsNeeded = "This is testing of html generation from front end";

    return (
        <>
        </>
    );
}


const test = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html lang="en" xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/><title>link</title></head><body style="width:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%"><table width="100%" height="100%" cellPadding="0" cellSpacing="0" border="0" align="left" valign="top"><tbody><tr><td align="center" valign="top"><table width="600" align="center" cellPadding="0" cellSpacing="0" border="0" valign="top"><tbody><tr><td><img src="/static/media/Capture.22eb2b16.PNG" alt=""/></td></tr><tr><td><div class="App"><div>

    <strong>Welcome to david</strong>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>

</div></div></td></tr><tr><td><img src="/static/media/Capture.22eb2b16.PNG" alt=""/></td></tr></tbody></table></td></tr></tbody></table></body></html>`;


// ----------------------------------------------------------------------------------








// function CKEditorTest() {
//     return (
//         <div className="App">
//             <CKEditor
//                 editor={ClassicEditor}
//                 data={content}
//                 config={{
//                     mediaEmbed: {
//                         previewsInData: true,
//                     },
//                     // removePlugins: [ 'Heading', 'Link' ],
//                     toolbar: ['heading', '|', 'bold', 'Strikethrough', 'Subscript', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',],
//                 }}
//                 disabled={false}
//                 onInit={editor => {
//                     // You can store the "editor" and use when it is needed.
//                     console.log("Editor is ready to use!", editor);
//                 }}
//                 onChange={(event, editor) => {
//                     const data = editor.getData();
//                     console.log(data);
//                 }}
//                 onBlur={editor => {
//                     console.log("Blur.", editor);
//                 }}
//                 onFocus={editor => {
//                     console.log("Focus.", editor);
//                 }}
//             />
//         </div>
//     );
// }



// same data used for serchable select 
const dummySelect = new Array(5).fill().map((selectItem, i) => {
    return { id: i + 1, option: `Country ${i + 1}` }
})
const dummyRadioGroup = new Array(3).fill().map((selectItem, i) => {
    return { id: i + 1, value: `gender${i + 1}`, label: `Gender ${i + 1}` }
})

const mUiSchema = Yup.object().shape({
    gender: Yup
        .string()
        .required('Customer Criteria is required !'),
    fullName: Yup
        .string()
        .required('Full Name is required !'),
    country: Yup
        .number()
        .required('Country is required !'),
    gender: Yup
        .string()
        .required('Gender is required !'),
    termsAndConditions: Yup
        .bool()
        .oneOf([true], 'Please accept terms !'),
    filmsSearchable: Yup
        .object()
        .required('Film is required !')
        .nullable()  // this will allow formik to set value as null, but wont allow form submission in null state because we have required()

});





const MaterialEmail = () => {


    const [emailContent, setEmailContent] = useState(null);

    useEffect(() => {
        const header = `
        <img style="height:150px; width:100%;object-fit:cover;" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/>
        `;

        const content = `
        
            <strong>Welcome to david</strong>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking.</p>
            <img className="test" style="height:150px; width:100%;object-fit:cover;" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
        `;


        const footer = `<img style="height:150px; width:100%;object-fit:cover;" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" alt=""/>`;


        const emailData = {
            header: header,
            content: content,
            footer: footer,
        }

        setEmailContent(emailData);


    }, []);



    useEffect(()=>{
        console.log("im changing");
    },[emailContent])



    const renderEmailComponent = (data) => (
        <Email title='link'>
            {data}
        </Email>
    )
    const htmlMaker = (data) => {
        const renderComponentData = renderEmailComponent(data); // HTML code
        return renderEmail(renderComponentData); // HTML code
    }

    const handleSend = (EmailEditorSection) => {
        const htmlGenerated = htmlMaker(EmailEditorSection);
        console.log(htmlGenerated);
    }



    const toolbarItems = [ 'heading', '|', 'bold', 'Strike', 'Subscript', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote',
    'Undo', 'Redo', 'Underline','RemoveFormat','CopyFormatting','JustifyLeft'];



    const EmailEditorSection = (
        <Box mt={3} className="editorWrapper">
            {
                emailContent &&
                <>
                    <div className="header" dangerouslySetInnerHTML={{ __html: emailContent.header }} />
                    <CKEditor
                        editor={ClassicEditor}
                        data={emailContent.content}
                        config={{
                            mediaEmbed: {
                                previewsInData: true,
                            },
                            removePlugins: [],
                            toolbar: toolbarItems
                        
                 
                            
                        }}
                        disabled={false}
                        onInit={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log("Editor is ready to use!", editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log(data);
                            console.log(setEmailContent);
                            setEmailContent(prevState => {
                                return {
                                    header: prevState.header,
                                    content: data,
                                    footer: prevState.footer,
                                }
                            })
                        }}
                        onBlur={editor => {
                            console.log("Blur.", editor);
                        }}
                        onFocus={editor => {
                            console.log("Focus.", editor);
                        }}
                    />
                    <div className="footer" dangerouslySetInnerHTML={{ __html: emailContent.footer }} />
                </>
            }

        </Box>
    );



    return (
        <Dashboard className="emailPage">
            <h4 className="mt-4">Email view comes like this</h4>
            <Formik
                initialValues={{
                    dateAndTime: null, // make sure to set null if no date needs to be shown on initial load
                    termsAndConditions: false,
                    gender: '', // Make sure that this is string else radio wont be active when clicking
                    genderStandAlone: '', // Make sure that this is string else radio wont be active when clicking
                    country: '',
                    fullName: '',
                    filmsSearchable: dummySelect[4],
                    enableColdCall: true
                }}
                validationSchema={mUiSchema}
                onSubmit={(values, actions) => {
                    console.log('++++++++++++  submitting +++++++++');
                    console.log(values);
                    console.log('++++++++++++  submitting +++++++++');
                    values.filmsSearchable = values.filmsSearchable.id; // will need to take value like this if using searchable select in all forms
                    console.log(values);
                }}>
                {({ values, setFieldValue, handleChange, errors }) => {
                    return (
                        <Grid >
                            
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        component={Input}
                                        name="fullName"
                                        onChange={(e) => {
                                            alert(e.target.value)
                                        }}
                                        type="text"
                                        required
                                        label="Full Name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Field
                                        component={Input}
                                        name="fullName"
                                        onChange={(e) => {
                                            alert(e.target.value)
                                        }}
                                        label="Full Name"
                                        type="text"
                                        required
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Field
                                        component={Input}
                                        name="fullName"
                                        onChange={(e) => {
                                            alert(e.target.value)
                                        }}
                                        label="Full Name"
                                        type="text"
                                        required
                                        size="small"
                                    />
                                </Grid>
                                {EmailEditorSection}
                            </Grid>
                        </Grid>
                    );
                }}
            </Formik>


            <button className="btn btn-primary" onClick={() => handleSend(EmailEditorSection)}>Send</button>
        </Dashboard>
    )
}







export default MaterialEmail;




const EmailTemplateGeneratingComponent = ({ name, detailsNeeded }) => {
    return (
        <Email title='link'>
            <Item>
                Hello "ts"
                <A style={{ paddingLeft: 10 }} href='https://mailtrap.io'>Click me!</A>
            </Item>
            <Item>
                "test"
            </Item>
        </Email>
    );
}







