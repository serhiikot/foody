import React, {Component} from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderUserMenu from './HeaderUserMenu';


export default class Header extends Component {
    
    static defaultProps = {
        className: 'headerApp'
    }

    state = {
        userPhotoLink: '#',
        activeNavItem: 0
    };
           
    render() {
        const {className, navItems, mainLink} = this.props;
        const {userPhotoLink} = this.state;
        return (
            <div className={`${className}_wrapper`}>
                <HeaderLogo className={className} href={mainLink} />
                <HeaderNav className={className} items={navItems} />    
                <HeaderUserMenu className={className} userPhoto={userPhotoLink} />    
            </div>
        );
    }
}