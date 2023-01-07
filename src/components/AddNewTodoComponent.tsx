import { useRef } from "react";
import { Todo } from "../interface/Todo";

interface AddNewTodoProps {
	handleClick: (text: Todo["text"]) => void;
}

export const AddNewTodoComponent = ({ handleClick }: AddNewTodoProps) => {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<div className="add-todo">
			<input type="text" placeholder="New Todo" ref={inputRef} />
			<button
				onClick={() => {
					if (inputRef.current && inputRef.current.value) {
						handleClick(inputRef.current.value);
						inputRef.current.value = "";
					}
				}}
			>
				Create
			</button>
		</div>
	);
};
