import { useState } from "react";
import "./App.css";
import { AddNewTodoComponent } from "./components/AddNewTodoComponent";
import { CustomChildComponent } from "./components/CustomChildComponent";
import { Button } from "./components/generics/Button.generics";
import { Todo } from "./interface/Todo";

function App() {
	const [items, setItems] = useState<Todo[]>([]);

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
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						<span>{item.text}</span>
						<button onClick={() => removeItem(item.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
