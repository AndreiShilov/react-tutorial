import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '/* add your jsx here*/',
            output: '',
            error: '',
        };
        this.update = this.update.bind(this);
    }


    update(e) {

        let code = e.target.value;

        try {
            this.setState({
                output: babel.transform(code, {
                    stage: 0,
                    loose: 'all'
                }).code
            })
        } catch (e) {
            this.setState({
                error: e.message
            })
        }
    }

    render() {
        return <div>
            <header>{this.state.error}</header>
            <div className="container">
                <textarea name="" id="" cols="30" rows="10"
                          onChange={this.update}
                          defaultValue={this.state.input}></textarea>
                <pre>
                    {this.state.output}

                </pre>
            </div>
        </div>
    }
}

ReactDom.render(
    <App />,
    document.getElementById('app')
);

