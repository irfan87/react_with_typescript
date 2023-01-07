import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export const Button = ({
	children,
	styles,
	...props
}: { children: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement> & {
		styles: CSSProperties;
	}) => {
	return (
		<button style={styles} {...props}>
			{children}
		</button>
	);
};
