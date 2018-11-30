import React, {Component} from 'react';
import OrdersMenuSelectForm from './OrdersMenuSelectForm';
import OrderDescription from './OrderDescription';

const INITIAL_STATE = {
    ordersMenuJSON: require('../../json/menu.json')
}

export default class OrdersMenu extends Component {
    
    static defaultProps = {
        className: 'ordersMenu'
    }

    state = {
        ordersMenu: INITIAL_STATE.ordersMenuJSON       
    };
           
    render() {
        const {className} = this.props;
        const {ordersMenu} = this.state;
        return (
            <div className={`${className}_wrapper`}>
                <OrdersMenuSelectForm className={className} ordersMenu={ordersMenu} />
                <OrderDescription className={className} orders={ordersMenu} />
            </div>
        );
    }
}