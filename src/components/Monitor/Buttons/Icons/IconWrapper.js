import React from 'react';
import { outlineGrey } from '../../../../state/theme';

function IconWrapper(props) {

	return (
		<g stroke={outlineGrey} strokeWidth={.5} fill="none" style={{pointerEvents: "none"}}>
			{props.children}
		</g>
	)

}

export default IconWrapper;
