import React from 'react';
import { outlineGrey } from '../../state/theme';

function Title(props) {

	return (
		<text
			transform="translate(50, 8)"
			textAnchor="middle"
			fontSize={10}
			fontFamily="Courier New"
			strokeWidth={.3}
			stroke={outlineGrey}
			fill={outlineGrey}
			>NYQ</text>
	)

}

export default Title;
