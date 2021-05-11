import React from 'react';

function ButtonOutline({width, height}) {

	function createStyleObject(opacity, color='rgb(200,200,200)') {
		return {
			stopColor: color,
			stopOpacity: opacity
		}
	}

	console.log(width, height)

	return (
		<g>
			<defs>
				<linearGradient id="button-row" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" style={createStyleObject(1)} />
					<stop offset="4%" style={createStyleObject(.5)} />
					<stop offset="30%" style={createStyleObject(0)} />
					<stop offset="70%" style={createStyleObject(0)} />
					<stop offset="96%" style={createStyleObject(.5)} />
					<stop offset="100%" style={createStyleObject(1)} />
				</linearGradient>
				<linearGradient id="button-row-hor" x1="0%" y1="0%" x2="100%" y2="0%">
					<stop offset="0%" style={createStyleObject(0)} />
					<stop offset="10%" style={createStyleObject(1)} />
					<stop offset="90%" style={createStyleObject(1)} />
					<stop offset="100%" style={createStyleObject(0)} />
				</linearGradient>
			</defs>
			<mask id='button-row-mask'>
				<rect x={0} y={0} width={width} height={height} fill='url(#button-row-hor' />
			</mask>
			<rect x={0} y={0} width={width} height={height} 
				fill={'url(#button-row)'} mask='url(#button-row-mask)' />
		</g>
	)
}

export default ButtonOutline;
