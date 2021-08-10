NYQ is a quirky old CRT monitor that lets you explore the implications of AD conversion using an adjustable sample rate and bit resolution.

View dem: http://thomaskoot-nykwist.s3-website.eu-central-1.amazonaws.com

As a sound design teacher, I had to explain the functioning of AD conversion and the concepts of the Nyquist frequency and aliasing. In words, this is pretty abstract, so I decided to make an app that visualises the concept. 

The 'sel' button allows you to select a parameter that can be adjusted using the '+' and '-' button. The row of lights on the left indicate the currently selected parameter. The abbreviations stand for:

sr - sample rate\
bit - bit resolution\
Hz - frequency of the continuous signal\
amp - amplitude of the continuous signal\
phi = phase of the continious signal\

Keeping a button pressed will trigger auto-incrementation. 

From a technical perspective, I used this project to experiment with using React to dynamically create SVG's. The entire UI is rendered as a single SVG. Since SVG uses a DOM structure just like HTML, React lends itself extremely well to creating SVG-DOM structures. I've used the gsap library for the on/off animations.
