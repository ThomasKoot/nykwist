import React from 'react';
import { generatePolylineString, pipe, scaleToScreen } from '../../../util';
import { calculateWaveform } from './calculateWaveform';

function Waveform( {waveshape, frequency, amplitude, phase} ) {

	const spec = { waveshape, frequency, phase, amplitude, resolution: 1000 }

	const polyLineString = pipe(spec, [
		calculateWaveform,
		points => points.map(scaleToScreen),
		generatePolylineString
	])

	return (
		<polyline 
			style={{
				stroke: "white",
				strokeWidth: .8,
				fill: 'none'
			}}
			points={polyLineString} />
	)

}

export default Waveform;
