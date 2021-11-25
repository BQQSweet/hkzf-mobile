import React, {Component} from 'react';
import './index.scss'
class Select extends Component {
    state={
        show:false
    }
    openValue = (e) => {
        const {show}=this.state
        this.setState({
            show:!show
        })
    }
    changeVal=(e)=>{
        console.log(e.target.innerText)
    }

    render() {
        const {show}=this.state
        return (
            <div id="select">
                <div className="input" onClick={this.openValue}>
                    <input type="text" readOnly placeholder="上海"/>
                </div>
                <div className="list" style={{height: show?'100px':'0px'}}>
                    <ul onClick={this.changeVal}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Select;

