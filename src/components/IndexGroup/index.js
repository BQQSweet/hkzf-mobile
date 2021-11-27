import React, {Component} from 'react';
import {Grid} from 'antd-mobile'
import './index.scss'
class IndexGroup extends Component {
    state = {
        groups: []
    }

    getGroups = async () => {
        const [err, res] = await this.$axios.get('/home/groups', {})
        if (err) return
        this.setState({
            groups: res.body
        })
    }

    componentDidMount() {
        this.getGroups();
    }

    render() {
        const {groups} = this.state
        return (
            <div id="index_group" className='mt10'>
                <div className="top">
                    <h3>租房小组</h3>
                    <span>更多</span>
                </div>
                <div className="list mt10">
                    <Grid columns={2} gap={10}>
                        {
                            groups.map(v => {
                                return (
                                    <div className="item bg-w w100" key={v.id}>
                                        <div className="item_left">
                                            <div className="fs12">
                                                <h3>{v.title}</h3>
                                            </div>
                                            <div className="fs10 mt4">{v.desc}</div>
                                        </div>
                                        <div className="item_right">
                                            <img src={this.baseUrl + v.imgSrc} alt=""/>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Grid>

                </div>
            </div>
        );
    }
}

export default IndexGroup;