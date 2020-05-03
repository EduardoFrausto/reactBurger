import React, { Component } from "react";
import axios from '../../../axios-orders';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/WithErrorHandler/WithErrorHandler';
import * as actionTypes from '../../../store/actions/index';

import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter your name'
            },
            address: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter the street'
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zip code',
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false,
                errorMessage: 'The zip code must be 5 number'
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter your country'
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email',
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
                errorMessage: 'Please enter your email'
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: 'cheapest',
                valid: true,
                validation: {}
            }
        },
        formIsValid: false,
        loading: false,
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    orderHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementId in this.state.orderForm) {
            formData[formElementId] = this.state.orderForm[formElementId].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData,
        }
        this.props.onOrderBurger(order);
    }

    inputChangedHandler = (event, inputId) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        }
        const updatedFormElement = {
            ...updatedOrderForm[inputId]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputId] = updatedFormElement;

        let formIsValid = true;
        for (let inputId in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputId].valid && formIsValid;
        }
        this.setState({
            orderForm: updatedOrderForm,
            formIsValid: formIsValid
        });

    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        touched={formElement.config.touched}
                        errorMessage={formElement.config.errorMessage}
                        shouldValidate={formElement.config.validation}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                )
                )}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
            </form>
        );
        console.log(this.props.loading);
        if (this.props.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
    }
}

const mapDistpatchToProps = dispatch => {
    return {
        onOrderBurger: orderData => dispatch(actionTypes.purchaseBurger(orderData))
    }
}

export default connect(mapStateToProps, mapDistpatchToProps)(withErrorHandler(ContactData, axios));