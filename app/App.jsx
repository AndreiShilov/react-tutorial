import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({
            val: this.state.val + 1
        })
    }

    componentWillMount() {
        console.log('mounting');
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('unmount');
    }

    render() {
        console.log('rendering');
        return (
            <div>
                val : {this.state.val}
                <br/>
                <button onClick={this.update}>Increase</button>
            </div>
        )
    }
}
;


class Wrapper extends Component {

    mount() {
        ReactDom.render(<App/>, document.getElementById('a'))
    }

    unmount() {
        ReactDom.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return (
            <div className="">
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"></div>
            </div>
        )
    }
}

ReactDom.render(
    <Wrapper />,
    document.getElementById('app')
);

