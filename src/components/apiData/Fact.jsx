import React, { useState, useEffect } from "react";
import style from "./apidata.module.css";

function Fact() {
	const [fact, setFact] = useState("");

	useEffect(() => {
		fetch("https://uselessfacts.jsph.pl/random.json?language=en")
			.then((response) => response.json())
			.then((data) => {
				setFact(data.text);
			})

			.catch((error) => {
				console.log("error");
			});
	}, []);

	return (
		<div className={style.factBox}>
			<div className={style.fact}>
				<h1>Fact</h1>
				<p>{fact}</p>
			</div>
		</div>
	);
}

export default Fact;
