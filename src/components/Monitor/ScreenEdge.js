import React from 'react';
import { screenEdgeSpec } from '../../state/dimensions';

function ScreenEdge(props) {

	const {xStart, xRange, yStart, yRange} = screenEdgeSpec
	
	return (
		<g>
			<rect x={xStart} y={yStart} width={xRange} height={yRange} fill='rgb(218,219,206)'/>
			<polyline points={
				`${xStart},${yStart} 50,${yStart + 33} ${xStart + xRange}, ${yStart}`
			} fill={'rgb(196,198,185)'}/> 
			<polyline points={
				`${xStart},${yStart + yRange} 50,${yStart - 33 + yRange} ${xStart + xRange}, ${yStart + yRange}`
			} fill={'rgb(196,198,185'}/> 
		</g>
	)

}

export default ScreenEdge;
