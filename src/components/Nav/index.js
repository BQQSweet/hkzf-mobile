import React, {Component} from 'react';
import {NavBar} from 'antd-mobile'
import './index.scss'

class Nav extends Component {
    back = () => {
        const {history} = this.props
        history.go(-1);
    }

    render() {
        const {name} = this.props
        return (
            <div id='nav'>
                <NavBar onBack={this.back}>{name}</NavBar>
            </div>
        );
    }
}

export default Nav;