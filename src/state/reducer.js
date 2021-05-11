export function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_ON_OFF":
            return {...state, isOn: !state.isOn}
        case "INCREASE_ACTIVE_PARAM" : {
            const increaseHandlers = {
                "sampleRate" : sr => sr + 1,
                "bitDepth" : bit => bit + 1,
                "amplitude" : amp => Math.min(amp + 0.1, 1),
                "frequency" : freq => freq + 1,
                "phase" : phase => (phase + .1) % 1
            }
            return ({...state, 
                [state.activeParam] : increaseHandlers[state.activeParam](state[state.activeParam])})
        }
        case "DECREASE_ACTIVE_PARAM" : {
            const decreaseHandlers = {
                "sampleRate" : sr => Math.max(sr - 1, 2),
                "bitDepth" : bit => Math.max(bit - 1, 2),
                "amplitude" : amp => Math.max(amp - 0.1, 0),
                "frequency" : freq => Math.max(freq - 1, 1),
                "phase" : phase => (phase + .9) % 1,
            }
            return ({...state, 
                [state.activeParam] : decreaseHandlers[state.activeParam](state[state.activeParam])})
        }
        case "SWITCH_ACTIVE_PARAM" : {
            if (!state.isOn) return state
            const params = ["sampleRate", "bitDepth", "frequency", "amplitude", "phase"];
            const currentIndex = params.indexOf(state.activeParam);
            const newParam = params[(currentIndex + 1) % params.length];
            return {...state, activeParam: newParam}
        }
        default:
            return state
    }
}

