import gsap from 'gsap/gsap-core'
import { useEffect, useRef } from 'react'

function useScreenAnimation(ref, isOn) {

    const isUpdating = useRef(false)

    useEffect(() => {
		gsap.set(ref.current, {
			transformOrigin: "center",
		})
	}, [ref])

	useEffect(() => {
		if (isUpdating.current === false) return
		if (isOn) {
			gsap.killTweensOf(ref.current)
			gsap.to(ref.current, {
				scaleX: 1,
				duration: .2,
			})
			gsap.to(ref.current, {
				scaleY: 1,
				duration: .6,
				delay: .2
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

	useEffect(() => {
		isUpdating.current = true
	}, [])

}

export default useScreenAnimation