import * as React from "react";
import calculateFibAt from "../service/CalculateFibAt";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            calculatedFibValue: '',
            calculatedValueShown: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.showCalculatedValue = this.showCalculatedValue.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
            calculatedFibValue: calculateFibAt(event.target.value)
        });
        event.preventDefault();
    }

    showCalculatedValue() {
        return this.state.inputValue !== '';
    }

    formValidation(event) {

    }

    render() {
        return (
            <form>
                <label>Enter value here: <input type={"number"} value={this.state.inputValue} onChange={this.handleChange} max={9999}  /></label><br/>
                {this.showCalculatedValue() &&
                <label>Calculated Fibonacci value: {this.state.calculatedFibValue}</label>
                }
            </form>
        );
    }
}

export default InputForm;