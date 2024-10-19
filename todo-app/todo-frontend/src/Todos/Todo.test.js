import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Todo } from "./TodoList";

describe("Todo Component", () => {
	const mockDelete = jest.fn();
	const mockComplete = jest.fn();

	const todoDone = { text: "Test todo 1", done: true, id: 1 };
	const todoNotDone = { text: "Test todo 2", done: false, id: 2 };

	test("renders the todo text", () => {
		const { getByText } = render(
			<Todo
				todo={todoNotDone}
				onDelete={mockDelete}
				onComplete={mockComplete}
			/>
		);
		expect(getByText("Test todo 2")).toBeInTheDocument();
	});

	test('displays "This todo is done" when todo is done', () => {
		const { getByText } = render(
			<Todo todo={todoDone} onDelete={mockDelete} onComplete={mockComplete} />
		);
		expect(getByText("This todo is done")).toBeInTheDocument();
	});

	test('displays "This todo is not done" when todo is not done', () => {
		const { getByText } = render(
			<Todo
				todo={todoNotDone}
				onDelete={mockDelete}
				onComplete={mockComplete}
			/>
		);
		expect(getByText("This todo is not done")).toBeInTheDocument();
	});

	test("calls onDelete when Delete button is clicked", () => {
		const { getByText } = render(
			<Todo
				todo={todoNotDone}
				onDelete={mockDelete}
				onComplete={mockComplete}
			/>
		);
		fireEvent.click(getByText("Delete"));
		expect(mockDelete).toHaveBeenCalled();
	});

	test("calls onComplete when Set as done button is clicked", () => {
		const { getByText } = render(
			<Todo
				todo={todoNotDone}
				onDelete={mockDelete}
				onComplete={mockComplete}
			/>
		);
		fireEvent.click(getByText("Set as done"));
		expect(mockComplete).toHaveBeenCalled();
	});
});
