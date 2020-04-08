import * as React from "react";
import calculateFibAt from "../service/CalculateFibAt";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            calculatedFibValue: '',
            calculatedValueShown: false,
            inputValueErrorMessage: '',
            showInputValueError: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.showCalculatedValue = this.showCalculatedValue.bind(this);
        this.showInputValueError = this.showInputValueError.bind(this);
    }

    handleChange(event) {
        if(event.target.value > 2222 || event.target.value < 0) {
            const inputValueErrorMessage = "The value you entered was above the theoretical limit, please enter a value between 0 and 2222 to receive a value";
            this.setState({
                inputValueErrorMessage: inputValueErrorMessage,
                inputValue: event.target.value,
            });
        } else {
            this.setState({
                inputValue: event.target.value,
                calculatedFibValue: calculateFibAt(event.target.value)
            });
        }
        event.preventDefault();
    }

    showCalculatedValue() {
        return this.state.inputValue !== '' && !this.showInputValueError();
    }

    showInputValueError() {
        return this.state.inputValue > 2222 || this.state.inputValue < 0;
    }

    render() {
        return (
            <form>
                <div><input type={"number"} ref={"inputValue"} maxLength={4} value={this.state.inputValue} onChange={this.handleChange} placeholder={"Enter value here"}  /></div>
                <div>
                    {this.showCalculatedValue() &&
                        <label>Calculated Fibonacci value: {this.state.calculatedFibValue}</label>
                    }
                    {this.showInputValueError() &&
                        <label className={"ErrorMessage"}>Input Error: {this.state.inputValueErrorMessage}</label>
                    }
                </div>
            </form>
        );
    }
}

export default InputForm;