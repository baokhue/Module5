import {Component} from "react";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentId: 1,
            studentName: "Bao Khue",
            studentAge: 23,
            studentAddress: "A1022I1"
        }
    }

    render() {
        return (
            <>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <td>{this.state.studentId}</td>
                        <td>{this.state.studentName}</td>
                        <td>{this.state.studentAge}</td>
                        <td>{this.state.studentAddress}</td>
                    </tr>
                </table>
            </>
        )
    }
}

export default Student;