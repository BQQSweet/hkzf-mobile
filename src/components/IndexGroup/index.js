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
        console.log(res)
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
            <div id="index_group">
                <div className="top">
                    <h3>租房小组</h3>
                    <a href="">更多</a>
                </div>
                <div className="list">
                    <Grid columns={2} gap={10}>
                        {
                            groups.map(v => {
                                return (
                                    <div className="item" key={v.id}>
                                        <div className="item_left">
                                            <div className="main_title">
                                                <h3>{v.title}</h3>
                                            </div>
                                            <div className="light_title">{v.desc}</div>
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