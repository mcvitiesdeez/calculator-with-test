import { test } from "vitest";
import { calculate } from "../calculate";

test("calculate addition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
});

test("calculate subtraction", ({ expect }) => {
    expect(calculate(10, 5, "-")).toBe(5);
});

test("calculate multiplication", ({ expect }) => {
    expect(calculate(5, 2, "*")).toBe(10);
})

test("calculate division", ({ expect }) => {
    expect(calculate(10, 5, "/")).toBe(2);
})

test("calculate zero division", ({ expect }) => {
    expect(calculate(10, 0, "/")).toBe("Error: Cannot divide by zero");
})

test("calculate invalid operator", ({ expect }) => {
    expect(() => calculate(2, 3, "%")).toThrowError("Invalid Operator");
})