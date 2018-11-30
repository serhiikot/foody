import React, {Component} from 'react';
import OrderHistoryTable from './OrderHistoryTable';

const INITIAL_STATE = {
    orderHistoryJSON: require('../../json/order-history.json')
}

export default class OrderHistory extends Component {
    
    static defaultProps = {
        className: 'orderHistory'
    }

    state = {
        orderHistory: INITIAL_STATE.orderHistoryJSON
    }

    render() {
        const {className} = this.props;
        const {orderHistory} = this.state;
        return (
           <OrderHistoryTable className={className} orderHistory={orderHistory} /> 
        )
    }
}