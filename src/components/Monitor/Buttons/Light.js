import React from 'react';
import { buttonRowSpec, ligthSpec } from '../../../state/dimensions';
import { ligthColors } from '../../../state/theme';

function Light({state = "active", x}) {

	const { width, marginY } = ligthSpec;
	const { height } = buttonRowSpec;
	const lightHeight = height - marginY * 2;

	return (
		<rect 
			x={x} 
			y={marginY} 
			width={width}
			height={lightHeight} 
			fill={ligthColors[state]}
			stroke='none'
			rx={.5}
			ry={.5}
			/>
	)

}

export default Light;
