import React from 'react';
import { monitorColor, outlineGrey } from '../../state/theme';

function Outline(props) {

	return (
		<rect x={0} y={0} width={100} height={100}
			fill={monitorColor} 
			stroke={outlineGrey}
			strokeWidth={1}
			rx={2} ry={2}/>
	)
}

export default Outline;
