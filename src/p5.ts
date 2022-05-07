import P5 from 'p5';
import type P5Instance from 'p5';

const setup = (p: P5Instance) => () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
};

function getSketch() {
    const app = document.getElementById('app') as HTMLElement;
    const sketch = new P5((p5Instance: P5Instance) => {
        p5Instance.setup = setup(p5Instance);
    }, app);
    return sketch;
}

export { getSketch, P5 };
