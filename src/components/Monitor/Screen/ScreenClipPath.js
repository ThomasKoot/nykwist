import React from 'react';
import { screenSpec } from '../../../state/dimensions';

function ScreenClipPath(props) {

	const {xRange, yRange} = screenSpec

	return (
		<defs>
			<clipPath id='screen-background'>
			<rect x={0} y={0} width={xRange} height={yRange} 
				rx={1} ry={1}
				strokeWidth={.5}
				fill={'black'}
			/>
			</clipPath>
		</defs>
	)

}

export default ScreenClipPath;
