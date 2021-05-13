import { screenSpec } from "./state/dimensions";

function scaleTo(scaleDef) {
    const {xRange, yRange} = scaleDef
    return function(point) {
        const [x, y] = point;
        return [x*xRange + 0, y*yRange/2 + yRange/2 + 0]
    }
}

export const scaleToScreen = scaleTo(screenSpec);

export function calculateTransform({x, y, width, height, scale, phase}) {
    let offsetX = (width * (1-scale)/2)*phase
    let offsetY = (height * (1-scale)/2)*phase
    return `translate(${x + offsetX},${y + offsetY}) scale(${phase * scale + (1-phase)})`
}

export function generatePolylineString(points) {
    return points.map(p => p.join(",")).join(" ")
} 
    
export function pipe(val, fns) {
    return fns.reduce((acc, fn) => {
        return fn(acc)
    }, val)
} 

