import React from 'react';
import { Values } from 'redux-form-website-template';
import showResults from '../utils/showResults';
import OrderContent from '../pageContent/OrderContent';
class Order extends React.Component {
    render() {
        return <div style={{ padding: 15 }}>
            <h2>OrderForm</h2>
            <OrderContent onSubmit={showResults} />
            <br/><br/><br/><br/>
            <Values form="OrderContent" />
        </div>;
    }
}

export default Order;