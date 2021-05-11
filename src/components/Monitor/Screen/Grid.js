import React from 'react';
import { screenSpec } from '../../../state/dimensions';
import GridLine from '../../../styles/GridLine';

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

	function generateSampleRateLineSpecs( {xRange, yRange} ) {
		return function (xArr) {
			return xArr.map(x => {
				return ({
					"x1": x * xRange,
					"x2": x * xRange,
					"y1": 0,
					"y2": yRange,
					"key": "lineX" + x
				})
			})
		}
	}

	function generateBitDepthLineSpecs( {xRange, yRange } ) {
		return function (yArr) {
			return yArr.map(y => {
				return [
					{
						"x1" : 0,
						"x2" : xRange,
						"y1" : (yRange/2) - yRange/2*y,
						"y2" : (yRange/2) - yRange/2*y,
						"key" : "yLinePos" + y
					},{
						"x1" : 0,
						"x2" : xRange,
						"y1" : (yRange/2) + yRange/2*y,
						"y2" : (yRange/2) + yRange/2*y,
						"key" : "yLineNeg" + y
					}
				]
			})
		}
	}

	const xArr = calculateGridLines(sampleRate);
	const yArr = calculateGridLines(bitDepth / 2);

	return (
		<g>	
			{
				generateSampleRateLineSpecs(screenSpec)(xArr).map(spec => {
					return <GridLine {...spec}/>
				})
			} 
			{
				generateBitDepthLineSpecs(screenSpec)(yArr).map(specs => {
					return specs.map(spec => <GridLine {...spec} />)
				})
			}
		</g>
	)
}

export default Grid;
