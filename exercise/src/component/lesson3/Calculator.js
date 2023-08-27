import {Component} from "react";

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            firstNumber: "",
            secondNumber: "",
        }
    }

    addNumber() {
        let n1 = parseInt(this.state.firstNumber);
        let n2 = parseInt(this.state.secondNumber);

        this.setState({
            result: n1 + n2
        })
    }

    subNumber() {
        let n1 = parseInt(this.state.firstNumber);
        let n2 = parseInt(this.state.secondNumber);

        this.setState({
            result: n1 - n2
        })
    }

    multiNumber() {
        let n1 = parseInt(this.state.firstNumber);
        let n2 = parseInt(this.state.secondNumber);

        this.setState({
            result: n1 * n2
        })
    }

    divideNumber() {
        let n1 = parseInt(this.state.firstNumber);
        let n2 = parseInt(this.state.secondNumber);

        this.setState({
            result: n1 / n2
        })
    }

    handleInputFirstNumber (value) {
        this.setState({
            firstNumber: value
        })
    }

    handleInputSecondNumber (value) {
        this.setState({
            secondNumber: value
        })
    }
    render() {
        return(
            <>
                <table>
                    <tr>
                        <td>
                            <input type = "text" onChange={(event) => this.handleInputFirstNumber(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type = "text" onChange={(event) => this.handleInputSecondNumber(event.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() => this.addNumber()}>+</button>
                            <button onClick={() => this.subNumber()}>-</button>
                            <button onClick={() => this.multiNumber()}>*</button>
                            <button onClick={() => this.divideNumber()}>/</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Result: </h2>
                        </td>
                        <td>
                            <h2>{this.state.result}</h2>
                        </td>
                    </tr>
                </table>
            </>
        )
    }
}

export default Calculator;