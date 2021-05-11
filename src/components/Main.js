import React, { useReducer } from 'react';
import { initState } from '../state/initState';
import { reducer } from '../state/reducer';
import { CSSPlugin, gsap } from 'gsap';
import Container from './Monitor/Container';

gsap.registerPlugin(CSSPlugin)

function Main(props) {

	const [ state, dispatch ] = useReducer(reducer, initState)

	return (
		<>
			<Container state={state} dispatch={dispatch}/>
		</>
	)

}

export default Main;
