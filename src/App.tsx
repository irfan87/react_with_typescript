import { useReducer, useState } from "react";
import "./App.css";

import { AddNewTodoComponent } from "./components/AddNewTodoComponent";
import { CustomChildComponent } from "./components/CustomChildComponent";
import { Button } from "./components/generics/Button.generics";
import { MyNetworkRequest } from "./components/MyNetworkRequest";

import { Todo } from "./interface/Todo";

const initialState = {
	count: 0,
};

enum ACTION_TYPE {
	increment = "increment",
	decrement = "decrement",
}

function reducer(state: typeof initialState, action: { type: ACTION_TYPE }) {
	switch (action.type) {
		case ACTION_TYPE.increment:
			return { count: state.count + 1 };
		case ACTION_TYPE.decrement:
			return { count: state.count - 1 };
		default:
			return { ...state };
	}
}

function App() {
	const [items, setItems] = useState<Todo[]>([]);

	const [state, dispatch] = useReducer(reducer, initialState);

	const sendGreetings = () => {
		console.log("test");
	};

	const addNewTodo = (text: Todo["text"]) => {
		return setItems([...items, { text, id: items.length + 1 }]);
	};

	const removeItem = (id: Todo["id"]) => {
		return setItems([...items.filter((item) => item.id !== id)]);
	};

	return (
		<div className="App">
			<CustomChildComponent title={"test title"} body={"test body"}>
				<div>
					<h3>This render through children of CustomChildComponent</h3>
				</div>
				<Button
					onClick={() => sendGreetings()}
					styles={{ backgroundColor: "green" }}
				>
					Click me
				</Button>
			</CustomChildComponent>
			<AddNewTodoComponent handleClick={addNewTodo} />
			<h1>You have {items.length} todos</h1>
			<div>Count: {state.count}</div>
			<button onClick={() => dispatch({ type: ACTION_TYPE.decrement })}>
				-
			</button>
			<button onClick={() => dispatch({ type: ACTION_TYPE.increment })}>
				+
			</button>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<span>{item.text}</span>
						<button onClick={() => removeItem(item.id)}>X</button>
					</li>
				))}
			</ul>
			<MyNetworkRequest />
		</div>
	);
}

export default App;
