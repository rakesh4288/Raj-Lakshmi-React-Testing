import SumComponent from "../Component/SumComponent";

test("Testing for Sum Function 1", () => {
    let a = 10;
    let b = 20;
    let output = 30;
    expect(SumComponent(a, b)).toBe(output);
});

test("Testing for Sum Function 2", () => {
    expect(SumComponent(100, 200)).toBe(300)
});