import React, { useState, useEffect } from "react";
import "./timer.module.css";

function Timer() {
	const [time, setTime] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime + 1);
		}, 1000);
	}, []);

	return (
		<div className="timecontainer">
			<div className="display">
				<h1>{time} saniyə</h1>
			</div>
		</div>
	);
}

export default Timer;
