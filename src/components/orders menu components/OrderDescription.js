import React, {Component} from 'react';

export default class OrderDescription extends Component {
    
    state = {
           
    };
           
    render() {
        const {className, orders} = this.props;
        return (
           <ul className={`${className}_discription-wrapper`}>
                {orders.map(order => (
                    <li className={`${className}_discription-${order.id}`} key={order.id}>
                        <img className={`${className}_discription-image`} 
                            src={order.image} 
                            alt="Order image"
                            width="100" 
                            heigth="150" 
                        />
                        <p className={`${className}_discription-name`}>{order.name}</p>
                        <p className={`${className}_discription-price`}>{order.price}</p>
                    </li>
                ))}
           </ul>
        );
    }
}