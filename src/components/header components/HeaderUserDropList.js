import React from 'react';

const HeaderUserDropList = ({className, items}) => (
    <ul className={`${className}_userDropList`}>
        {items.map(item => (
            <li className={`${className}_userDropList-item`}>
                {item}
            </li>
        ))}
        <button>{`Log out`}</button>
    </ul>
)

export default HeaderUserDropList;