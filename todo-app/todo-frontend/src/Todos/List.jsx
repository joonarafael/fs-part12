import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
	return (
		<>
			{todos.map((todo) => (
				<React.Fragment key={todo.id}>
					<hr />
					<Todo
						todo={todo}
						onDelete={() => deleteTodo(todo)}
						onComplete={() => completeTodo(todo)}
					/>
				</React.Fragment>
			))}
		</>
	);
};

export default TodoList;
