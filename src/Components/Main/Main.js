import { Component } from "react";
import SubContents from '../SubContents/SubContents';
import Advertisement from '../Advertisement/Advertisement';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="row">
                 <SubContents />
                 <SubContents />
                 <SubContents />
                <Advertisement />
                </div>
            
            </div>
        )
    }   
}

export default Main;