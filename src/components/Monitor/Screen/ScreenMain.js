import React, { useRef } from 'react';
import { screenSpec } from '../../../state/dimensions';
import Grid from './Grid';
import SampledWave from './SampledWave';
import ScreenBackground from './ScreenBackground';
import Waveform from './Waveform';
import useScreenAnimation from './useScreenAnimation';

function Screen( {state} ) {

	const screenRef = useRef();

	useScreenAnimation(screenRef, state.isOn);
	
	return (
		<>
			<g ref={screenRef} 
				clipPath="url(#screen-background)" 
				transform={`translate(${screenSpec.xStart},${screenSpec.yStart})`}>
				<ScreenBackground />
				<Grid 
					sampleRate={state.sampleRate} 
					bitDepth={state.bitDepth}/>
				<Waveform 
					waveshape={state.waveshape} 
					frequency={state.frequency}
					amplitude={state.amplitude}
					phase={state.phase}/>
				<SampledWave state={state} />
			</g>
		</>
	)

}

export default Screen;
