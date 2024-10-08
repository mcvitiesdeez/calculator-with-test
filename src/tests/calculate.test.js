import { test } from "vitest";
import { calculate } from "../calculate";

test("calculate addition", ({ expect }) => {
    expect(calculate(5, 7, "+")).toBe(12);
});