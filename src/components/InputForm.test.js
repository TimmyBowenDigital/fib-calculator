import React from "react";
import {render} from '@testing-library/react';
import InputForm from "./InputForm";

test('renders InputValue Form to gather information from user', () => {
    const { getByText } = render(<InputForm />);
    const textElement = getByText(/Enter value here:/i);
    expect(textElement).toBeInTheDocument();
})