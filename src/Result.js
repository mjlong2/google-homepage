import React, {Component} from "react";

class Result extends Component {

    constructor () {
        super();
    }

    render() {
        return (
                <div>
                {this.props.searchresult}
                </div>
        );
    }


}

export default Result;