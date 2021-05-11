import gsap from "gsap/gsap-core";
import { useRef, useEffect } from "react";
import { screenSpec } from "../../../state/dimensions";
import { infoP } from "../../../state/infoText";
import { textPadding } from "../../../state/theme";
import ScreenBackground from "./ScreenBackground";

function OffScreen(props) {

	const {xStart, yStart, xRange, yRange} = screenSpec;

	const infoText = useRef()

	useEffect(() => {
		if(!props.isOn) {
			gsap.to(infoText.current, {
				opacity: 1,
				duration: .3,
				delay: .8,
			})
		} else {
			gsap.killTweensOf(infoText.current)
			gsap.set(infoText.current, {
				opacity: 0,
			})
		}
	})

	const pStyle = {
		color: "white", 
		fontSize: 4, 
		padding: 0,
		margin: 0,
		fontFamily: "Courier New"
	}

	return (
		<g transform={`translate(${xStart}, ${yStart})`}>
			<ScreenBackground fill={'black'} />
			<foreignObject ref={infoText}
				x={textPadding} y={textPadding}
				width={xRange - textPadding * 2} 
				height={yRange - textPadding * 2}>
					<div  >
						<p style={pStyle}>
							{infoP}
						</p>				
					</div>
			</foreignObject>
		</g>
	)

}

export default OffScreen;
