import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor(){
        super();
        this.state = {
            text: 'this is the state'
        }
    }

    update(e){
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return <div>
            <h1>Hello world</h1>
            <input type="text" onChange={this.update.bind(this)}/>
            <div>{this.state.text}</div>
        </div>
    }
}


ReactDom.render(
    <App />,
    document.getElementById('app')
);

