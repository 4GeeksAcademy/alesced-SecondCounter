import React, {useState, useEffect} from "react";
import SecondCounter from "./SecondCounter";

const Home = () => {

	const [time, setTime] = useState(0);
	const [startvalue, setStartValue] = useState(0);
	const [direction, setDirection] = useState("up");
	const [running, setRunning] = useState(false);

	useEffect(() => {
		if (!running) return

		const interval = setInterval(() => {
			setTime((prev) => direction === 'up' ? prev + 1 : prev > 0 ? prev - 1 : 0 
			)
		}, 1000);

		return () => clearInterval(interval);

	}, [running, direction])

	const handleStart = () => {
		setTime(Number(startvalue));
		setRunning(true);
	};

	const handleStop = () => {
		setTime (0);
		setRunning(false);
	}

	return (
		<div className="text-center">
			<h1 className="text-white">Second Counter</h1>
			<input
				type="number"
				value={startvalue}
				onChange={(e) => setStartValue(e.target.value)}
				placeholder="Escribe un número"
				min = {0}
			/>
			<SecondCounter time = {time} />
			<select
			onChange={(e) => setDirection(e.target.value)}
			value={direction}
			>
				<option value="up">Ascendente</option>
				<option value="down">Descendente</option>
			</select>
			<button onClick={handleStart}>Start Timer</button>
			<button onClick={handleStop}>Reset Timer</button>
		</div>
	);
};

export default Home;