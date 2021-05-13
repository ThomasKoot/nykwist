import React from 'react';
import { screenSpec } from '../../../state/dimensions';

function Grid( {sampleRate, bitDepth} ) {

	function calculateGridLines(ratio) {
		const interval = 1 / ratio;
		let lines = [];
		let i = 0
		while (i <= 1) {
			lines.push(i)
			i += interval
		}
		return lines
	}

	function generateSampleRateLines(range, xArr) {
		const { xRange, yRange } = range
		return xArr.map(x => {
			return (
				<line 
					x1={x * xRange} 
					x2={x * xRange}
					y1={0}
					y2={yRange}
					key={"lineX" + x}
				/>
			)
		})
	}

	function generateBitDepthLines(range, yArr) {
		const { xRange, yRange } = range
		return yArr.map(y => {
			return (
				<React.Fragment key={"lineY" + y}>
					<line 
						x1={0} 
						x2={xRange}
						y1={(yRange/2) - yRange/2*y}
						y2={(yRange/2) - yRange/2*y}
					/>
					<line 
						x1={0} 
						x2={xRange}
						y1={(yRange/2) + yRange/2*y}
						y2={(yRange/2) + yRange/2*y}
					/>
				</React.Fragment>
			)
		})
	}

	const xArr = calculateGridLines(sampleRate);
	const yArr = calculateGridLines(bitDepth / 2);

	return (
		<g style={{stroke: 'black', strokeWidth: .05}}>	
			{
				generateSampleRateLines(screenSpec, xArr)
			} 
			{
				generateBitDepthLines(screenSpec, yArr)
			}
		</g>
	)
}

export default Grid;
