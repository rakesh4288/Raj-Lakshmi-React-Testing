import { render, screen } from "@testing-library/react";
import MultipleElementsCustomRole from "../Component/MultipleElementsCustomRole";

// we can not find two button with only using getByRole
// We need to use the data-testid or name attributes

test("Case 1: Checking Button Elements", () => {
    render(<MultipleElementsCustomRole/>);
    // First Button
    const getDetails= screen.getByRole("button", {name: 'Get Details'});
    expect(getDetails).toBeInTheDocument();

    // Second Button
    const registration = screen.getByRole("button", {name: "Registration"});
    expect(registration).toBeInTheDocument();
});

// Let's test multiple textbox

test("Case 2: Checking Textbox Element", ()=> {
    render(<MultipleElementsCustomRole/>);
    const inputField1 = screen.getByTestId("userName");
    const inputField2 = screen.getByTestId("userCity");
    expect(inputField1).toBeInTheDocument();
    expect(inputField2).toBeInTheDocument();

    const inputField3 = screen.getByRole("textbox", {name: "Student Name"});
    const inputField4 = screen.getByRole("textbox", {name: "Student City"});
    expect(inputField3).toBeInTheDocument();
    expect(inputField4).toBeInTheDocument();
});