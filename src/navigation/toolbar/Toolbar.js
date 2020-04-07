import React from 'react';
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler';
import classes from './Toolbar.css';

const toolBar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggler clicked={props.drawerTogglerClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;