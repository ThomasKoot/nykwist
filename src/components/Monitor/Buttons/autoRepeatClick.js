export function autoRepeatClick(handler, setIsPressed) {
    return function(evt) {
        handler();

        let timeoutId;
        let intervalId;
        const timeStamp = performance.now()

        function handleMouseUp() {		
            const timePassed = performance.now() - timeStamp;
            function reset() {
                setIsPressed(false);
                window.removeEventListener('mouseup', handleMouseUp);
                window.clearTimeout(timeoutId);
                window.clearInterval(intervalId)
            }
            if (timePassed > 200) {
                reset()
            } else {
                window.setTimeout(reset, 200 - timePassed)
            }
        }
        setIsPressed(true);
        window.addEventListener('mouseup', handleMouseUp);
        timeoutId = window.setTimeout(() => {
            intervalId = window.setInterval(handler, 200);
        }, 700)

        evt.preventDefault();
    }
}
