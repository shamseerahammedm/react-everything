import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { Persist } from '../../../assets/plugins/formikPersist/FormikPersist';
import { Formik, Form, Field, FieldArray, FastField } from 'formik';
import Grid from '@material-ui/core/Grid';

import Table from '../../Table/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';


import Input from '../../Input/Input';
import SearchableSelect from '../../SearchableSelect/SearchableSelect';
import SingleSelect from '../../SingleSelect/SingleSelect';
import CheckBox from '../../CheckBox/CheckBox';
import DatePicker from '../../DatePicker/DatePicker';
import MultiSelect from '../../MultiSelect/MultiSelect';

import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



import './SurveyAssetsSection.scss';
import * as Yup from 'yup';

// Section Starts ::  -- 


import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { getError, getTrimmedString, toLowercaseAndReplaceSpaces } from '../../../utils/utils';


// Section Starts ::  -- 








// this value is latest value taken from form reducer
const dummyDataAssetsData = 
{
	"id": "098",
	"client_id": 7890,
	"client": "{\"client_id\": \"7890\", \"client_name\": \"xor\", \"client_email\": \"test@testi1ng.com\"}",
	"advisor_id": 7897,
	"category_id": 9,
	"category": "{\"category_id\": \"9\", \"category_name\": \"Assets\"}",
	"data": [
		{
			"subcategory_name": "Assets",
			"subcategory_data": [
				{
					"label_parent": null,
					"label": "Assets",
					"field_name": "assets_assets",
					"is_mandatory": true,
					"search_api_url": null,
					"answer": null,
					"answer_parent": null,
					"response_required": false,
					"value_type": null,
					"has_sublabels": true,
					"component_type": "SingleSelect",
					"label_choice": [],
					"max_length": 10,
					"min_length": 0,
					"is_repeat": true,
					"sub_labels": [  // repeats here
						{
							"index": 0,
							"sub_label_data": [
								{
									"label": "Owner",
									"field_name": "assets_owner",
									"is_mandatory": true,
									"search_api_url": null,
									"answer": "",
									"answer_parent": null,
									"value_type": "1",
									"component_type": "SingleSelect",
									"has_local_data": true,
									"label_choice": [],  // since has_local_data is true no need of label choice
									"max_length": 10,
									"min_length": 0
								},
								{
									"label": "Type of asset",
									"field_name": "assets_type_of_asset", // assets_assets_assets_type_of_asset_0
									"is_mandatory": true,
									"search_api_url": null,
									"answer": '',
									"answer_parent": null,
									"value_type": "6",
									"component_type": "SingleSelect",
									"label_choice": [
										{
											"id": "cash",
											"option": "Cash"
										},
										{
											"id": "Cash ISA",
											"option": "Cash ISA"
										},
										{
											"id": "Stocks & Shared ISA",
											"option": "Stocks & Shared ISA"
										},
										{
											"id": "investment_account",
											"option": "Investment Account"
										},
										{
											"id": "stock",
											"option": "Stock"
										},
										{
											"id": "property",
											"option": "Property"
										},
										{
											"id": "private_investment",
											"option": "Private Investment"
										},
										{
											"id": "other",
											"option": "Other"
										},
									],
									"max_length": 10,
									"min_length": 0,
									"has_sublabels": true,
									"sub_labels": [  // newly added structure starts
										{
											"index": 0,
											"sub_label_data": [
												{
													"label": "Current tax per year?",
													"field_name": "current_tax_per_year_",
													"is_mandatory": true,
													"search_api_url": null,
													"answer": null,
													"answer_parent": ['cash', 'cash_isa', 'stocks_&_shared_isa'], // --> ['cash_isa, stocks_&_shared_isa']
													"value_type": "2",
													"component_type": "Input",
													"label_choice": [],
													"max_length": 10,
													"min_length": 0
												},
												{
													"label": "Mortgage details?",
													"field_name": "mortgage_details",
													"is_mandatory": true,
													"search_api_url": null,
													"answer": null,
													"answer_parent": ['property'],  //--> ['property']
													"value_type": "1",
													"component_type": "Input",
													"label_choice": [],
													"max_length": 10,
                                                    "min_length": 0,
                                                    
												},
											]
										}
									]
								},
								{
									"label": "Amount",
									"field_name": "assets_amount",
									"is_mandatory": true,
									"search_api_url": null,
									"answer": null,
									"answer_parent": null,
									"value_type": "2",
									"component_type": "Input",
									"has_local_data": true,
									"label_choice": [],
									"max_length": 10,
									"min_length": 0
								},
								{
									"label": "Notes",
									"field_name": "assets_notes",
									"is_mandatory": true,
									"search_api_url": null,
									"answer": '',
									"answer_parent": null,
									"value_type": "1",
									"component_type": "TextArea",
									"has_local_data": true,
									"label_choice": [],
									"max_length": 10,
									"min_length": 0
								},
								{
									"label": "Are you willing to look at including any of these in your financial planning?",
									"field_name": "assets_are_you_willing_to_look_at_including_any_of_these_in_your_financial_planning_",
									"is_mandatory": true,
									"search_api_url": null,
									"answer": '',
									"answer_parent": null,
									"value_type": "6",
									"component_type": "SingleSelect",
									"has_local_data": true,
									"label_choice": [
										{
											"id": "yes",
											"option": "Yes"
										},
										{
											"id": "no",
											"option": "No"
										}
									],
									"max_length": 10,
									"min_length": 0,
									"has_sublabels": true,
									"sub_labels": [  // newly added structure starts
										{

											"index": 0,
											"sub_label_data": [
												{
													"label": "How much?",
													"field_name": "how_much",
													"is_mandatory": true,
													"search_api_url": null,
													"answer": null,
													"answer_parent": ['yes'], // --> ['yes']
													"value_type": "2",
													"component_type": "Input",
													"label_choice": [],
													"max_length": 10,
													"min_length": 0
												},
												{
													"label": "Note",
													"field_name": "note",
													"is_mandatory": true,
													"search_api_url": null,
													"answer": null,
													"answer_parent": ['yes'],  // --> ['yes']
													"value_type": "1",
													"component_type": "Input",
													"label_choice": [],
													"max_length": 10,
													"min_length": 0
												},
											]
										}
									]
								},
							]
						},
                        
					]
				},

			]
		},
	]
}











const getValidationRule = (fieldItem) => {
    let pattern;
    let error;
    switch (fieldItem.value_type)
    {
        case "1": //Alphabet
            pattern = new RegExp("[A-Za-z ]", "i");
            error = { message: "Please enter a valid answer (Alphabets only)" };
            break;
        case "2": //Number
            pattern = new RegExp("[0-9]");
            error = { message: "Please enter a valid answer (Number only)" };
            break;
        case "3": //Alpha numeric
            pattern = new RegExp("[A-Za-z0-9._%+- ]", "i");
            error = { message: "Please enter a valid answer (Alphanumeric characters" };
            break;
        case "4": //Email
            pattern = new RegExp("[a-z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4}", "i");
            error = { message: "Please enter a valid email" };
            break;
        case "5": //Decimal
            pattern = new RegExp("[0-9.]", "i");
            error = { message: "Please enter a valid number (Number can have decimal point)" };
            break;
        default:
            error = '';
            break;
    }

    return Yup.string()
        .matches(pattern, error)
        .min(fieldItem.min_length, 'Must have minimum ' + fieldItem.min_length + ' characters')
        .max(fieldItem.max_length, 'Maximum characters upto ' + fieldItem.max_length);
}



const SurveyAssetsSection = ({
    isAssetsModalOpen,
    setIsAssetsModalOpen
}) => {

    const dispatch = useDispatch();
    // Section Starts :: dummy section remove when this sets when opening modal -- 
    useEffect(() => {
        dispatch({ type: 'SET_ASSETS_SECTION_DATA' })
    }, [])
    // Section Starts :: dummy section remove when this sets when opening modal -- 

    const assetsSectionData = useSelector(state => state.survey.assetsSectionData);
    // console.log('assetsSectionData',assetsSectionData);





    const validateField = useCallback((value, fieldItem) => {
        let error;
        let pattern;

        if (value && fieldItem.value_type)
        {

            switch (fieldItem.value_type)
            {
                case "1": //Alphabet
                    console.log('fieldItem', fieldItem.value_type);
                    pattern = new RegExp("[A-Za-z ]{" + fieldItem.min_length + "," + fieldItem.max_length + "}", "i");
                    if (!pattern.test(value))
                    {
                        error = "Please enter a valid answer (Alphabets only)";
                    }
                    break;
                case "2": //Number
                    pattern = new RegExp("^[0-9]{" + fieldItem.min_length + "," + fieldItem.max_length + "}$");
                    if (!pattern.test(value))
                    {
                        error = "Please enter a valid answer (Number with min: " + fieldItem.min_length + ", upto " + fieldItem.max_length + " length)";
                    }
                    break;
                case "3": //Alpha numeric
                    pattern = new RegExp("[A-Za-z0-9._%+- ]{" + fieldItem.min_length + "," + fieldItem.max_length + "}", "i");
                    if (!pattern.test(value))
                    {
                        error = "Please enter a valid answer (Alphanumeric with min: " + fieldItem.min_length + ", upto " + fieldItem.max_length + " characters)";
                    }
                    break;
                case "4": //Email
                    pattern = new RegExp("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5})$", "i");
                    if (!pattern.test(value))
                    {
                        error = "Please enter a valid email";
                    }
                    break;
                case "5": //Decimal
                    pattern = new RegExp("[0-9.]{" + fieldItem.min_length + "," + fieldItem.max_length + "}", "i");
                    if (!pattern.test(value))
                    {
                        error = "Please enter a valid number (Number can have decimal point)";
                    }
                    break;
                default:
                    error = '';
                    break;
            }

        }
        // else
        // {
        //     switch (fieldItem.value_type)
        //     {
        //         case "6": //forselectbox
        //             if (value == "")
        //             {
        //                 error = "Please select an option";
        //             }
        //             break;
        //         default:
        //             error = '';
        //             break;
        //     }
        // }
        return error;
    }, [])




    const getFieldFromQuestion = useCallback((fieldItem, fieldName = "", customOnChangeCallback = null) => {


        // function validateEmail(value, fieldItem) {
        //     let error;
        //     if (value === 'admin')
        //     {
        //         error = 'Nice try!';
        //     }
        //     return error;
        // }


        return (
            // <Grid
            //     item
            //     xs={`${fieldName ? 6 : 12}`}
            //     className={` ${fieldName ? 'subQuestion' : 'mainQuestion'}
            //     ${fieldName ? ((!fieldItem.answer_parent || parentValue == fieldItem.answer_parent) ? '' : 'hideItem') : ''}`}
            //     id={fieldName ? fieldName : ""}
            // >
            <>



                {
                    fieldItem.component_type === 'Input'
                    &&
                    <FastField
                        component={Input}
                        name={fieldName ? fieldName : fieldItem.field_name}
                        label={fieldItem.label}
                        className="answerParentHasData"
                        validate={(value) => validateField(value, fieldItem)}
                        onChange={()=>console.log('fieldName',fieldName)}
                    />
                }
                {(fieldItem.component_type === 'SearchableSelect') &&
                    <FastField
                        component={SearchableSelect}
                        name={fieldName ? fieldName : fieldItem.field_name}
                        label={fieldItem.label}
                        className=""
                        options={fieldItem.label_choice}
                        onInputChange={(e, value, reason) => {
                            //dispatch(fetchCompaniesAsync(value));
                        }}
                        //loading={isLoading}
                        optionLabel="option"
                        clearOnBlur
                    />
                }


                {
                    fieldItem.component_type === 'SingleSelect'
                    &&
                    <FastField
                        component={SingleSelectForAssets}
                        placeHolder={getTrimmedString(fieldItem.label, 30, true)}
                        name={fieldName ? fieldName : fieldItem.field_name}
                        label={getTrimmedString(fieldItem.label, 30, true)}
                        className=""
                        options={fieldItem.label_choice}
                        optionLabel="option"
                        onChange={(event) => {
                            console.log('selecy',fieldName);
                            if (fieldItem.sub_labels && fieldItem.sub_labels.length > 0)
                            {
                                if (customOnChangeCallback)
                                {
                                    customOnChangeCallback()
                                }
                            }
                        }}
                        validate={(value) => validateField(value, fieldItem)}
                    />
                }








                {(fieldItem.component_type === 'Date') &&
                    <FastField
                        component={DatePicker}
                        name={fieldName ? fieldName : fieldItem.field_name}
                        label={fieldItem.label}
                        className=""
                        icon={false}
                        disablePast={false}
                        disableFuture={false}
                        clearable={true}
                    />
                }
                {(fieldItem.component_type === 'TextArea') &&
                    <FastField
                        component={Input}
                        name={fieldName ? fieldName : fieldItem.field_name}
                        label={fieldItem.label}
                        className=""
                        multiline={true}
                        validate={(value) => validateField(value, fieldItem)}
                    />
                }
                {(fieldItem.component_type === 'Text&Checkbox') &&
                    <>
                        <FastField
                            component={Input}
                            name={fieldName ? fieldName : fieldItem.field_name}
                            label={fieldItem.label}
                            className=""
                        />
                        <FastField
                            component={CheckBox}
                            name={`${fieldName ? fieldName : fieldItem.field_name}_text`}
                            label="Unknown"
                            //className={`${fieldName ? fieldName : fieldItem.field_name}_check`}
                            icon={false}
                            checkBoxType="single"
                        // onChange={(event) => handleCheckUnknown(event, fieldName ? fieldName : fieldItem.field_name)}
                        />
                    </>
                }
                {(fieldItem.component_type === 'Select&Checkbox') &&
                    <>
                        <FastField
                            component={SingleSelect}
                            name={fieldName ? fieldName : fieldItem.field_name}
                            label={fieldItem.label}
                            className=""
                            options={fieldItem.label_choice}
                            optionLabel="option"
                            onChange={(event) => {
                                if (fieldItem.sub_labels && fieldItem.sub_labels.length > 0)
                                {
                                    // checkChildVisibility(event)
                                }
                            }}
                        />
                        <FastField
                            component={CheckBox}
                            name={`${fieldName ? fieldName : fieldItem.field_name}_select`}
                            label="Unknown"
                            //className={`${fieldName ? fieldName : fieldItem.field_name}_check`}
                            icon={false}
                            checkBoxType="single"
                        // onChange={(event) => handleCheckUnknown(event, fieldName ? fieldName : fieldItem.field_name)}
                        />
                    </>
                }
                {(fieldItem.component_type === 'MultiSelect') &&
                    <FastField
                        component={MultiSelect}
                        name={fieldName ? fieldName : fieldItem.field_name}
                        label={fieldItem.label}
                        className=""
                        filterSelectedOptions={true}
                        getOptionsSelectedBasedOnOptionLabel={true}
                        //required
                        onInputChange={(e, value, reason) => {
                            //dispatch(searchMailRecipientsAsync(value));
                        }}
                        options={fieldItem.label_choice}
                        optionLabel="option"
                        //loading={isSearchMailReceiptLoading}
                        creatable
                        placeholder={false}
                    // clearOnBlur
                    />
                }
            </>
            // </Grid>
        )
    }, [])


    return (
        <Modal open={isAssetsModalOpen} handleClose={() => setIsAssetsModalOpen(false)} size="lg" className="assetsModal">
            <DialogContent>
                {
                    assetsSectionData
                    &&
                    <Formik
                        initialValues={assetsSectionData}
                        // validationSchema={validationSchema}
                        // enableReinitialize={true}
                        onSubmit={(values) => {
                            console.log('values', values);
                        }}
                    // validateOnChange={false}
                    // validateOnBlur={false}
                    >
                        {({ values, setValues, setFieldValue }) => {
                            let assetArrayHelper = null;
                            let assetArrayPushIndex = null;
                            return (
                                <Form>
                                
                                    <div className="assetsWrapper">
                                        <h1 className="customHead addAssetsHead" >Add Asset Details</h1>
                                        <Button 
                                            onClick={() => {
                                                if(assetArrayHelper && assetArrayPushIndex)
                                                {
                                                    assetArrayHelper.push(getStructureToPush(assetArrayPushIndex))
                                                }
                                            }} 
                                            type="button" 
                                            buttonType="iconButton" 
                                            icon={AddCircleOutlineIcon} 
                                            className="addButton" 
                                        />
                                    </div>

                                    {/* <Button onClick={() => alert(1)} color="primary" bgColor="secondary" width='150px' className="noStyleButton">
                                    Add Assets
                                </Button> */}

                                    <Table>
                                        <TableHead className="tableHead">
                                            <TableRow>
                                                <TableCell className="customTh assetsTh ownerTH" align="left">Owner</TableCell>
                                                <TableCell className="customTh assetsTh typeOfAssetTh" align="left">Type of Asset</TableCell>
                                                <TableCell className="customTh assetsTh amountTh" align="left">Amount</TableCell>
                                                <TableCell className="customTh assetsTh notesTh" align="left">Notes</TableCell>
                                                <TableCell className="customTh assetsTh willingTh" align="left">Are you willing to look at including any of these in your financial planning?</TableCell>
                                                <TableCell className="customTh assetsTh actionsTh" align="left">Actions</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <FieldArray
                                            name="data[0].subcategory_data[0].sub_labels"
                                            render={arrayHelpers => {

                                                assetArrayHelper = arrayHelpers;
                                                let subLabelsPath = values.data[0].subcategory_data[0].sub_labels;
                                                return (
                                                    <TableBody>
                                                        {/* {console.log(values.data[0].subcategory_data[0].sub_labels)} */}
                                                        {
                                                            subLabelsPath.map((subQuestions, subQuestionIndex) => {
                                                                let thirdLevelFieldNameList = [];
                                                                // let thirdLevelFieldNameList = {};
                                                                return (
                                                                    // data[0].subcategory_data[0].sub_labels[0].answer
                                                                    // data[0].subcategory_data[0].sub_labels[0].sub_label_data[0].answer

                                                                    <TableRow>
                                                                        {/* {console.log('field', values.data[0].subcategory_data[0].sub_labels[0].sub_label_data[0].answer)}
																	{console.log(`${index}`,values.data[0].subcategory_data[0].sub_labels[index].sub_label_data[0].answer)} */}
                                                                        {
                                                                            subQuestions.sub_label_data.map((secondLevelQuestions, secondLevelIndex) => {
                                                                                // console.log('subLables',secondLevelQuestions);

                                                                                const answerOfSelect = values.data[0].subcategory_data[0].sub_labels[subQuestionIndex].sub_label_data[secondLevelIndex].answer;
                                                                                const secondLevelFieldName = `data[0].subcategory_data[0].sub_labels[${subQuestionIndex}].sub_label_data[${secondLevelIndex}].answer`;
                                                                          
                                                                                return (
                                                                                    <TableCell className="customTd">
                                                                                        {getFieldFromQuestion(secondLevelQuestions, secondLevelFieldName,()=>{
                                                                                            // console.log('thirdLevelFieldNameList',thirdLevelFieldNameList);
                                                                                            thirdLevelFieldNameList.forEach(item => setFieldValue(item,''))
                                                                                            // setValues(thirdLevelFieldNameList)
                                                                                        })}
                                                                                        {/* {console.log('the anseer', answerOfSelect)} */}
                                                                                        {
                                                                                            // is repeat is false 
                                                                                            // given name : data[0].subcategory_data[0].sub_labels[${subQuestionIndex}].sub_label_data[${secondLevelIndex}]||.sub_labels[0].sub_label_data[${thirdItemIndex}].answer
                                                                                            //data[0].subcategory_data[0].sub_labels[0].sub_label_data[1] || .sub_labels[0].sub_label_data[0].answer

                                                                                            secondLevelQuestions.sub_labels && secondLevelQuestions.sub_labels[0].sub_label_data.map((thirdLevelQuestions, thirdItemIndex) => {
                                                                                                const thirdLevelFieldName = `data[0].subcategory_data[0].sub_labels[${subQuestionIndex}].sub_label_data[${secondLevelIndex}].sub_labels[0].sub_label_data[${thirdItemIndex}].answer`;
                                                                                                thirdLevelFieldNameList.push(thirdLevelFieldName)
                                                                                                assetArrayPushIndex = thirdItemIndex; // last index added here
                                                                                                // thirdLevelFieldNameList[thirdLevelFieldName] = ''
                                                                                                // console.log("thirdLevelQuestions.answer_parent",thirdLevelQuestions.answer_parent)

                                                                                                return (
                                                                                                    <>
                                                                                                        {
                                                                                                            (thirdLevelQuestions.answer_parent !== null && thirdLevelQuestions.answer_parent.includes(answerOfSelect)) && getFieldFromQuestion(thirdLevelQuestions, thirdLevelFieldName)
                                                                                                        }
                                                                                                        {
                                                                                                            thirdLevelQuestions.answer_parent == null && getFieldFromQuestion(thirdLevelQuestions, thirdLevelFieldName)
                                                                                                        }
                                                                                                    </>

                                                                                                )
                                                                                            })

                                                                                        }
                                                                                    </TableCell>
                                                                                )

                                                                            })
                                                                        }



                                                                        <TableCell className="actionsCell">
                                                                            <div className="buttonWrapper">
                                                                                {/* <Button onClick={() => arrayHelpers.push(getStructureToPush(subQuestionIndex))} type="button" buttonType="iconButton" icon={AddCircleIcon} className="actionButton addButton" /> */}
                                                                                <Button onClick={() => arrayHelpers.remove(subQuestionIndex)} type="button" buttonType="iconButton" icon={RemoveCircleIcon} className="actionButton removeButton" />
                                                                            </div>
                                                                        </TableCell>
                                                                    </TableRow>




                                                                )
                                                            })
                                                        }
                                                    </TableBody>
                                                )
                                            }}
                                        />


                                    </Table>
                                    <Button color="primary" bgColor="secondary" width='150px' className="noStyleButton" type="submit">
                                        save
                                </Button>
                                    <Grid item xs={6}>
                                        <pre>{JSON.stringify(values, null, 2)}</pre>
                                    </Grid>
                                    {/* <Persist name="assetsSection" /> */}
                                </Form>

                            )
                        }
                        }
                    </Formik>
                }
            </DialogContent>
        </Modal>
    )
}

export default SurveyAssetsSection;





{/* 
    <DialogActions className="modalFooter">
        <Button onClick={() => setIsAssetsModalOpen(false)} color="primary" autoFocus bgColor="secondary" width='150px' >
            Ok
        </Button>
    </DialogActions>      
*/}




const getStructureToPush = (index) => {
    return {
        "index": index ? index+1 : 1, // handling initial case when index is 0
        "sub_label_data": [
            {
                "label": "Owner",
                "field_name": "assets_owner",
                "is_mandatory": true,
                "search_api_url": null,
                "answer": "",
                "answer_parent": null,
                "value_type": "1",
                "component_type": "SingleSelect",
                "has_local_data": true,
                "label_choice": [],  // since has_local_data is true no need of label choice
                "max_length": 10,
                "min_length": 0
            },
            {
                "label": "Type of asset",
                "field_name": "assets_type_of_asset", // assets_assets_assets_type_of_asset_0
                "is_mandatory": true,
                "search_api_url": null,
                "answer": '',
                "answer_parent": null,
                "value_type": null,
                "component_type": "SingleSelect",
                "label_choice": [
                    {
                        "id": "cash",
                        "option": "Cash"
                    },
                    {
                        "id": "Cash ISA",
                        "option": "Cash ISA"
                    },
                    {
                        "id": "Stocks & Shared ISA",
                        "option": "Stocks & Shared ISA"
                    },
                    {
                        "id": "investment_account",
                        "option": "Investment Account"
                    },
                    {
                        "id": "stock",
                        "option": "Stock"
                    },
                    {
                        "id": "property",
                        "option": "Property"
                    },
                    {
                        "id": "private_investment",
                        "option": "Private Investment"
                    },
                    {
                        "id": "other",
                        "option": "Other"
                    },
                ],
                "max_length": 10,
                "min_length": 0,
                "has_sublabels": true,
                "sub_labels": [  // newly added structure starts
                    {
                        "index": 0,
                        "sub_label_data": [
                            {
                                "label": "Current tax per year?",
                                "field_name": "current_tax_per_year_",
                                "is_mandatory": true,
                                "search_api_url": null,
                                "answer": "",
                                "answer_parent": ['cash', 'cash_isa', 'stocks_&_shared_isa'], // --> ['cash_isa, stocks_&_shared_isa']
                                "value_type": "2",
                                "component_type": "Input",
                                "label_choice": [],
                                "max_length": 10,
                                "min_length": 0
                            },
                            {
                                "label": "Mortgage details?",
                                "field_name": "mortgage_details",
                                "is_mandatory": true,
                                "search_api_url": null,
                                "answer": "",
                                "answer_parent": ['property'],  //--> ['property']
                                "value_type": "1",
                                "component_type": "Input",
                                "label_choice": [],
                                "max_length": 10,
                                "min_length": 0,

                            },
                        ]
                    }
                ]
            },
            {
                "label": "Amount",
                "field_name": "assets_amount",
                "is_mandatory": true,
                "search_api_url": null,
                "answer": "",
                "answer_parent": null,
                "value_type": "2",
                "component_type": "Input",
                "has_local_data": true,
                "label_choice": [],
                "max_length": 10,
                "min_length": 0
            },
            {
                "label": "Notes",
                "field_name": "assets_notes",
                "is_mandatory": true,
                "search_api_url": null,
                "answer": '',
                "answer_parent": null,
                "value_type": "1",
                "component_type": "TextArea",
                "has_local_data": true,
                "label_choice": [],
                "max_length": 10,
                "min_length": 0
            },
            {
                "label": "Are you willing to look at including any of these in your financial planning?",
                "field_name": "assets_are_you_willing_to_look_at_including_any_of_these_in_your_financial_planning_",
                "is_mandatory": true,
                "search_api_url": null,
                "answer": '',
                "answer_parent": null,
                "value_type": null,
                "component_type": "SingleSelect",
                "has_local_data": true,
                "label_choice": [
                    {
                        "id": "yes",
                        "option": "Yes"
                    },
                    {
                        "id": "no",
                        "option": "No"
                    }
                ],
                "max_length": 10,
                "min_length": 0,
                "has_sublabels": true,
                "sub_labels": [  // newly added structure starts
                    {

                        "index": 0,
                        "sub_label_data": [
                            {
                                "label": "How much?",
                                "field_name": "how_much",
                                "is_mandatory": true,
                                "search_api_url": null,
                                "answer": "",
                                "answer_parent": ['yes'], // --> ['yes']
                                "value_type": "2",
                                "component_type": "Input",
                                "label_choice": [],
                                "max_length": 10,
                                "min_length": 0
                            },
                            {
                                "label": "Note",
                                "field_name": "note",
                                "is_mandatory": true,
                                "search_api_url": null,
                                "answer": "",
                                "answer_parent": ['yes'],  // --> ['yes']
                                "value_type": "1",
                                "component_type": "Input",
                                "label_choice": [],
                                "max_length": 10,
                                "min_length": 0
                            },
                        ]
                    }
                ]
            },
        ]
    }
}





const greyBorderColor = '#eeeeee';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        '& label': {
            background: 'white'
        },
        '& label.Mui-focused': {
            color: theme.palette.secondary.main
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main
            },
        },
    },
    labelClass: {
        '&.Mui-focused': {
            color: theme.palette.secondary.main
        },
    },
    focused: {},
    notchedOutline: {}
}));


const SingleSelectForAssets = ({
    field: { name, value, ...otherFieldProps },
    form: { touched, errors, values, setFieldValue, status },
    onChange,
    label,
    placeHolder,
    required,
    variant = "outlined",
    options,
    size = "small",
    className,
    optionLabel = "option",
    disabled = false,
    disablePlaceholder = false,
    ...otherProps
}) => {

    const errorText = getError(name, { touched, status, errors });
    const isError = (errorText) ? true : false;


    const shouldLabelShrink = label ? true : false;
    const isRequired = required ? true : false;

    // This is for reducing select size as there is no explicit size prop in material ui for select component
    let margin;
    if (size === 'small')
    {
        margin = "dense"
    }
    const classes = useStyles();

    return (
        <FormControl variant={variant} error={isError} margin={margin} className={classes.root}>
            <InputLabel className={classes.labelClass} required={isRequired} shrink={shouldLabelShrink} id={label}>{label}</InputLabel>
            <Select
                MenuProps={{
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    getContentAnchorEl: null
                }}
                disabled={disabled}
                fullWidth
                size={size}
                id={label}
                labelId={label}
                value={value}
                displayEmpty
                name={name}
                label={label}
                displayEmpty
                {...otherFieldProps} // dont change prop order, formik change is overrided by onChange below this
                onChange={(e, index, value) => {
                    console.log('e.target.value', e.target.value);
                    setFieldValue(name, e.target.value);
                    // Running the custom on change function if passed
                    if (onChange)
                    {
                        onChange(e);
                    }
                }}
                {...otherProps}
                className={`
                    ${className}
                    ${classes.root}
                `}
            >

                <MenuItem value="" disabled={disablePlaceholder}>{placeHolder}</MenuItem>
                {

                    options && options.map((selectItem, i) => {
                        // { console.log('toLowercaseAndRemoveSpaces(selectItem.id)', toLowercaseAndReplaceSpaces(selectItem.id, '_')) }
                        return <MenuItem key={i} value={toLowercaseAndReplaceSpaces(selectItem.id, '_')}>{selectItem[optionLabel]}</MenuItem>
                    })
                }
            </Select>
            {
                isError && <FormHelperText>{errorText}</FormHelperText>
            }
        </FormControl>
    )
}





// const validationSchema = useMemo(()=>{
//     let schemaObj = {};
//     if(assetsSectionData !== null)
//     {


//         assetsSectionData.data.forEach((subcategory) => {

//             if (subcategory.subcategory_data && subcategory.subcategory_data.length > 0)
//             {
//                 subcategory.subcategory_data.forEach((questions) => {
//                     console.log('questions',questions);
//                     if (questions.has_sublabels)
//                     {
//                         if (questions.sub_labels.length > 0)
//                         {
//                             questions.sub_labels.forEach((subLabelData) => {

//                                 if (subLabelData.sub_label_data.length > 0)
//                                 {

//                                     subLabelData.sub_label_data.forEach((subQuestions) => {
//                                         console.log('subQuestions',subQuestions);
//                                         if (subQuestions.response_required)
//                                         {

//                                             schemaObj[subQuestions.field_name] = getValidationRule(subQuestions)
//                                         }
//                                     })
//                                 }
//                             })
//                         }
//                     } else
//                     {
//                         schemaObj[questions.field_name] = getValidationRule(questions)
//                     }
//                 })
//             }
//         })

//         console.log('schemaObj',schemaObj);
//         return schemaObj; 
//     }

// },[assetsSectionData])


