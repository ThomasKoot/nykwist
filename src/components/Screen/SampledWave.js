import React from 'react';
import SampledLine from '../../styles/SampledLine';

function SampledWave(props) {

	function calculatePoints( {waveshape, frequency, sampleRate, bitDepth } ) {
		const samplingInterval = 1 / sampleRate;
		const bitDepthInterval = 2 / bitDepth; 
		let pointsArray = [];
		let i = 0;
		while (i < 1) {
			const result = waveshape(i * frequency * Math.PI * 2);
			const roundedResult = Math.round(result / bitDepthInterval)
			pointsArray.push([i * 100, 50 + roundedResult * bitDepthInterval * 50]);
			i += samplingInterval
		}
		return pointsArray
	}

	function calculatePolyline(points) {
		let current;
		let prev;
		let waveArray = []
		while (points.length) {
			current = points.shift()
			if (prev) {
				waveArray.push([current[0], prev[1]])
			} 
			waveArray.push(current);
			prev = current;
		}
		return waveArray.map(p => p.join(",")).join(" ")
	}

	return (
		<SampledLine points={calculatePolyline(calculatePoints(props.state))} />
	)

}

export default SampledWave;
