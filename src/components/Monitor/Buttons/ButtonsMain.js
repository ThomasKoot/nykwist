import React from 'react';
import { buttonRowSpec } from '../../../state/dimensions';
import Button from './Button';
import ButtonOutline from './ButtonOutline';
import MinusIcon from './Icons/MinusIcon';
import OnOffIcon from './Icons/OnOffIcon'
import PlusIcon from './Icons/PlusIcon';
import SelectIcon from './Icons/SelectIcon';
import Light from './Light';
import LightAndLegend from './LightAndLegend';

function ButtonsMain({state, dispatch}) {

	const { x, y, width, height } = buttonRowSpec
	const lightRow = [
		{ param: "sampleRate", label: "sr" },
		{ param: "bitDepth", label: "bit"},
		{ param: "frequency", label: "Hz"},
		{ param: "amplitude", label: 'amp'},
		{ param: "phase", label: "phi"}
	]
	const buttonRow = [
		{icon: PlusIcon, key:"plusButton",
			onClick: () => dispatch({type: "INCREASE_ACTIVE_PARAM"})},
		{icon: MinusIcon, key: "minusButton",
			onClick: () => dispatch({type: "DECREASE_ACTIVE_PARAM"})},
		{icon: SelectIcon, key: "selectButton",
			onClick: () => dispatch({type: "SWITCH_ACTIVE_PARAM"})}
	]

	return (
		<g transform={`translate(${x},${y})`}> 
			<ButtonOutline width={width} height={height}/>
			{
				lightRow.map((spec, i) => {
					return <LightAndLegend 
						key={spec.label}
						x={8 + i * 5}
						active={state.isOn && spec.param === state.activeParam}
						label={spec.label}/>
				})
			}
			{
				buttonRow.map((spec, i) => {
					return <Button {...spec} x={40 + 7 * i}/>
				})
			}
			<Light x={65} state={state.isOn ? "active" : "off"}/>
			<Button x={72} 
				icon={OnOffIcon} 
				onClick={() => dispatch({type: "TOGGLE_ON_OFF"})}/>
		</g>
	)

}

export default ButtonsMain;
