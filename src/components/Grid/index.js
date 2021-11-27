import React, {Component} from "react";
import {Grid} from 'antd-mobile'
import "./index.scss";
import {
    Star,
    House,
    Record,
    Identify,
    User,
    Service,
} from "../../style/icons";
import GridItem from "../GridIetm";

export default class MyGrid extends Component {
    state = {
        itemList: [
            {
                icon: <Star color="#D46934"/>,
                name: "我的收藏",
            },
            {
                icon: <House color="#71BF50"/>,
                name: "我的出租",
            },
            {
                icon: <Record color="#F3CC4F"/>,
                name: "看房记录",
            },
            {
                icon: <Identify color="#ECA063"/>,
                name: "成为房主",
            },
            {
                icon: <User color="#529DCB"/>,
                name: "个人资料",
            },
            {
                icon: <Service color="#D77186"/>,
                name: "联系我们",
            },
        ],
    };

    render() {
        const {itemList} = this.state;
        return (
            <div id="grid" className='w100 bg-w p10 mt10'>
                <Grid columns={3} gap={10}>
                    {itemList.map((v,i) => {
                        return <Grid.Item key={i}><GridItem key={v.name} data={v}/></Grid.Item>;
                    })}
                </Grid>
            </div>
        );
    }
}
