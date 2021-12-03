import React, {Component} from 'react';
import Nav from "../../components/Nav";
import {format} from '../../utils/sortByChar'
import formatCityTag from '../../utils/formatCityTag'
import IndexTable from "../../components/IndexTable";
import {get} from "../../utils/getLocation"; //将城市列表按照首字母分组
import {AutoSizer, List} from 'react-virtualized';
import './index.scss'

const TITLE_HEIGHT = 30
const NAME_HEIGHT = 50

class CityList extends Component {
    state = {
        cityData: {},
        cityIndex: []
    }
    //获取城市列表
    getCityList = async () => {
        const [err, res] = await this.$axios.get('/area/city?level=1')
        if (err) return
        const {cityList, cityIndex} = format(res.body)
        return {
            cityData: cityList,
            cityIndex
        }
    }
    //获取热门城市
    getCityHot = async () => {
        const [err, res] = await this.$axios.get('/area/hot')
        if (err) return
        let {cityData, cityIndex} = this.state
        cityData = {...cityData, hot: res.body}
        cityIndex = ['hot', ...cityIndex]
        return {
            cityData,
            cityIndex
        }
    }

    //获取当前城市并添加到列表中
    async getCurrentCity() {
        const curCity = await get();
        let {cityData, cityIndex} = this.state
        cityData = {...cityData, '#': [curCity]}
        cityIndex = ['#', ...cityIndex]
        return {
            cityData,
            cityIndex
        }
    }

    init = async () => {
        const cityList = await this.getCityList();
        const cityHot = await this.getCityHot();
        const currentCity = await this.getCurrentCity();
        const Combination = {
            cityData: {...cityList.cityData, ...cityHot.cityData, ...currentCity.cityData},
            cityIndex: [...currentCity.cityIndex, ...cityHot.cityIndex, ...cityList.cityIndex]
        }
        this.setState(Combination)
    }


    //动态获取每一行的高度
    getRowHeight = ({index}) => {
        const {cityData, cityIndex} = this.state
        const list = cityData[cityIndex[index]]
        return TITLE_HEIGHT + list.length * NAME_HEIGHT
    }

    const
    rowRenderer = ({
                       key, // Unique key within array of rows
                       index, // Index of row within collection
                       isScrolling, // The List is currently being scrolled
                       isVisible, // This row is visible within the List (eg it is not an overscanned row)
                       style, // Style object to be applied to row (to position it)
                   }) => {
        const {cityData, cityIndex} = this.state
        const tag = cityIndex[index]
        const list = cityData[tag]
        return (
            <div key={key} style={style} className='city p10'>
                <div className="title">{formatCityTag(tag)}</div>
                {
                    list.map(v => <div className='name' key={v.value}>{v.label}</div>)
                }
            </div>
        );
    }

    async componentDidMount() {
        this.init()
    }


    render() {
        const {history} = this.props
        const {cityIndex} = this.state
        return (
            <div id='city_list' className='wh100'>
                <Nav history={history} name='城市选择'/>
                <AutoSizer>
                    {
                        ({width, height}) =>
                            <List width={width}
                                  height={height}
                                  rowHeight={this.getRowHeight}
                                  rowCount={cityIndex.length}
                                  rowRenderer={this.rowRenderer}/>

                    }
                </AutoSizer>
                <IndexTable/>


            </div>
        );
    }
}

export default CityList;