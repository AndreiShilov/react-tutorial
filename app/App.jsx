import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor() {
        super();
        this.update = this.update.bind(this);
        this.state = {increasing: false}
    }

    update() {
        ReactDom.render(<App val={this.props.val + 1}/>, document.getElementById('app'))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            increasing: nextProps.val > this.props.val
        })
    }

    shouldComponentUpdate (nextProps, nextState){
        return nextProps.val % 5 == 0;
    }

    render() {
        console.log(this.state.increasing);
        return (
            <div>
                <button onClick={this.update}>{this.props.val}</button>
            </div>
        )
    }

    componentDidUpdate (prepProps, prevState){
        console.log(prepProps)
    }
}


App.defaultProps = {
    val: 0
};

ReactDom.render(
    <App />,
    document.getElementById('app')
);

