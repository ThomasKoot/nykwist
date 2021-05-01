import React from 'react';
import Screen from '../../styles/Screen';
import Grid from './Grid';
import SampledWave from './SampledWave';
import Waveform from './Waveform';

function Container({state, dispatch}) {

	const { sampleRate, bitDepth } = state

	return (
		<Screen 
			viewBox="-2 -2 104 104" 
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="none">
			<Grid sampleRate={sampleRate} bitDepth={bitDepth}/>
			<Waveform waveshape={state.waveshape} frequency={state.frequency}/>
			<SampledWave state={state} />
		</Screen>
	)
}

export default Container;
