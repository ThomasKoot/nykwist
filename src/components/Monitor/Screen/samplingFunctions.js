export function calculateSamples( {waveshape, frequency, sampleRate, bitDepth, amplitude, phase} ) {
    const samplingInterval = 1 / sampleRate;
    const bitDepthInterval = 2 / bitDepth; 
    let pointsArray = [];
    let i = 0;
    while (i - samplingInterval < 1) {
        const result = waveshape((i + phase) % 1 * frequency) * amplitude;
        const roundedResult = Math.round(result / bitDepthInterval)
        pointsArray.push([i, roundedResult * bitDepthInterval]);
        i += samplingInterval
    }
    return pointsArray
}

export function addConnectingLines(points) {
    //return a stepped waveform of the inputted points array
    let current;
    let prev;
    let waveArray = []
    while (points.length) {
        current = points.shift()
        if (prev) {
            waveArray.push([current[0], prev[1]])
        } 
        waveArray.push(current);
        prev = current;
    }
    return waveArray;
}
