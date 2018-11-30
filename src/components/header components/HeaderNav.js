import React from 'react';

const HeaderNav = ({className, items}) => (
    <ul className={`${className}_nav`}>
        {items.map(item => (
            <li className={`${className}_nav-${item}`} key={`${item}_id`}>
                <button className={`${className}_nav-${item}Btn`}>
                    {item.toUpperCase()}
                </button>
            </li>
        ))}   
    </ul>
)

export default HeaderNav;