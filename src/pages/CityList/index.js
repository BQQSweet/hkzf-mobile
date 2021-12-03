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
    constructor(props) {
        super(props);
        this.state = {
            cityData: {},
            cityIndex: [],
            startIndex: 0
        }

        this.cityList = React.createRef()
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
        cityData = {...cityData, 'cur': [curCity]}
        cityIndex = ['cur', ...cityIndex]
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
            <div key={key} style={style} className='city'>
                <div className="title p10">{formatCityTag(tag)}</div>
                {
                    list.map(v => <div className='name p10' key={v.value}>{v.label}</div>)
                }
            </div>
        );
    }
    /*获取渲染行的数据信息*/
    onRowsRendered = ({startIndex}) => {
        if (startIndex !== this.state.startIndex) {
            this.setState({
                startIndex
            })
        }
    }
    /*获取子组件传递的数据*/
    getChildrenMsg = (result, index) => {
        this.cityList.current.scrollToRow(index)//TODO:此处有bug 因为react版本问题导致scrollToRow定位不准确
    }


    async componentDidMount() {
        await this.init()
        this.cityList.current.measureAllRows()
    }

    render() {
        const {history} = this.props
        const {cityIndex, startIndex} = this.state
        return (
            <div id='city_list' className='wh100'>
                <Nav history={history} name='城市选择'/>
                <AutoSizer>
                    {
                        ({width, height}) =>
                            <List
                                ref={this.cityList}
                                width={width}
                                height={height}
                                rowHeight={this.getRowHeight}
                                rowCount={cityIndex.length}
                                rowRenderer={this.rowRenderer}
                                onRowsRendered={this.onRowsRendered}
                                scrollToAlignment="start"
                            />

                    }
                </AutoSizer>
                <div className="index_table">
                    <IndexTable parent={this} startIndex={startIndex} cityIndex={cityIndex}/>
                </div>
            </div>
        );
    }
}

export default CityList;