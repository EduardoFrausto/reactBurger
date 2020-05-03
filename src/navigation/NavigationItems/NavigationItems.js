import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link='/' exact>BurgerBuilder</NavigationItem>
        <NavigationItem link='/orders'>Orders</NavigationItem>
        <NavigationItem link='/auth'>Auth</NavigationItem>
    </ul>
);

export default navigationItems;