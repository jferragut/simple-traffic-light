import React, { useState } from "react";

export function Home() {
	const [color, setColor] = useState("red");
	return (
		<div className="d-flex flex-column align-items-center">
			<div className="cable"></div>
			<div className="light-container p-3">
				<div
					className={
						color === "red" ? "light red selected" : "light red"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "light yellow selected"
							: "light yellow"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color === "green"
							? "light green selected"
							: "light green"
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);
}
