import React from 'react';
import Legend from './Legend';
import Light from './Light';

function LightAndLegend({x, label, active}) {

	return (
		<>
			<Light state={active ? "active" : "inActive"} x={x} />
			<Legend x={x} text={label}/>
		</>
	)
}

export default LightAndLegend;
