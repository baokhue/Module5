import {Component} from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            item: "",
            list: ['Do homework']
        }
    }

    addItem() {
        this.setState({
            list: [...this.state.list, this.state.item],
            item: ""
        });
    }

    handleChange(value) {
        this.setState({
            item: value
        })
    }

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)} />
                <button onClick={() => this.addItem()}>Add</button>

                <ul>
                    {this.state.list.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default TodoApp;