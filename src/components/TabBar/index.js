import React, {Component} from 'react';
import {TabBar} from 'antd-mobile'
import './index.css'
class Tab extends Component {
    setActiveKey=(val)=>{
        this.props.history.push(val)
    }
    render() {
        const {location,tabList} = this.props
        console.log(tabList)
        return (
            <div id="tab_bar">
                <TabBar onChange={this.setActiveKey} activeKey={location.pathname}>
                    {tabList.map(item => (
                        <TabBar.Item key={item.path} icon={item.icon} title={item.name} />
                    ))}
                </TabBar>
            </div>
        );
    }
}

export default Tab;