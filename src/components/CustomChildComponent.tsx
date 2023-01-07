import { ReactNode } from "react";
import { Box } from "./generics/Box.generics";

interface CustomChildProps {
	title: string;
	body: string;
	children: ReactNode;
}

export const CustomChildComponent = ({
	title,
	body,
	children,
}: CustomChildProps) => {
	return (
		<>
			<h1>{title}</h1>
			<div>{body}</div>
			<div>{children}</div>
			<Box
				display="flex"
				justifyContent={"center"}
				fontWeight="bold"
				backgroundColor={"white"}
				color="blue"
				margin="30px"
				padding="30px 30px"
				borderRadius={20}
			>
				This is the Box Children
			</Box>
		</>
	);
};
