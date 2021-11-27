import React, {Component} from 'react';
import {Swiper, Toast} from 'antd-mobile'
import './index.scss'

class Carousel extends Component {
    state = {
        swipers: []
    }
    getSwiper = async () => {
        const [err, res] = await this.$axios.get("/home/swiper")
        if (err) console.log(err)
        console.log(res)
        this.setState({
            swipers: res.body
        })
    }

    async componentDidMount() {
        await this.getSwiper();
    }

    renderSwiper = () => {
        return this.state.swipers.map((item, index) => (
            <Swiper.Item key={index}>
                <img
                    src={`${this.baseUrl}${item.imgSrc}`}
                    style={{width: '100%'}}
                    onClick={() => {
                        Toast.show(`你点击了卡片 ${index + 1}`)
                    }}
                />
            </Swiper.Item>)
        )
    }

    render() {
        const {swipers} = this.state
        return (
            <div id='carousel'>
                <Swiper autoplay
                        slideSize={90}
                        trackOffset={5}
                        indicatorProps={{
                            style: {
                                '--dot-color': 'rgba(0, 0, 0, 0.4)',
                                '--active-dot-color': 'rgba(255, 255, 255, 0.4)',
                                '--dot-size': '10px',
                                '--active-dot-size': '20px',
                                '--dot-border-radius': '50%',
                                '--active-dot-border-radius': '15px',
                                '--dot-spacing': '8px',
                            },
                        }}>
                    {
                        this.renderSwiper()
                    }
                </Swiper>
            </div>
        );
    }
}

export default Carousel;