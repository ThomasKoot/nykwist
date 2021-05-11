import React from 'react';
import IconWrapper from './IconWrapper';

function MinusIcon({width, height}) {

	const hScale = .65

	return (
		<IconWrapper>
			<line 
				x1={width/2 - height/2*hScale}
				x2={width/2 + height/2*hScale}
				y1={height/2}
				y2={height/2} />
		</IconWrapper>
	)

}

export default MinusIcon;
