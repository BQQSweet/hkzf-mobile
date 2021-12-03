import React, {Component} from 'react';
import './index.scss'

class IndexTable extends Component {
    state = {
        curIndex: 0,
        cityIndex: [],
    }

    changeIndex = (index) => {
        this.setState({
            curIndex: index
        })
        this.props.parent.getChildrenMsg(this, index)
    }

    /*解决父组件传递异步数据时 在componentDidMount中获取不到数据*/
    componentWillReceiveProps(nextProps) {
        console.log("next",nextProps)
        const {cityIndex, startIndex} = nextProps
        this.setState({
            cityIndex,
            curIndex: startIndex
        })
    }

    render() {
        const {curIndex, cityIndex} = this.state
        return (
            <div id='index_table'>
                <ul>
                    {
                        cityIndex.map((v, i) => {
                            return <li onClick={() => this.changeIndex(i)} className={i === curIndex ? 'active' : ''}
                                       key={v}>
                                {v === 'hot' || v === 'cur' ? (v === 'cur' ? '#' : '热') : v}
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default IndexTable;