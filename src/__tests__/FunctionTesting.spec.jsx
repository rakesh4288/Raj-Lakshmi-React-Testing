import { fireEvent, render, screen } from "@testing-library/react";
import FunctionTesting from "../Component/FunctionTesting";
import handleOtherMethod from "../Component/Helper";

test("Functional Testing - Case 1: Checking on Click Event", ()=>{
    render(<FunctionTesting/>); // Firstly we need to render the component for testing purpose
    const btn1 = screen.getByTestId("btn1"); // Now get the element which elment you want to test
    fireEvent.click(btn1); // fireEvent is needed for checking click is pressed or not
    const newData = screen.getByText("Phoenix, USA"); // this Text should be exact the same
    expect(newData).toBeInTheDocument();
});


// Now Here we will test the same function But this time it will called via outside like imports

test("Functional Testing - Case 2: Checking on Click Event outside function", () =>{
    expect(handleOtherMethod()).toMatch("Hi Ramya");
});