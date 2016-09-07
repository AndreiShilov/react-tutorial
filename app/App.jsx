import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            red: ReactDom.findDOMNode(this.refs.red).value,
            green: ReactDom.findDOMNode(this.refs.green).value,
            blue: ReactDom.findDOMNode(this.refs.blue).value
        })
    }

    render() {
        return (
            <div>
                <div>
                    red : {this.state.red}
                    <Slider ref="red" update={this.update}/>
                </div>
                <div>
                    green: {this.state.green}
                    <Slider ref="green" update={this.update}/>
                </div>
                <div>
                    blue: {this.state.blue}
                    <Slider ref="blue" update={this.update}/>
                </div>
            </div>
        )
    }
}

class Slider extends Component {
    render() {
        return (
            <input type="range" min="0" max="250" onChange={this.props.update}/>
        )
    }
}


ReactDom.render(
    <App />,
    document.getElementById('app')
);

