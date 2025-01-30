import React, { useState } from "react";
import style from "./toggle.module.css";

function Toggle() {
	const [isVisible, setIsVisible] = useState(false);

	const visibility = () => setIsVisible(!isVisible);

	return (
		<div className={style.imgBox}>
			<div className={style.image}>
				{isVisible && (
					<img className={style.imgBlue} src="src/assets/blue-rose.png" />
				)}
			</div>
			<button className={style.btn} onClick={visibility}>
				{isVisible ? "Hide" : "Show"}
			</button>
		</div>
	);
}

export default Toggle;
