import React from 'react';
import Aux from '../../hoc/Auxilary';
import Toolbar from '../../navigation/toolbar/Toolbar'
import classes from './Layout.css'


const Layout = (props) => (
    <Aux>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;