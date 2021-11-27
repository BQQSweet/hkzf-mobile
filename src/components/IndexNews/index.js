import React, {Component} from 'react';
import './index.scss'
class IndexNews extends Component {
    state = {
        newsList: []
    }
    getNews = async () => {
        const [err, res] = await this.$axios.get('/home/news');
        if (err) return
        this.setState({
            newsList: res.body
        })
    }

    componentDidMount() {
        this.getNews()
    }

    render() {
        const {newsList} = this.state
        return (
            <div id="index_news" className='mt10 p10'>
                <div className="title">
                    <h3>最新资讯</h3>
                </div>
                <div className="list mt10">
                    {
                        newsList.map(v => {
                            return (
                                <div key={v.id} className="item bg-w mb10 p10">
                                    <div className="left_img">
                                        <img src={this.baseUrl + v.imgSrc} alt=""/>
                                    </div>
                                    <div className="right px10">
                                        <div className="title">{v.title}</div>
                                        <div className="bottom"><span className="from">{v.from}</span><span
                                            className="time">{v.date}</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default IndexNews;