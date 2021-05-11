import React from 'react';
import IconWrapper from './IconWrapper';

function OnOffIcon({width, height}) {

	return (
		<IconWrapper>
			<circle 
				cx={width/2} 
				cy={height/2} 
				r={height/2*0.6} 
				/>
			<line 
				x1={width/2}
				x2={width/2}
				y1={0 + height * .3}
				y2={height * .7}
			/>
		</IconWrapper>
	)

}

export default OnOffIcon;
