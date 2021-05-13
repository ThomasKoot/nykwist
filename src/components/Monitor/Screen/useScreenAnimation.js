import gsap from 'gsap/gsap-core'
import { useEffect } from 'react'

function useScreenAnimation(ref, isOn) {

    useEffect(() => {
		gsap.set(ref.current, {
			transformOrigin: "center",
			scale: 0
		})
	}, [ref])

	useEffect(() => {
		if (isOn) {
			gsap.killTweensOf(ref.current)
			gsap.to(ref.current, {
				scaleX: 1,
				duration: .3,
			})
			gsap.to(ref.current, {
				scaleY: 1,
				duration: .6,
				delay: .3
			})
		} else {
			gsap.to(ref.current, {
				scaleY: .01,
				duration: .4,
				fill: "rgb(255,255,255)"
			})
			gsap.to(ref.current, {
				scaleX: 0,
				duration: .2,
				delay: .4
			})
		}
	}, [isOn, ref])

}

export default useScreenAnimation