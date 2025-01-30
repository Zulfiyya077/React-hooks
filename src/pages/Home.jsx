import React from "react";
import { useTheme } from "../components/ThemeContext";
import Timer from "../components/timer/Timer";


const Home = () => {
	const { theme } = useTheme();

	const styles = {
		container: {
			width: "100%",
            height: "600px",
			backgroundColor: theme === "light" ? "#fff" : "#212529",
			color: theme === "light" ? "#000" : "#fff",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	};

	return <div style={styles.container}><Timer/></div>;
};

export default Home;
