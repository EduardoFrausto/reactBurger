import React, { Component } from 'react';
import Aux from '../Auxilary/Auxilary';
import Toolbar from '../../navigation/toolbar/Toolbar'
import SideDrawer from '../../navigation/SideDrawer/SideDrawer'
import classes from './Layout.css'


class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false, });
    }

    sideDrawerTogglerHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar
                    drawerTogglerClicked={this.sideDrawerTogglerHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>);
    }
}

export default Layout;