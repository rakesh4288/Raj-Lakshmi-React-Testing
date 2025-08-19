import { screen, render, fireEvent } from "@testing-library/react";
import InputElement from '../Component/InputElement';


test("InputElement Component - Case 1: Testing User Name Input box", () => {
  render(<InputElement />);
  const inputBox = screen.getByTestId('userId');
  expect(inputBox).toBeInTheDocument();

  const inputPlaceholder = screen.getByPlaceholderText('Enter user Name');
  expect(inputPlaceholder).toBeInTheDocument();

  expect(inputBox).toHaveAttribute("name", "userName");
  expect(inputBox).toHaveAttribute("id", "userId");
  expect(inputBox).toHaveAttribute("value", "Rakesh Shah");
});

test("InputElement Component - Case 2: Testing onChange Event for User Address Input Box", ()=>{
  render(<InputElement/>);
  const userAddressInput = screen.getByTestId("userAddress");
  fireEvent.change(userAddressInput, {target: {value: 'abc'}});
  expect(userAddressInput.value).toBe("abc");
});