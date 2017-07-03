const Calc = {
	distanceBetween: (x1, y1, x2, y2) => Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)),
	distanceBetweenVec: (v1, v2) => Math.sqrt((v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y)),
	slope: (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1),
	angleBetween: (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1),
	angleDifference: (angleStart, angleTarget) => Math.atan2(Math.sin(angleTarget - angleStart), Math.cos(angleTarget - angleStart)),
	clamp: (value, min, max) => Math.max(min, Math.min(value, max)),
	randomBetween: (min, max, round = true) => {
		const rand = (Math.random() * (max - min + 1)) + min;

		return (round) ? ~~rand : rand;
	},

	// https://github.com/processing/p5.js
	// https://github.com/processing/p5.js/blob/master/src/math/calculation.js#L440
	map: (value, start1, stop1, start2, stop2) => ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2,
}