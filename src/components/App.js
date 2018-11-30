import React, {Component} from 'react';
import {Fragment} from 'react';
import Header from './header components/Header';
import OrderHistory from './order history components/OrderHistory';
import OrdersMenu from './orders menu components/OrdersMenu';

export default class App extends Component {
    
    static defaultProps = {
        mainLink: '#'
    }

    state = {
        pages: ['menu', 'about', 'contact', 'delivery'],
        activePage: 0,
    }

    render() {
        const {mainLink} = this.props;
        const {pages} = this.state;
        return (
            <Fragment>
                <Header mainLink={mainLink} navItems={pages}/>
                {/*<OrderHistory />*/}
                <OrdersMenu />
            </Fragment>    
        )
    }
    
}
    
