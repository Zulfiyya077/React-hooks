import React from "react";
import { useTheme } from "../components/ThemeContext";
import Toggle from "../components/toggle/Toggle";

const Contact = () => {
	const { theme } = useTheme();

	const styles = {
		container: {
			width: "100%",
			backgroundColor: theme === "light" ? "#fff" : "#212529",
			color: theme === "light" ? "#000" : "#fff",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	};

	return <div style={styles.container}><Toggle/></div>;
};

export default Contact;
