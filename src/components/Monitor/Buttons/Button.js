import React, { useState } from 'react';
import { buttonRowSpec, buttonSpec } from '../../../state/dimensions';
import { outlineGrey } from '../../../state/theme';
import { calculateTransform } from '../../../util';
import { autoRepeatClick } from './autoRepeatClick';

function Button(props) {

	const [ mouseDown, setMouseDown ] = useState();

	const { width, marginY } = buttonSpec;
	const { height } = buttonRowSpec;
	const buttonHeight = height - marginY * 2;
	const scaleOnClick = .95;

	const Icon = props.icon;

	const transform = calculateTransform({
		x: props.x, y: marginY, width, 
		height: buttonHeight, scale: scaleOnClick,
		phase: mouseDown ? 1 : 0
	})

	return (
		<g 	transform={transform}
			onMouseDown={autoRepeatClick(props.onClick, setMouseDown)}
			style={{cursor: "pointer"}}
			fill='rgba(0,0,0,0)'
			stroke={outlineGrey}
			strokeWidth={.5}
			>
				<g>
					<rect 
						x={0} 
						y={0} 
						width={width} 
						height={buttonHeight} 
						rx={.3} 
						ry={.3}/>
					<Icon 
						height={buttonHeight} 
						width={width} />
				</g>
		</g>
	)
}

export default Button;
