import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor() {
        super();
        this.state = {
            text: 'this is the state'
        };
        this.update = this.update.bind(this)
    }

    update(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return <Widget text={this.state.text} update={this.update}/>
    }
}


const Widget = (props) => {
    return <div>
        <h1>Hello world</h1>
        <input type="text" onChange={props.update}/>
        <div>{props.text}</div>
    </div>

}

ReactDom.render(
    <App />,
    document.getElementById('app')
);

