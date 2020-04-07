import * as React from "react";
import fibCalculator from "../../scripts/FibCalculator";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            calculatedFibValue: '',
            calculatedValueShown: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        let calculatedValueShown = event.target.value !== '';
        this.setState({
            inputValue: event.target.value,
            calculatedFibValue: fibCalculator(event.target.value),
            calculatedValueShown: calculatedValueShown
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        console.log("submitted");
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter value here: <input type={"number"} value={this.state.inputValue} onChange={this.handleChange} /></label>
                {this.state.calculatedValueShown &&
                    <input value={this.state.calculatedFibValue} readOnly={true} />
                }
                <button type={"submit"} value={"Submit"}>Submit</button>
            </form>
        );
    }
}

export default InputForm;