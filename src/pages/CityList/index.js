import React, {Component} from 'react';
import Nav from "../../components/Nav";
import {format} from '../../utils/sortByChar'

class CityList extends Component {
    state = {
        cityData: {},
        cityIndex: []
    }
    getCityList = async () => {
        const [err, res] = await this.$axios.get('/area/city?level=1')
        if (err) return
        const {cityList, cityIndex} = format(res.body)
        this.setState({
            cityData: cityList,
            cityIndex
        })
    }
    getCityHot = async () => {
        const [err, res] = await this.$axios.get('/area/hot')
        if (err) return
        let {cityData,cityIndex} = this.state
        cityData = {...cityData,hot:res.body}
        cityIndex=['hot',...cityIndex]
        this.setState({
            cityData,
            cityIndex
        })
    }

    async componentDidMount() {
        await this.getCityList();
        await this.getCityHot();
        console.log("hello")
    }

    render() {
        const {history} = this.props
        return (
            <div>
                <Nav history={history} name='城市选择'/>
            </div>
        );
    }
}

export default CityList;