import React, { useState } from 'react';
import styled from 'styled-components';
import { buttonRowSpec, buttonSpec } from '../../../state/dimensions';
import { calculateTransform } from '../../../util';

const CRTButton = styled.rect`
    stroke: rgb(180,180,180);
    stroke-width: .5;
    fill: rgba(20,20,20,0);
	cursor: pointer;
`

function Button(props) {

	const [ mouseDown, setMouseDown ] = useState();

	const { width, marginY } = buttonSpec;
	const { height } = buttonRowSpec;
	const buttonHeight = height - marginY * 2;
	const Icon = props.icon;
	const scaleOnClick = .95;

	function handleMouseDown(evt) {

		props.onClick()

		let timeoutId;
		let intervalId;

		function handleMouseUp() {		
			const timePassed = performance.now() - timeStamp;
			function reset() {
				setMouseDown(false);
				window.removeEventListener('mouseup', handleMouseUp);
				window.clearTimeout(timeoutId);
				window.clearInterval(intervalId)
			}
			if (timePassed > 200) {
				reset()
			} else {
				window.setTimeout(reset, 200 - timePassed)
			}
		}

		const timeStamp = performance.now()
		setMouseDown(true);
		window.addEventListener('mouseup', handleMouseUp);
		timeoutId = window.setTimeout(() => {
			intervalId = window.setInterval(props.onClick, 200);
		}, 700)

		evt.preventDefault();
	}

	const transform = calculateTransform({
		x: props.x, y: marginY, width, 
		height: buttonHeight, scale: scaleOnClick,
		phase: mouseDown ? 1 : 0
	})

	return (
		<g 
			transform={transform}
			onMouseDown={handleMouseDown}
			>
				<g>
			<CRTButton x={0} y={0} width={width} height={buttonHeight} rx={.3} ry={.3}/>
			<Icon height={buttonHeight} width={width} />
				</g>
		</g>
	)
}

export default Button;
