import React from 'react';
import WaveformLine from '../../../styles/WaveformLine';
import { scaleToScreen } from '../../../util';


function Waveform( {waveshape, frequency, amplitude, phase} ) {

	function generateWavePolyline(waveshape, frequency, amplitude, phase) {
		const points = calculateWavePoints(waveshape, frequency, amplitude, phase);
		return points.map(scaleToScreen).map(p => p.join(",")).join(" ")
	}

	function calculateWavePoints(fn, frequency, resolution, phase) {
		const interval = 1 / resolution;
		let points = [];
		let i = 0;
		while (i < 1) {
			const point = [i, fn((phase + i) % 1 * frequency) * amplitude]
			points.push(point);
			i += interval
		}
		return points
	}

	return (
		<WaveformLine points={generateWavePolyline(waveshape, frequency, 1000, phase)} />
	)

}

export default Waveform;
