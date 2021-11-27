import React, {Component} from 'react';
import Carousel from "../Carousel";
import SearchBox from "../SearchBox";
import './index.scss'
class IndexTop extends Component {
    render() {
        return (
            <div id='index_top'>
                <Carousel/>
                <div className="float">
                    <SearchBox history={this.props.history}/>
                </div>
            </div>
        );
    }
}

export default IndexTop;