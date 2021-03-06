import React from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Button from '../UI/Button/Button';

const orderSummary = (props) => {
    const orderSumary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {orderSumary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button
                btnType='Danger'
                click={props.purchaseCanceled}>CANCEL</Button>
            <Button
                btnType='Success'
                click={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    );
}

export default orderSummary;