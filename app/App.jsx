import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    render () {
        const text =this.props.text;
        return <div>
            <h1>Hello world</h1>
            <div>{text}</div>
            </div>
    }
}

App.propTypes = {
    text: PropTypes.string.isRequired,
    cat: PropTypes.number
}

// const App = () => <h1>Hello from const</h1>

export default App


ReactDom.render(
    <App text="Passed text 2"/>,
    document.getElementById('app')
)

