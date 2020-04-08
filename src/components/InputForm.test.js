import React from "react";
import {render} from '@testing-library/react';
import InputForm from "./InputForm";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test('renders InputValue Form to gather information from user', () => {
    const { getByPlaceholderText } = render(<InputForm />);
    const textElement = getByPlaceholderText(/Enter value here/i);
    expect(textElement).toBeInTheDocument();
})