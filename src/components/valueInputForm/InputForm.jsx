import * as React from "react";
import fibCalculator from "../../scripts/FibCalculator";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        let fibValue = fibCalculator(this.state.value);
        console.log("This is the fib value: " + fibValue);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Enter value here: <input type={"number"} value={this.state.value} onChange={this.handleChange} /></label>
                <button type={"submit"} value={"Submit"}>Submit</button>
            </form>
        );
    }
}

export default InputForm;