import React, {Component} from 'react';
import {Input} from 'antd-mobile'
import './index.scss'

class SearchBox extends Component {
    state = {
        curCity: '上海'
    }
    goTo = (path) => {
        const {history}=this.props
        history.push(path)
    }

    render() {
        const {curCity} = this.state
        return (
            <div id="search_box">
                <div className="left">
                    <div className="change_city" onClick={()=>this.goTo('/citylist')}>
                        <span>上海</span>
                        <span className='iconfont icon-qiehuan'/>
                    </div>
                    <div className="input">
                        <span className='iconfont icon-sousuo'/>
                        <Input placeholder='请输入小区或地址'/>
                    </div>
                </div>
                <span className="iconfont icon-ditu" onClick={()=>{this.goTo('/map')}}></span>
            </div>
        );
    }
}

export default SearchBox;