import React, {Component} from 'react';
import {get} from '../../utils/getLocation'
import {Input} from 'antd-mobile'
import './index.scss'

class SearchBox extends Component {
    state = {
        curCity: ""
    }
    goTo = (path) => {
        const {history} = this.props
        history.push(path)
    }

    componentDidMount() {
        get().then(r => {
            this.setState({
                curCity: r.label
            })
        })

    }

    render() {
        const {curCity} = this.state
        return (
            <div id="search_box">
                <div className="left w100">
                    <div className="change_city" onClick={() => this.goTo('/citylist')}>
                        <span>{curCity}</span>
                        <span className='iconfont icon-qiehuan pl4'/>
                    </div>
                    <div className="input pl10">
                        <span className='iconfont icon-sousuo'/>
                        <Input placeholder='请输入小区或地址'/>
                    </div>
                </div>
                <span className="iconfont icon-ditu ml10 fs28" onClick={() => {
                    this.goTo('/map')
                }}/>
            </div>
        );
    }
}

export default SearchBox;