import React, { useReducer } from 'react';
import { initState } from '../styles/state/initState';
import { reducer } from '../styles/state/reducers';
import Container from './Screen/Container';

function Main(props) {

	const [ state, dispatch ] = useReducer(reducer, initState)

	return (
		<Container state={state} dispatch={dispatch}/>
	)

}

export default Main;
