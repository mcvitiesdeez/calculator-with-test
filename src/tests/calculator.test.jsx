import { test, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Calculator from '../Calculator'

//Addition test
test('calculate addition', async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "+");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "7");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("7");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("12"))
})

//Subtraction test
test('calculate subtraction', async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "-");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "7");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("7");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("-2"))
})

//Mulplication test
test('calculate multiplication', async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "5");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("5");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "*");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "7");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("7");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("35"))
})

//Division test
test('calculate division', async () => {
    render(<Calculator />);

    const firstNumInput = screen.getByPlaceholderText("First number");
    userEvent.type(firstNumInput, "35");
    await waitFor(() => {
        expect(firstNumInput.value).toBe("35");
    });

    const operatorSelect = screen.getByRole("combobox");
    userEvent.selectOptions(operatorSelect, "/");

    const secondNumInput = screen.getByPlaceholderText("Second number");
    userEvent.type(secondNumInput, "7");
    await waitFor(() => {
        expect(secondNumInput.value).toBe("7");
    });

    userEvent.click(screen.getByRole("button", { name: "=" }));

    await waitFor(() =>
        expect(screen.getByPlaceholderText("Result").value).toBe("5"))
})