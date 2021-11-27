import React, {Component} from 'react';
import IndexTop from "../../components/IndexTop";
import IndexMenu from "../../components/IndexMenu";
import IndexGroup from "../../components/IndexGroup";
import IndexNews from "../../components/IndexNews";


// const map=new BM
class Index extends Component {
    componentDidMount() {

    }

    render() {
        const {history} = this.props
        return (
            <div>
                <IndexTop history={history}/>
                <IndexMenu history={history}/>
                <IndexGroup/>
                <IndexNews/>
            </div>
        );
    }
}

export default Index;