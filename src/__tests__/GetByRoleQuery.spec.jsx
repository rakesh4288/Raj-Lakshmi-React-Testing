import { render, screen } from "@testing-library/react";
import GetByRoleQuery from "../Component/GetByRoleQuery";

test("Case 1: Testing textkbox by getByRole", () => {
    render(<GetByRoleQuery />); 
    // here we are rednering the component, so inside this component whatever we have can rener this
    const inputField = screen.getByRole("textbox"); 
    // Bydefault textbox is a getByRole queries 
    expect(inputField).toBeInTheDocument(); 
    // expect method just checking the element is present or not with toBeInTheDocument();
});

test("Case 2: Checking value from Textbox", () => {
    render(<GetByRoleQuery/>);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toHaveValue("Rakesh");
});

test("Case 3: Checking disabled from Textbox", () => {
    render(<GetByRoleQuery/>);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeDisabled();
});

test("Case 4: Checking button", () => {
    render(<GetByRoleQuery/>);
    const inputField = screen.getByRole("button"); // here we are directly calling the button element
    expect(inputField).toBeInTheDocument();
});