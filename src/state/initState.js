export const initState = {
    sampleRate: 12,
    bitDepth: 8,
    waveshape: i => Math.sin(i * 2*Math.PI),
    frequency: 1,
    amplitude: .8,
    phase: 0,
    isOn: true,
    activeParam: "sampleRate"
}