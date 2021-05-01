import React from 'react';
import WaveformLine from '../../styles/WaveformLine';

function Waveform( {waveshape, frequency} ) {

	function calculatePolyline(fn, resolution, frequency) {
		const interval = 1 / resolution;
		let points = [];
		let i = 0;
		while (i < 1) {
			const str = `${i * 100}, ${fn((i * frequency) * Math.PI*2) * 50 + 50}`
			points.push(str);
			i += interval
		}
		return points.join(" ")
	}

	return (
		<WaveformLine points={calculatePolyline(waveshape, 1000, frequency)} />
	)

}

export default Waveform;
