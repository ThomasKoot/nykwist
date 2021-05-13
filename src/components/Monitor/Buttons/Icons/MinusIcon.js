import React from 'react';

function MinusIcon({width, height}) {

	const hScale = .65

	return (
		<line 
			x1={width/2 - height/2*hScale}
			x2={width/2 + height/2*hScale}
			y1={height/2}
			y2={height/2} />

	)

}

export default MinusIcon;
