import React from 'react';
import SampledLine from '../../../styles/SampledLine';
import { scaleToScreen } from '../../../util';

function SampledWave(props) {

	function calculateSamples( {waveshape, frequency, sampleRate, bitDepth, amplitude, phase } ) {
		const samplingInterval = 1 / sampleRate;
		const bitDepthInterval = 2 / bitDepth; 
		let pointsArray = [];
		let i = 0;
		while (i < 1) {
			const result = waveshape((i + phase) % 1 * frequency) * amplitude;
			const roundedResult = Math.round(result / bitDepthInterval)
			pointsArray.push([i, roundedResult * bitDepthInterval]);
			i += samplingInterval
		}
		const result = waveshape((i + phase) % 1 * frequency) * amplitude;
		const roundedResult = Math.round(result / bitDepthInterval)
		pointsArray.push([i, roundedResult * bitDepthInterval]);
		return pointsArray
	}

	function addConnectingLines(points) {
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
		return waveArray;
	}

	function generatePolylineString(spec) {
		const samples = calculateSamples(spec);
		const rectWave = addConnectingLines(samples)
		return rectWave.map(scaleToScreen).map(p => p.join(",")).join(" ")
	}

	return (
		<SampledLine points={generatePolylineString(props.state)} />
	)

}

export default SampledWave;
