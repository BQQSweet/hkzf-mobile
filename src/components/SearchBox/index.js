import React, {Component} from 'react';
import {Dropdown, Radio, Space,Input} from 'antd-mobile'
import './index.scss'
import Select from "../Select";
class SearchBox extends Component {
    state = {
        curCity: '上海'
    }
    changeHandler = (e) => {
        console.log(e)
        this.setState({
            curCity: e
        })
    }

    render() {
        const {curCity} = this.state
        return (
            <div id="search_box">
                <Select/>
                <Input placeholder='请输入内容'/>
            </div>
        );
    }
}

export default SearchBox;