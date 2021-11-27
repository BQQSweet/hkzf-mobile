import React, {Component} from 'react';
import {Grid} from 'antd-mobile'
import {WholeRent, JointRent, FindMap, RentOut} from "../../style/icons";
import GridItem from "../GridIetm";
import './index.scss'

class IndexMenu extends Component {
    state = {
        itemList: [
            {
                id: "1",
                icon: <WholeRent color="#b1bede"/>,
                name: "整租",
                path: '/home/find'
            },
            {
                id: "2",
                icon: <JointRent color="#b1bede"/>,
                name: "合租",
                path: '/home/list'
            },
            {
                id: "3",
                icon: <FindMap color="#b1bede"/>,
                name: "地图找房",
                path: '/map'
            },
            {
                id: "4",
                icon: <RentOut color="#b1bede"/>,
                name: "去出租",
                path: '/rent-out'
            },
        ],
    };
    navTo = (path) => {
        this.props.history.push(path)
    }

    render() {
        const {itemList} = this.state
        return (
            <div id='index_menu' className='bg-w'>
                <Grid columns={4} gap={0}>
                    {
                        itemList.map(v => {
                            return (<Grid.Item onClick={() => {
                                this.navTo(v.path)
                            }} key={v.id}>
                                <GridItem data={v}/>
                            </Grid.Item>)
                        })
                    }
                </Grid>
            </div>
        );
    }
}

export default IndexMenu;