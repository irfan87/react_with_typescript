import { CSSProperties, ReactNode } from "react";

interface BoxProp {
	children: ReactNode;
}

export const Box = ({ children, ...styles }: BoxProp & CSSProperties) => {
	return <div style={styles}>{children}</div>;
};
