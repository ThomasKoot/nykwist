import React from 'react';
import { outlineGrey } from '../../state/theme';

function Logo(props) {

	return (
		<text
			fill={outlineGrey}
			fontSize={3}
			transform={'translate(96,96)'}
			textAnchor='end'
			cursor={'pointer'}
			onClick={() => window.location.href = 'http://www.thomascode.nl'}
			>
			www.thomascode.nl
		</text>
	)

}

export default Logo;
