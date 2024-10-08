import { test } from "vitest";
import { calculate } from "../calculate";

test("addition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
});

test("subtraction", ({ expect }) => {
    expect(calculate(10, 5, "-")).toBe(5);
});

test("multiplication", ({ expect }) => {
    expect(calculate(5, 2, "*")).toBe(10);
})

test("division", ({ expect }) => {
    expect(calculate(10, 5, "/")).toBe(2);
})

test("zero division", ({ expect }) => {
    expect(calculate(10, 0, "/")).toBe("Error: Cannot divide by zero");
})

test("invalid operator", ({ expect }) => {
    expect(() => calculate(2, 3, "%")).toThrowError("Invalid Operator");
})