import {Component} from "react";

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            item: ""
        }
    }

    render() {
        return (
            <>
                <h1>Todo List</h1>
                <input value={this.state.item} onChange={(event) => this.handleChange(event.target.value)} />
            </>
        )
    }
}