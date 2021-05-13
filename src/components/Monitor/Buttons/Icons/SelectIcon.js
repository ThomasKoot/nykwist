import React from 'react';
import { outlineGrey } from '../../../../state/theme';

function SelectIcon({width, height}) {

	const padding = .3 * height;

	return (
		<>
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
		</>
	)

}

export default SelectIcon;
