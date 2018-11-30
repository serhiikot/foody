import React from 'react';

const OrdersMenuSelectForm = ({className, ordersMenu}) => (
    <form className={`${className}_selectForm`}>
        <select>
            <option className={`${className}_selectForm-option`}>ALL</option>
            {ordersMenu.map(order => (
                <option 
                    key={order.id} 
                    className={`${className}_selectForm-option`}>
                    {order.name}
                </option>
            ))}
        </select>
  </form>
)

export default OrdersMenuSelectForm;