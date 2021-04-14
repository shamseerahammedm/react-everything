import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './dashboard.styles.scss';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        background: theme.palette.common.white,
        boxShadow:theme.shadows[1]
    },
    appBarShift: {
        marginLeft: drawerWidth,
        position: 'absolute',
        width: `calc(100%)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        position: 'relative',
    },
    paper: {
        background: theme.palette.primary.main,
        color: 'white'
      }
}));





const Dashboard = ({children, className}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(true);



    const handleDrawerOpen = () => {
        setIsSidebarExpanded(prevState => !prevState);
    };

    const handleDrawerClose = () => {
        setIsSidebarExpanded(false);
    };



    const [openExtraMenus, setOpenExtraMenus] = React.useState(false);
    const anchorRef = React.useRef();
    const handleExtraMenus = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target))
        {
            return;
        }
        setOpenExtraMenus(false);
    }

    const handleExtraMenuButton = () => {
        setOpenExtraMenus((prevOpen) => !prevOpen);
    }



    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                variant="permanent"
                className={
                    clsx(classes.drawer, {
                        [classes.drawerOpen]: isSidebarExpanded,
                        [classes.drawerClose]: !isSidebarExpanded,
                    })
                }
                classes={{
                    paper: clsx(classes.paper,{
                        [classes.drawerOpen]: isSidebarExpanded,
                        [classes.drawerClose]: !isSidebarExpanded,
                    }),

                }}
            >
                {
                    /* <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div> */
                }
                {/* <Divider /> */}
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text} className={`${isSidebarExpanded ? null : `centerIcons`}`}>
                            <ListItemIcon className="sideBarIcon">
                                {index % 2 === 0 ? <InboxIcon className={classes.sidebarIcon} /> : <MailIcon className={classes.sidebarIcon}/>}
                            </ListItemIcon>
                            <ListItemText primary={text} className="sideBarText"/>
                        </ListItem>
                    ))}
                    <ListItem ref={anchorRef} button className={isSidebarExpanded ? null : `centerIcons`} onClick={handleExtraMenuButton}>
                        <ListItemIcon> <InboxIcon /> </ListItemIcon>
                        <ListItemText primary="Open Menu" />
                        <Popper 
                           


                            placement="right"
                            disablePortal={false}
                           
                            style={{ position: 'absolute', bottom: 0, right: 0, top: 'unset', left: 'unset' }}
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    // style={{ transformOrigin: placement === 'right' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleExtraMenus}>
                                            <MenuList autoFocusItem={openExtraMenus} id="menu-list-grow" >
                                                <MenuItem onClick={handleExtraMenus}>Profile</MenuItem>
                                                <MenuItem onClick={handleExtraMenus}>My account</MenuItem>
                                                <MenuItem onClick={handleExtraMenus}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </ListItem>
                </List>
                {/* <Divider /> */}
                

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <AppBar
                    position="absolute"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: isSidebarExpanded,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                        // className={clsx(classes.menuButton, {
                        // 	[classes.hide]: isSidebarExpanded,
                        // })}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={className}>
                    {children}
                </div>
            </main>
        </div>
    );
}



export default Dashboard;