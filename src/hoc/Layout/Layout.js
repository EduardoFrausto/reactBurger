import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    isAuth={this.props.isAuthenticated}
                    drawerTogglerClicked={this.sideDrawerTogglerHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>);
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);