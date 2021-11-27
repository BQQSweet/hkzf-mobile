import React, {Component} from 'react';
import {Mask, Loading as Load} from 'antd-mobile'
import './index.scss'

class Loading extends Component {
    render() {
        const {visible} = this.props
        return (
            <Mask visible={visible}>
                <div className="loading_icon">
                    <span>加载中</span>
                    <Load color='white'/>
                </div>
            </Mask>

        );
    }
}

export default Loading;