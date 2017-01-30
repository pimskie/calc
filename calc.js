const Calc = {
	distanceBetween: (x1, y1, x2, y2) => Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)),
	slope: (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1),
	angleBetween: (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1),
	angleDifference: (angleStart, angleTarget) => Math.atan2(Math.sin(angleTarget - angleStart), Math.cos(angleTarget - angleStart)),
	clamp: (value, min, max) => Math.max(min, Math.min(value, max)),
	randomBetween: (min, max, round = true) => {
		const rand = (Math.random() * (max - min + 1)) + min;

		return (round) ? ~~rand : rand;
	}
}