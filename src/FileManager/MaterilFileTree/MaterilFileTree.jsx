import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import DescriptionIcon from '@material-ui/icons/Description';
import FolderIcon from '@material-ui/icons/Folder';



const useTreeItemStyles = makeStyles((theme) => ({
	root: {
		color: theme.palette.text.secondary,
		'&:hover > $content': {
			backgroundColor: theme.palette.action.hover,
		},
		'&:focus > $content, &$selected > $content': {
			backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
			color: 'var(--tree-view-color)',
		},
		'&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
			backgroundColor: 'transparent',
		},
	},
	content: {
		color: theme.palette.text.secondary,
		// borderTopRightRadius: theme.spacing(2),
		// borderBottomRightRadius: theme.spacing(2),
		paddingRight: theme.spacing(1),
		fontWeight: theme.typography.fontWeightMedium,
		'$expanded > &': {
			fontWeight: theme.typography.fontWeightRegular,
		},
	},
	// group: {
	// 	marginLeft: 0,
	// 	'& $content': {
	// 		paddingLeft: theme.spacing(2),
	// 	},
	// },
	expanded: {},
	selected: {},
	label: {
		fontWeight: 'inherit',
		color: 'inherit',
	},
	labelRoot: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0.5, 0),
	},
	labelIcon: {
		marginRight: theme.spacing(1),
	},
	labelText: {
		fontWeight: 'inherit',
		flexGrow: 1,
	},
}));




const data = {
	item_id: 'root',
	item_name: 'Root Folder',
	item_type: "folder",
	children:
		[
			{
				"item_id": 101,
				"item_name": "LOA",
				"item_type": "folder",
				"children": [
					{
						"item_id": 101201,
						"item_type": "folder",
						"item_name": "LOA Folder new",
						"children": [
							{
								"item_id": 101201301,
								"item_name": "LOA – File 1",
								"item_type": "file",
								"item_size": "2MB"
							}
						]
					},
				]
			},
			{
				"item_id": 1012014,
				"item_type": "file",
				"item_name": "financial_doc",
				"item_size": "2MB"
			},
			{
				"item_id": 101201564,
				"item_type": "file",
				"item_name": "financial_doc",
				"item_size": "2MB"
			},
			{
				"item_id": 1041,
				"item_name": "Brosures",
				"item_type": "folder",
				"children": [
					{
						"item_id": 1012016,
						"item_type": "folder",
						"item_name": "Brosures new",
						"children": [
							{
								"item_id": 1012013015,
								"item_name": "Brosure – File 2",
								"item_type": "file",
								"item_size": "2MB"
							}
						]
					},
				]
			},
		]

};




// console.log(data);




function StyledTreeItem(props) {
	const classes = useTreeItemStyles();
	const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, itemData, ...other } = props;
	return (	
		<TreeItem
			onLabelClick={()=>{
				// console.log(itemData);
			}}
			label={
				<div className={classes.labelRoot}>
					<LabelIcon color="inherit" className={classes.labelIcon} />
					<Typography variant="body2" className={classes.labelText}>
						{labelText}
					</Typography>
					{/* {
					itemData.item_type === 'folder' ? <span onClick={()=>{

					}}>X</span> : null 
					} */}
		
					<Typography variant="caption" color="inherit">
						{labelInfo}
					</Typography>
				</div>
			}
			style={{
				'--tree-view-color': color,
				'--tree-view-bg-color': bgColor,
			}}
			classes={{
				root: classes.root,
				content: classes.content,
				expanded: classes.expanded,
				selected: classes.selected,
				group: classes.group,
				label: classes.label,
			}}
			{...other}
		/>
	);
}

StyledTreeItem.propTypes = {
	bgColor: PropTypes.string,
	color: PropTypes.string,
	labelIcon: PropTypes.elementType.isRequired,
	labelInfo: PropTypes.string,
	labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
	root: {
		height: 264,
		flexGrow: 1,
		maxWidth: '50%',
	},
});


const renderTree = (nodes) => {

	return (
		<StyledTreeItem
			key={nodes.item_id}
			nodeId={nodes.item_id}
			labelText={nodes.item_name}
			labelIcon={
				nodes.item_type === 'folder' ? FolderIcon : DescriptionIcon
			}
			labelInfo={nodes.item_size}
			color="#1a73e8"
			bgColor="#e8f0fe"
			itemData={nodes}
		>
			{Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
		</StyledTreeItem>
	)
}




export default function GmailTreeView() {
	const classes = useStyles();

	return (
		<TreeView
			className={classes.root}
			defaultExpanded={['root']}
			defaultCollapseIcon={<ArrowDropDownIcon />}
			defaultExpandIcon={<ArrowRightIcon />}
			defaultEndIcon={<div style={{ width: 24 }} />}
		>
				{renderTree(data)}
		</TreeView>
	);
}

