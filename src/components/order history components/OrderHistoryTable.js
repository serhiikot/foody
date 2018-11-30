import React from 'react';

const OrderHistoryTable = ({className, orderHistory}) => (
    <table className={`${className}_table`} border="1">
        <caption>ORDER HISTORY</caption>
        <tbody>
            <tr className={`${className}_table-headerRow`}>
                <th>DATE</th>
                <th>PRICE</th>
                <th>DELIVERY ADRESS</th>
                <th>RATING</th>
            </tr>
            {orderHistory.map(order => (
                <tr className={`${className}_table-orderRow-${order.id}`} key={order.id}>
                    <td>{order.date}</td>
                    <td>{order.price}</td>
                    <td>{order.address}</td>
                    <td>{order.rating}</td>
                </tr>
            ))}
        </tbody>     
    </table>
)

export default OrderHistoryTable;