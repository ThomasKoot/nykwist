import React from 'react';
import { scaleToScreen, generatePolylineString, pipe } from '../../../util';
import { addConnectingLines, calculateSamples } from './samplingFunctions';

function SampledWave(props) {

	const { waveshape, frequency, sampleRate, bitDepth, amplitude, phase } = props;

	const spec = { waveshape, frequency, sampleRate, bitDepth, amplitude, phase }

	const polyLineString = pipe(spec, [
		calculateSamples,
		addConnectingLines,
		points => points.map(scaleToScreen),
		generatePolylineString
	])
	

	return (
		<polyline
			style={{
				strokeWidth: .5,
				stroke: 'red',
				fill: 'none'
			}} 
			points={polyLineString} />
	)

}

export default SampledWave;
