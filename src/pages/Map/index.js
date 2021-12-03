import React, {Component} from 'react';
import {get} from '../../utils/getLocation'
import './index.scss'

class Map extends Component {
    state = {
        curCity: {}
    }

    async componentDidMount() {
        const curCity = await get();
        this.setState({
            curCity
        })
        this.createMap()

    }

    createMap = () => {
        //创建地图实例
        const map = new window.BMap.Map('container')
        //设置中心点坐标
        const point = new window.BMap.Point(116.404, 39.915)
        //初始化地图 同时设置展示级别
        map.centerAndZoom(point, 15)
        map.setCenter(this.state.curCity.label);
    }

    render() {
        return (
            <div id='map'>
                {/*地图容器*/}
                <div id="container" className='wh100'></div>
            </div>
        );
    }
}

export default Map;