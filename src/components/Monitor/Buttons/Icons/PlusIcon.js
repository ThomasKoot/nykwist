import React from 'react';
import IconWrapper from './IconWrapper';

function PlusIcon({width, height}) {

	const hScale = .65

	return (
		<IconWrapper>
			<line 
				x1={width/2 - height/2*hScale}
				x2={width/2 + height/2*hScale}
				y1={height/2}
				y2={height/2} />
			<line 
				x1={width/2}
				x2={width/2}
				y1={0 + height * (1-hScale)/2 }
				y2={height * (1-hScale)/2 + height * hScale}
				/>
		</IconWrapper>
	)

}

export default PlusIcon;
