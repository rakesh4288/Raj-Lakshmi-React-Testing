import { render, screen } from "@testing-library/react"
import GetByLabelText from "../Pages/getByLabelText";

test("Case 1: Testing Label of Input", () =>{
    render(<GetByLabelText/>);
    const input = screen.getByLabelText("Enter User Name");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue();
});

test("Case 2: Testing Label of Checkbox", () =>{
    render(<GetByLabelText/>);
    const checkbox = screen.getByLabelText("Enter User Skills");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
});