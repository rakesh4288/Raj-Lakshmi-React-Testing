import { fireEvent, render, screen } from "@testing-library/react"
import OnClickTesting from "../Component/OnClickTesting";


test("Click Component - Case 1: Checking Click Event", () => {
    render(<OnClickTesting />); // Firstly we need to render the component for testing purpose
    const btn = screen.getByRole("button"); // Now get the element which elment you want to test
    fireEvent.click(btn); // fireEvent is needed for checking click is pressed or not
    const newData = screen.getByText("Mr. Rakesh");
    expect(newData).toBeInTheDocument();
})