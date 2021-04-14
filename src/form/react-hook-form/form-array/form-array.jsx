// import React from "react";
// import { useForm, useFieldArray, Controller } from "react-hook-form";
// import './style.scss';
// import { isEmpty } from 'lodash';
// import { Accordion, AccordionDetails, AccordionSummary, Grid, makeStyles, Typography } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// // const defaultValues = {
// //     test: [
// //         {
// //             name: "useFieldArray1",
// //             nestedArray: [{ field1: "field1", field2: "field2" }]
// //         },
// //         {
// //             name: "useFieldArray2",
// //             nestedArray: [{ field1: "field1", field2: "field2" }]
// //         }
// //     ]
// // };
// const newDefaultValues = {
//     master: [
//         {
//             "id_no": 3235,
//             "client_id": 1114,
//             "client": "{\"client_id\": \"1114\", \"client_name\": \"Testing\", \"client_email\": \"testdfg@test.com\"}",
//             "advisor_id": 513,
//             "category_id": 21,
//             "category": "{\"category_id\": \"21\", \"category_name\": \"Net Worth Summary\", \"category_slug_name\": \"net_worth_summary_21\"}",
//             "data": [
//                 {
//                     "subcategory_name": "Assets",
//                     "subcategory_slug_name": "assets_24",
//                     "subcategory_data": [
//                         {
//                             "label_id": 123,
//                             "label_parent": null,
//                             "label": "Add assets",
//                             "label_slug": "add_assets_123",
//                             "field_name": "assets_add_assets_123",
//                             "is_mandatory": false,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": false,
//                             "value_type": "No validation",
//                             "has_sublabels": true,
//                             "component_type": "Input",
//                             "label_choice": [],
//                             "max_length": 300,
//                             "min_length": 0,
//                             "is_repeat": true,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": [
//                                 {
//                                     "index": 0,
//                                     "sub_label_data": [
//                                         {
//                                             "label_id": 125,
//                                             "label": "Owner",
//                                             "label_slug": "owner_125",
//                                             "field_name": "assets_owner_125",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "No validation",
//                                             "response_required": true,
//                                             "component_type": "SingleSelect",
//                                             "label_choice": [],
//                                             "max_length": 300,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": true,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         },
//                                         {
//                                             "label_id": 75,
//                                             "label": "Type of asset",
//                                             "label_slug": "type_of_asset_75",
//                                             "field_name": "assets_type_of_asset_75",
//                                             "is_mandatory": true,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "No validation",
//                                             "response_required": true,
//                                             "component_type": "SingleSelect",
//                                             "label_choice": [
//                                                 {
//                                                     "id_no": "Cash",
//                                                     "option": "Cash"
//                                                 },
//                                                 {
//                                                     "id_no": "Cash ISA",
//                                                     "option": "Cash ISA"
//                                                 },
//                                                 {
//                                                     "id_no": "Stocks and Shares ISA",
//                                                     "option": "Stocks and Shares ISA"
//                                                 },
//                                                 {
//                                                     "id_no": "Investment Account",
//                                                     "option": "Investment Account"
//                                                 },
//                                                 {
//                                                     "id_no": "Stock",
//                                                     "option": "Stock"
//                                                 },
//                                                 {
//                                                     "id_no": "Property",
//                                                     "option": "Property"
//                                                 },
//                                                 {
//                                                     "id_no": "Private Investment",
//                                                     "option": "Private Investment"
//                                                 },
//                                                 {
//                                                     "id_no": "Other",
//                                                     "option": "Other"
//                                                 }
//                                             ],
//                                             "max_length": 20,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": true,
//                                             "is_repeat": false,
//                                             "sub_labels": [
//                                                 {
//                                                     "index": 0,
//                                                     "sub_label_data": [
//                                                         {
//                                                             "label_id": 76,
//                                                             "label": "Amount used this tax year (£)",
//                                                             "label_slug": "amount_used_this_tax_year_76",
//                                                             "field_name": "assets_amount_used_this_tax_year_____76",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Cash ISA",
//                                                                 "Stocks and Shares ISA"
//                                                             ],
//                                                             "value_type": "Price",
//                                                             "component_type": "currencyField",
//                                                             "label_choice": [],
//                                                             "max_length": 20,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         }
//                                                     ]
//                                                 }
//                                             ]
//                                         },
//                                         {
//                                             "label_id": 128,
//                                             "label": "Amount (£)",
//                                             "label_slug": "amount_128",
//                                             "field_name": "assets_amount_____128",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "Price",
//                                             "response_required": true,
//                                             "component_type": "currencyField",
//                                             "label_choice": [],
//                                             "max_length": 20,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         },
//                                         {
//                                             "label_id": 129,
//                                             "label": "Notes",
//                                             "label_slug": "notes_129",
//                                             "field_name": "assets_notes_129",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "No validation",
//                                             "response_required": true,
//                                             "component_type": "TextArea",
//                                             "label_choice": [],
//                                             "max_length": 300,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         },
//                                         {
//                                             "label_id": 78,
//                                             "label": "Are you willing to look at including any of the above in your financial planning?",
//                                             "label_slug": "are_you_willing_to_look_at_including_any_of_the_above_in_your_financial_planning__78",
//                                             "field_name": "assets_are_you_willing_to_look_at_including_any_of_the_above_in_your_financial_planning__78",
//                                             "is_mandatory": true,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "Alphabet",
//                                             "response_required": true,
//                                             "component_type": "SingleSelect",
//                                             "label_choice": [
//                                                 {
//                                                     "id_no": "Yes",
//                                                     "option": "Yes"
//                                                 },
//                                                 {
//                                                     "id_no": "No",
//                                                     "option": "No"
//                                                 }
//                                             ],
//                                             "max_length": 20,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": true,
//                                             "is_repeat": false,
//                                             "sub_labels": [
//                                                 {
//                                                     "index": 0,
//                                                     "sub_label_data": [
//                                                         {
//                                                             "label_id": 126,
//                                                             "label": "How much? (£)",
//                                                             "label_slug": "how_much__126",
//                                                             "field_name": "assets_how_much______126",
//                                                             "is_mandatory": false,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "Price",
//                                                             "component_type": "currencyField",
//                                                             "label_choice": [],
//                                                             "max_length": 20,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 127,
//                                                             "label": "Assets to consider",
//                                                             "label_slug": "assets_to_consider_127",
//                                                             "field_name": "assets_assets_to_consider_127",
//                                                             "is_mandatory": false,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "No validation",
//                                                             "component_type": "TextArea",
//                                                             "label_choice": [],
//                                                             "max_length": 300,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         }
//                                                     ]
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             "label_id": 64,
//                             "label_parent": null,
//                             "label": "Pension",
//                             "label_slug": "pension_64",
//                             "field_name": "previous_employment_pension_64",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alphabet",
//                             "has_sublabels": true,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Yes",
//                                     "option": "Yes"
//                                 },
//                                 {
//                                     "id": "No",
//                                     "option": "No"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": [
//                                 {
//                                     "index": 0,
//                                     "sub_label_data": [
//                                         {
//                                             "label_id": 145,
//                                             "label": "Value? Provider? Type? Funds?",
//                                             "label_slug": "value__provider__type__funds__145",
//                                             "field_name": "previous_employment_value__provider__type__funds__145",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [
//                                                 "Yes"
//                                             ],
//                                             "value_type": "No validation",
//                                             "response_required": false,
//                                             "component_type": "Input",
//                                             "label_choice": [],
//                                             "max_length": 300,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": true,
//                                             "is_repeat": true,
//                                             "sub_labels": [
//                                                 {
//                                                     "index": 0,
//                                                     "sub_label_data": [
//                                                         {
//                                                             "label_id": 132,
//                                                             "label": "Value (£)",
//                                                             "label_slug": "value_132",
//                                                             "field_name": "previous_employment_value_____132",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "Price",
//                                                             "component_type": "currencyField&Checkbox",
//                                                             "label_choice": [],
//                                                             "max_length": 20,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 133,
//                                                             "label": "Provider",
//                                                             "label_slug": "provider_133",
//                                                             "field_name": "previous_employment_provider_133",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": "{{domain}}/pension-providers/?search={{search_key}}",
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "Alpha numeric",
//                                                             "component_type": "Searchable&Checkbox",
//                                                             "label_choice": [],
//                                                             "max_length": 300,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 134,
//                                                             "label": "Type",
//                                                             "label_slug": "type_134",
//                                                             "field_name": "previous_employment_type_134",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "No validation",
//                                                             "component_type": "Text&Checkbox",
//                                                             "label_choice": [],
//                                                             "max_length": 300,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 135,
//                                                             "label": "Funds",
//                                                             "label_slug": "funds_135",
//                                                             "field_name": "previous_employment_funds_135",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "No validation",
//                                                             "component_type": "Text&Checkbox",
//                                                             "label_choice": [],
//                                                             "max_length": 300,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 136,
//                                                             "label": "Charges",
//                                                             "label_slug": "charges_136",
//                                                             "field_name": "previous_employment_charges_136",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "Price",
//                                                             "component_type": "currencyField&Checkbox",
//                                                             "label_choice": [],
//                                                             "max_length": 20,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         }
//                                                     ]
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     "subcategory_name": "Relationship & dependencies",
//                     "subcategory_slug_name": "relationship___dependencies_9",
//                     "subcategory_data": [
//                         {
//                             "label_id": 37,
//                             "label_parent": null,
//                             "label": "Do you have Children/Dependants?",
//                             "label_slug": "do_you_have_children_dependants__37",
//                             "field_name": "relationship___dependencies_do_you_have_children_dependants__37",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alphabet",
//                             "has_sublabels": true,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Yes",
//                                     "option": "Yes"
//                                 },
//                                 {
//                                     "id": "No",
//                                     "option": "No"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": [
//                                 {
//                                     "index": 0,
//                                     "sub_label_data": [
//                                         {
//                                             "label_id": 38,
//                                             "label": "How Many?",
//                                             "label_slug": "how_many__38",
//                                             "field_name": "relationship___dependencies_how_many__38",
//                                             "is_mandatory": true,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [
//                                                 "Yes"
//                                             ],
//                                             "value_type": "Number",
//                                             "response_required": true,
//                                             "component_type": "Input",
//                                             "label_choice": [],
//                                             "max_length": 20,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         },
//                                         {
//                                             "label_id": 39,
//                                             "label": "Name, Relationship, Age",
//                                             "label_slug": "name__relationship__age_39",
//                                             "field_name": "relationship___dependencies_name__relationship__age_39",
//                                             "is_mandatory": true,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [
//                                                 "Yes"
//                                             ],
//                                             "value_type": "Alphabet",
//                                             "response_required": false,
//                                             "component_type": "Input",
//                                             "label_choice": [],
//                                             "max_length": 50,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": true,
//                                             "is_repeat": true,
//                                             "sub_labels": [
//                                                 {
//                                                     "index": 0,
//                                                     "sub_label_data": [
//                                                         {
//                                                             "label_id": 108,
//                                                             "label": "Name",
//                                                             "label_slug": "name_108",
//                                                             "field_name": "relationship___dependencies_name_108",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "Alpha numeric",
//                                                             "component_type": "Input",
//                                                             "label_choice": [],
//                                                             "max_length": 100,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 85,
//                                                             "label": "Relationship",
//                                                             "label_slug": "relationship_85",
//                                                             "field_name": "relationship___dependencies_relationship_85",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "Alpha numeric",
//                                                             "component_type": "SingleSelect",
//                                                             "label_choice": [
//                                                                 {
//                                                                     "id": "Son",
//                                                                     "option": "Son"
//                                                                 },
//                                                                 {
//                                                                     "id": "Daughter",
//                                                                     "option": "Daughter"
//                                                                 },
//                                                                 {
//                                                                     "id": "Partners child",
//                                                                     "option": "Partners child"
//                                                                 }
//                                                             ],
//                                                             "max_length": 20,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         },
//                                                         {
//                                                             "label_id": 86,
//                                                             "label": "DOB",
//                                                             "label_slug": "dob_86",
//                                                             "field_name": "relationship___dependencies_dob_86",
//                                                             "is_mandatory": true,
//                                                             "search_api_url": null,
//                                                             "answer": "",
//                                                             "answer_parent": [
//                                                                 "Yes"
//                                                             ],
//                                                             "value_type": "DOB",
//                                                             "component_type": "Date",
//                                                             "label_choice": [],
//                                                             "max_length": 10,
//                                                             "min_length": 0,
//                                                             "mapfield_to": [],
//                                                             "has_local_data": false
//                                                         }
//                                                     ]
//                                                 }
//                                             ]
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             "label_id": 41,
//                             "label_parent": null,
//                             "label": "Plans for more children?",
//                             "label_slug": "plans_for_more_children__41",
//                             "field_name": "relationship___dependencies_plans_for_more_children__41",
//                             "is_mandatory": false,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alphabet",
//                             "has_sublabels": false,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Yes",
//                                     "option": "Yes"
//                                 },
//                                 {
//                                     "id": "No",
//                                     "option": "No"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         },
//                         {
//                             "label_id": 42,
//                             "label_parent": null,
//                             "label": "Good schools in the area? Pay for education?",
//                             "label_slug": "good_schools_in_the_area__pay_for_education__42",
//                             "field_name": "relationship___dependencies_good_schools_in_the_area__pay_for_education__42",
//                             "is_mandatory": false,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alphabet",
//                             "has_sublabels": true,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Paying",
//                                     "option": "Paying"
//                                 },
//                                 {
//                                     "id": "State",
//                                     "option": "State"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": [
//                                 {
//                                     "index": 0,
//                                     "sub_label_data": [
//                                         {
//                                             "label_id": 104,
//                                             "label": "Rough cost per year (£)",
//                                             "label_slug": "rough_cost_per_year_104",
//                                             "field_name": "relationship___dependencies_rough_cost_per_year_____104",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [
//                                                 "paying"
//                                             ],
//                                             "value_type": "Price",
//                                             "response_required": true,
//                                             "component_type": "currencyField",
//                                             "label_choice": [],
//                                             "max_length": 20,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         }
//                                     ]
//                                 }
//                             ]
//                         },
//                         {
//                             "label_id": 43,
//                             "label_parent": null,
//                             "label": "Will you contribute to Uni funds?",
//                             "label_slug": "will_you_contribute_to_uni_funds__43",
//                             "field_name": "relationship___dependencies_will_you_contribute_to_uni_funds__43",
//                             "is_mandatory": false,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alphabet",
//                             "has_sublabels": true,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Yes",
//                                     "option": "Yes"
//                                 },
//                                 {
//                                     "id": "No",
//                                     "option": "No"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": [
//                                 {
//                                     "index": 0,
//                                     "sub_label_data": [
//                                         {
//                                             "label_id": 105,
//                                             "label": "UNI fund value (£)",
//                                             "label_slug": "uni_fund_value_105",
//                                             "field_name": "relationship___dependencies_uni_fund_value_____105",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [
//                                                 "Yes"
//                                             ],
//                                             "value_type": "Price",
//                                             "response_required": true,
//                                             "component_type": "currencyField",
//                                             "label_choice": [],
//                                             "max_length": 20,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "id": 3236,
//             "client_id": 1114,
//             "client": "{\"client_id\": \"1114\", \"client_name\": \"Testing\", \"client_email\": \"testdfg@test.com\"}",
//             "advisor_id": 513,
//             "category_id": 27,
//             "category": "{\"category_id\": \"27\", \"category_name\": \"Plans & ATR\", \"category_slug_name\": \"plans___atr_27\"}",
//             "data": [
//                 {
//                     "subcategory_name": "Attitude To Risk",
//                     "subcategory_slug_name": "attitude_to_risk_29",
//                     "subcategory_data": [
//                         {
//                             "label_id": 82,
//                             "label_parent": null,
//                             "label": "Current ATR",
//                             "label_slug": "current_atr_82",
//                             "field_name": "attitude_to_risk_current_atr_82",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "No validation",
//                             "has_sublabels": false,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Conservative",
//                                     "option": "Conservative"
//                                 },
//                                 {
//                                     "id": "Balanced",
//                                     "option": "Balanced"
//                                 },
//                                 {
//                                     "id": "Moderate",
//                                     "option": "Moderate"
//                                 },
//                                 {
//                                     "id": "Dynamic",
//                                     "option": "Dynamic"
//                                 },
//                                 {
//                                     "id": "Adventurous",
//                                     "option": "Adventurous"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         },
//                         {
//                             "label_id": 83,
//                             "label_parent": null,
//                             "label": "Capacity for loss",
//                             "label_slug": "capacity_for_loss_83",
//                             "field_name": "attitude_to_risk_capacity_for_loss_83",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alphabet",
//                             "has_sublabels": false,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "High",
//                                     "option": "High"
//                                 },
//                                 {
//                                     "id": "Medium",
//                                     "option": "Medium"
//                                 },
//                                 {
//                                     "id": "Low",
//                                     "option": "Low"
//                                 }
//                             ],
//                             "max_length": 20,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         },
//                         {
//                             "label_id": 138,
//                             "label_parent": null,
//                             "label": "Date assessed",
//                             "label_slug": "date_assessed_138",
//                             "field_name": "attitude_to_risk_date_assessed_138",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Past date",
//                             "has_sublabels": false,
//                             "component_type": "Month/Year",
//                             "label_choice": [],
//                             "max_length": 300,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         }
//                     ]
//                 },
//                 {
//                     "subcategory_name": "Financial Plans",
//                     "subcategory_slug_name": "financial_plans_28",
//                     "subcategory_data": [
//                         {
//                             "label_id": 80,
//                             "label_parent": null,
//                             "label": "In the short term (0-5) do you have any major plans you think will affect you financially?",
//                             "label_slug": "in_the_short_term__0_5__do_you_have_any_major_plans_you_think_will_affect_you_financially__80",
//                             "field_name": "financial_plans_in_the_short_term__0_5__do_you_have_any_major_plans_you_think_will_affect_you_financially__80",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "No validation",
//                             "has_sublabels": false,
//                             "component_type": "TextArea",
//                             "label_choice": [],
//                             "max_length": 500,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         },
//                         {
//                             "label_id": 81,
//                             "label_parent": null,
//                             "label": "In the medium term (5-25) do you have any major plans you think will affect you financially?",
//                             "label_slug": "in_the_medium_term__5_25__do_you_have_any_major_plans_you_think_will_affect_you_financially__81",
//                             "field_name": "financial_plans_in_the_medium_term__5_25__do_you_have_any_major_plans_you_think_will_affect_you_financially__81",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "No validation",
//                             "has_sublabels": false,
//                             "component_type": "TextArea",
//                             "label_choice": [],
//                             "max_length": 500,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         },
//                         {
//                             "label_id": 139,
//                             "label_parent": null,
//                             "label": "In the long term (25+) do you have any major plans you think will affect you financially?",
//                             "label_slug": "in_the_long_term__25___do_you_have_any_major_plans_you_think_will_affect_you_financially__139",
//                             "field_name": "financial_plans_in_the_long_term__25___do_you_have_any_major_plans_you_think_will_affect_you_financially__139",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": false,
//                             "value_type": "No validation",
//                             "has_sublabels": true,
//                             "component_type": "Input",
//                             "label_choice": [],
//                             "max_length": 300,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": [
//                                 {
//                                     "index": 0,
//                                     "sub_label_data": [
//                                         {
//                                             "label_id": 143,
//                                             "label": "Retirement age",
//                                             "label_slug": "retirement_age_143",
//                                             "field_name": "financial_plans_retirement_age_143",
//                                             "is_mandatory": false,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "Number",
//                                             "response_required": true,
//                                             "component_type": "Input",
//                                             "label_choice": [],
//                                             "max_length": 3,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         },
//                                         {
//                                             "label_id": 144,
//                                             "label": "Notes",
//                                             "label_slug": "notes_144",
//                                             "field_name": "financial_plans_notes_144",
//                                             "is_mandatory": true,
//                                             "search_api_url": null,
//                                             "answer": "",
//                                             "answer_parent": [],
//                                             "value_type": "No validation",
//                                             "response_required": true,
//                                             "component_type": "TextArea",
//                                             "label_choice": [],
//                                             "max_length": 500,
//                                             "min_length": 0,
//                                             "mapfield_to": [],
//                                             "has_local_data": false,
//                                             "has_sublabels": false,
//                                             "is_repeat": false,
//                                             "sub_labels": []
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     "subcategory_name": "About",
//                     "subcategory_slug_name": "about_31",
//                     "subcategory_data": [
//                         {
//                             "label_id": 151,
//                             "label_parent": null,
//                             "label": "Tell us about yourself ?",
//                             "label_slug": "tell_us_about_yourself___151",
//                             "field_name": "about_tell_us_about_yourself___151",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "No validation",
//                             "has_sublabels": false,
//                             "component_type": "TextArea",
//                             "label_choice": [],
//                             "max_length": 500,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         },
//                         {
//                             "label_id": 152,
//                             "label_parent": null,
//                             "label": "Client Strategy",
//                             "label_slug": "client_strategy_152",
//                             "field_name": "about_client_strategy_152",
//                             "is_mandatory": true,
//                             "search_api_url": null,
//                             "answer": "",
//                             "answer_parent": [],
//                             "response_required": true,
//                             "value_type": "Alpha numeric",
//                             "has_sublabels": false,
//                             "component_type": "SingleSelect",
//                             "label_choice": [
//                                 {
//                                     "id": "Price Oriented",
//                                     "option": "Price Oriented"
//                                 },
//                                 {
//                                     "id": "Relationship Oriented",
//                                     "option": "Relationship Oriented"
//                                 },
//                                 {
//                                     "id": "Value Oriented",
//                                     "option": "Value Oriented"
//                                 },
//                                 {
//                                     "id": "Poker",
//                                     "option": "Poker"
//                                 }
//                             ],
//                             "max_length": 300,
//                             "min_length": 0,
//                             "is_repeat": false,
//                             "mapfield_to": [],
//                             "has_local_data": false,
//                             "sub_labels": []
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

// let renderCount = 0;
// const FieldArray = ({ control, register, setValue, getValues }) => {

//     const { fields, append, remove, prepend } = useFieldArray({
//         control,
//         name: "master"
//     });


//     return (
//         <>
//             {console.log('getValues', getValues())}
//             {console.log('fields', fields)}
//             <ul>
//                 {fields.map((item, index) => {
//                     console.log('item', item);
//                     const categoryName = JSON.parse(item.category);
//                     return (
//                         <section key={item.id} className="mb-5 border p-2">
//                             {categoryName.category_name}
//                             {/* {!isEmpty(item.data) && !isEmpty(item.data.subcategory_data) && <NestedArray nestIndex={index} {...{ control, register }} /> } */}
//                             {!isEmpty(item.data) && item.data.map(question => {
//                                 // console.log('question',question);
//                                 return (
                                    
// 									<Accordion >
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1a-content"
//                                             id="panel1a-header"
//                                         >
//                                             <Typography >{question.subcategory_name}</Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <Grid container>
//                                                 {
//                                                     !isEmpty(question.subcategory_data) && question.subcategory_data.map( subQuestions => {
//                                                         return (
//                                                             <>
//                                                             {
//                                                                 !isEmpty(subQuestions.sub_labels)
//                                                                 ?
//                                                                 <>
//                                                                     {
//                                                                         subQuestions.sub_labels[0].sub_label_data.map( subLabelQuestions => {
//                                                                             return (
//                                                                                 <p>{subLabelQuestions.label}</p>
//                                                                             )
//                                                                         })
//                                                                     }
//                                                                 <>
//                                                                 :
//                                                                 <p>sa</p>
//                                                             }
//                                                             </>
//                                                         )
//                                                     })
//                                                 }
//                                             </Grid>
//                                         </AccordionDetails>
//                                     </Accordion>
                                            
//                                 )
//                             })}
//                         </section>
//                     );
//                 })}
//             </ul>

//             <section>
//                 <button
//                     type="button"
//                     onClick={() => {
//                         append({ name: "append" });
//                     }}
//                 >
//                     append
//           </button>

//                 <button
//                     type="button"
//                     onClick={() => {
//                         setValue("test", [
//                             ...getValues().test,
//                             {
//                                 name: "append",
//                                 nestedArray: [{ field1: "append", field2: "append" }]
//                             }
//                         ]);
//                     }}
//                 >
//                     Append Nested
//           </button>

//                 <button
//                     type="button"
//                     onClick={() => {
//                         prepend({ name: "append" });
//                     }}
//                 >
//                     prepend
//           </button>

//                 <button
//                     type="button"
//                     onClick={() => {
//                         setValue("test", [
//                             {
//                                 name: "append",
//                                 nestedArray: [{ field1: "Prepend", field2: "Prepend" }]
//                             },
//                             ...getValues().test
//                         ]);
//                     }}
//                 >
//                     prepend Nested
//           </button>
//             </section>

//             <span className="counter">Render Count: {renderCount}</span>
//         </>
//     );
// }



// const NestedArray = ({ nestIndex, control, register }) => {
//     const { fields, remove, append } = useFieldArray({
//         control,
//         name: `test[${nestIndex}].nestedArray`
//     });

//     return (
//         <div>
//             {fields.map((item, k) => {
//                 return (
//                     <div key={item.id} style={{ marginLeft: 20 }}>
//                         <label>Nested Array:</label>
//                         <input
//                             name={`test[${nestIndex}].nestedArray[${k}].field1`}
//                             ref={register({ required: true })}
//                             defaultValue={item.field1}
//                             style={{ marginRight: "25px" }}
//                         />

//                         <input
//                             name={`test[${nestIndex}].nestedArray[${k}].field2`}
//                             ref={register()}
//                             defaultValue={item.field2}
//                         />
//                         <button type="button" onClick={() => remove(k)}>
//                             Delete Nested
//               </button>
//                     </div>
//                 );
//             })}

//             <button
//                 type="button"
//                 onClick={() =>
//                     append({
//                         field1: "field1",
//                         field2: "field2"
//                     })
//                 }
//             >
//                 Append Nested
//         </button>

//             <hr />
//         </div>
//     );
// };





// let count = 0;
// function FormArray() {
//     const {
//         control,
//         register,
//         handleSubmit,
//         getValues,
//         errors,
//         reset,
//         setValue,
//         formState
//     } = useForm({
//         defaultValues: newDefaultValues
//     });
//     const onSubmit = (data) => console.log("data", data);
//     count++;
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             {count}
//             <h1>Array of Array Fields</h1>
//             <p>
//                 The following example demonstrate the ability of building nested array
//                 fields.
//         </p>

//             <FieldArray
//                 {...{ control, register, newDefaultValues, getValues, setValue, errors }}
//             />

//             <button type="button" onClick={() => reset(newDefaultValues)}>
//                 Reset
//         </button>

//             <input type="submit" />
//             <pre>{JSON.stringify(formState, null, 2)}</pre>
//         </form>
//     );
// }



// export default FormArray;