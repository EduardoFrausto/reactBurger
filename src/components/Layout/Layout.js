import React from 'react';
import Aux from '../../hoc/Auxilary';
import classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div>
            NavBar, SideBar
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;