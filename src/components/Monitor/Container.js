import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import MonitorContainer from '../../styles/MonitorContainer';
import ButtonsMain from './Buttons/ButtonsMain';
import OffScreen from './Screen/OffScreen';
import Outline from './Outline';
import Screen from './Screen/ScreenMain';
import ScreenClipPath from './Screen/ScreenClipPath';
import ScreenEdge from './ScreenEdge';
import Title from './Title';
import Logo from './Logo';

function Container({state, dispatch}) {

	const containerRef = useRef()
	
	useEffect(() => {
		gsap.set(containerRef.current, {
			visibility: 'visible'
		})
	}, [])


	return (
		<MonitorContainer
			viewBox="-1 -1 102 102" 
			xmlns="http://www.w3.org/2000/svg"
			ref={containerRef}
			style={{visibility: 'hidden'}}
			>
			<Outline />
			<Title />
			<ScreenClipPath />
			<ScreenEdge />
			<OffScreen isOn={state.isOn}/>
			<Screen state={state} />
			<ButtonsMain state={state} dispatch={dispatch}/>
			<Logo />
		</MonitorContainer>
	)
}

export default Container;
