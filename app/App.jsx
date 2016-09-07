import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    render(){
        return <Button>I <Heart/></Button>
    }
};

class Button extends Component{
    render(){
        return <button>{this.props.children}</button>
    }
}


const Heart = (props) => {
    return <span>love</span>
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);

