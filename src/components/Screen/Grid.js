import React from 'react';
import GridLine from '../../styles/GridLine';

function Grid( {sampleRate, bitDepth} ) {

	function calculateGridLines(ratio) {
		const interval = 1 / ratio;
		let lines = [];
		let i = 0
		while (i < 1) {
			lines.push(i)
			i += interval
		}
		return lines
	}

	return (
		<g>	
			{
				calculateGridLines(sampleRate).map(x => {
					return <GridLine x1={x * 100} x2={x * 100} y1={0} y2={100} key={"linex" + x}/>
				})
			} 
			{
				calculateGridLines(bitDepth / 2).map(y => {
					const yScaled = y * 50
					return (
						<g key={"liney" + y}>
							<GridLine x1={0} x2={100} y1={50 - yScaled} y2={50 - yScaled} />
							<GridLine x1={0} x2={100} y1={50 + yScaled} y2={50 + yScaled} />
						</g>
					)
				})
			}
		</g>
	)
}

export default Grid;
