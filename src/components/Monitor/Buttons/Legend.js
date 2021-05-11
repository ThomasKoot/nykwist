import React from 'react';
import { legendSpec, ligthSpec } from '../../../state/dimensions';
import { outlineGrey } from '../../../state/theme';

function Legend(props) {

	const { yOffset } = legendSpec;
	const lightWidth = ligthSpec.width

	return (
		<text x={props.x + lightWidth / 2} y={yOffset}
			fontSize={2.3}
			textAnchor={"middle"}
			fill={outlineGrey}
			stroke='none'
			>{props.text}</text>
	)

}

export default Legend;
