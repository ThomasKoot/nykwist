import gsap from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
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
		<svg
			viewBox="-1 -1 102 102" 
			xmlns="http://www.w3.org/2000/svg"
			ref={containerRef}
			style={{
				visibility: 'hidden',
				width: '80vw',
				height: '80vh',
				zIndex: 2
			}}
			>
			<Outline />
			<Title />
			<ScreenClipPath />
			<ScreenEdge />
			<OffScreen isOn={state.isOn}/>
			<Screen state={state} />
			<ButtonsMain state={state} dispatch={dispatch}/>
			<Logo />
		</svg>
	)
}

export default Container;
