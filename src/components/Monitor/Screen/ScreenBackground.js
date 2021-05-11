import React from 'react';
import { screenSpec } from '../../../state/dimensions';
import { screenBackground } from '../../../state/theme';

function ScreenBackground({fill, stroke}) {

	const {xRange, yRange} = screenSpec

	return (
		<>
			<radialGradient id = "g1" cx = "25%" cy = "50%" r = "100%">
				<stop stopColor = "rgb(220,220,220)" offset={0}/>
				<stop stopColor={screenBackground} offset={100}/>
			</radialGradient>
			<rect x={0} y={0} width={xRange} height={yRange} 
				rx={1} ry={1}
				strokeWidth={.5}
				fill={fill ? fill : "url(#g1)"}
				stroke={stroke ? 'black' : 'none'}
			/>
		</>
	)
}

export default ScreenBackground;
