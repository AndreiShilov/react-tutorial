import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


let Mixin = InnerComponent => class extends Component {
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

    render() {
        return <InnerComponent update={this.update} {...this.state} {...this.props}/>
    }

};

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends Component {

    render() {
        console.log('rendering');
        return (
            <div>
               <ButtonMixed txt="button"/>
                <LabelMixed txt="label"/>
            </div>
        )
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);

