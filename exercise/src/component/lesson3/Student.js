import {Component} from "react";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            studentList: [
                {
                studentId: 1,
                studentName: "Bao Khue",
                studentAge: 23,
                studentAddress: "A1022I1"
                },
                {
                    studentId: 2,
                    studentName: "Chewy",
                    studentAge: 22,
                    studentAddress: "EL19A4A"
                },
                {
                    studentId: 3,
                    studentName: "Bee",
                    studentAge: 21,
                    studentAddress: "A1022I1"
                }
            ]
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
                    {this.state.studentList.map((student) => {
                        return (
                            <>
                                <tr>
                                    <td>{student.studentId}</td>
                                    <td>{student.studentName}</td>
                                    <td>{student.studentAge}</td>
                                    <td>{student.studentAddress}</td>
                                </tr>
                            </>
                        )
                    })}
                </table>
            </>
        )
    }
}

export default Student;