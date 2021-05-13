export function calculateWaveform({ waveshape, frequency, resolution, phase, amplitude }) {
    const interval = 1 / resolution;
    let points = [];
    let i = 0;
    while (i < 1) {
        const point = [i, waveshape((phase + i) % 1 * frequency) * amplitude]
        points.push(point);
        i += interval
    }
    return points
}