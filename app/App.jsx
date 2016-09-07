import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    render() {
        const text = this.props.text;
        const cat = this.props.cat;
        return <div>
            <h1>Hello world</h1>
            <div>{text}</div>
            <div>{cat}</div>
        </div>
    }
}

App.propTypes = {
    text: PropTypes.string.isRequired,
    cat: PropTypes.number
};

App.defaultProps = {
    cat: 10
};
// const App = () => <h1>Hello from const</h1>

export default App


ReactDom.render(
    <App text="Passed text 2"/>,
    document.getElementById('app')
);

