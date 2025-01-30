import React from "react";
import { useTheme } from "../components/ThemeContext";
import Fact from "../components/apiData/Fact";


const About = () => {
	const { theme } = useTheme();

	const styles = {
		container: {
			
			backgroundColor: theme === "light" ? "#fff" : "#212529",
			color: theme === "light" ? "#000" : "#fff",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	};

	return <div style={styles.container}>
        <Fact />
    </div>;
};

export default About;
