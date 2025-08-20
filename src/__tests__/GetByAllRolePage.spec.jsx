import { render, screen } from "@testing-library/react"
import GetByAllRolePage from "../Pages/GetByAllRolePage"

test("Case 1: Testing All Buttons", () => {
    render(<GetByAllRolePage />);
    const buttons = screen.getAllByRole("button"); 
    // this btns will get the all buttons in array format
    expect(buttons[0]).toBeInTheDocument(); // this will run the 0 index from the array
    expect(buttons[1]).toBeInTheDocument(); // this will run the 1 index from the array

    // But what if we have multiple bttons on the page. Then in that case we can use the for loop
    for(let i =0; i<buttons.length; i ++) {
        expect(buttons[i]).toBeInTheDocument();
    }
});

test("Case 2: Testing All Options", () => {
    render(<GetByAllRolePage/>);
    const options= screen.getAllByRole("option");
    for(let i = 0; i<options.length; i ++){
        expect(options[i]).toBeInTheDocument();
    }
});