import React, {Component} from 'react';
import {get} from '../../utils/getLocation'
import './index.scss'

class Map extends Component {
    state = {
        map: null,
    }

    componentDidMount() {
        this.createMap()
        get()
    }

    createMap = () => {
        //创建地图实例
        const map = new window.BMap.Map('container')
        this.setState({
            map
        })
        //设置中心点坐标
        const point = new window.BMap.Point(116.404, 39.915)
        //初始化地图 同时设置展示级别
        map.centerAndZoom(point, 15)
    }
    getLocation = (result) => {
        const cityName = result.name;
        this.state.map.setCenter(cityName);
        this.getCityInfo(cityName)
    }
    getCityInfo = async (name) => {
        const [err, res] = await this.$axios.get('/area/info?name=' + name)
        if (err) return
        console.log(res)
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