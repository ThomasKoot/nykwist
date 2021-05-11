import React from 'react';
import { outlineGrey } from '../../../../state/theme';
import IconWrapper from './IconWrapper';

function SelectIcon({width, height}) {

	const padding = .3 * height;

	return (
		<IconWrapper>
			<text 
				x={padding} 
				y={height - padding} 
				textLength={width - padding * 2} 
				lengthAdjust="spacingAndGlyphs"
				fill={outlineGrey}
				stroke="none"
				style={{
					fontSize: 3.5,
					}}>
					sel
			</text>
		</IconWrapper>
	)

}

export default SelectIcon;
