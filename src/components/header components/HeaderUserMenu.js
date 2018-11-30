import React, {Component} from 'react';
import {Fragment} from 'react';
import HeaderUserDropList from './HeaderUserDropList';

export default class HeaderUserMenu extends Component {
    
    static defaultProps = {
        userDropListItems: ['acaunt', 'order history', 'meal planer']
    }

    state = {
        userPhoto: this.userPhoto,
        dropListActive: false
    }

    handlerUserDropList = () => {
        this.setState({dropListActive: !this.state.dropListActive})
    }

    render() {
        const {className, userDropListItems} = this.props;
        const {userPhoto, dropListActive} = this.state; 
        return (
            <Fragment>
                <button className={`${className}_userMenu-userDropListBtn`} onClick={this.handlerUserDropList}>
                    <ul className={`${className}_userMenu`}>
                        <li className={`${className}_userMenu-userPhotoWrapper`}>
                            <img className={`${className}_userMenu-userPhoto`} 
                                src={userPhoto} 
                                alt="User Photo" 
                                width="50" 
                                height="50"
                            />
                        </li>
                        <li className={`${className}_userMenu-user`}>
                            <div className={`${className}_userMenu-userName`}>
                                {`USER NAME`}
                            </div>
                        </li>
                    </ul>
                </button>
            {   
                dropListActive &&
                <HeaderUserDropList className={className} items={userDropListItems} />
            }
            </Fragment>
        )
    }
} 