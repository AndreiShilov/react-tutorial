import React, {PropTypes, Component} from 'react';
import ReactDom from 'react-dom';


class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {id: 1, name: "Name" + 1},
                {id: 2, name: "Name" + 2},
                {id: 3, name: "Name" + 3},
                {id: 4, name: "Name" + 4},
                {id: 5, name: "Name" + 5},
                {id: 6, name: "Name" + 6},
                {id: 7, name: "Name" + 7},
                {id: 8, name: "Name" + 8},
                {id: 9, name: "Name" + 9},
                {id: 10, name: "Name" + 10},
                {id: 11, name: "Name" + 11},
                {id: 12, name: "Name" + 12},
                {id: 13, name: "Name" + 13},
                {id: 14, name: "Name" + 14},
                {id: 15, name: "Name" + 15},
            ]
        };

    }


    render() {
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person}/>
        });
        return <table>
            <tbody>{rows}</tbody>
        </table>
    }
}

const PersonRow = (props) => {
    return <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
    </tr>
};

ReactDom.render(
    <App />,
    document.getElementById('app')
);

