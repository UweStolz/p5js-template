import { getSketch } from './p5';

const sketch = getSketch();

sketch.draw = () => {
    const { mouseX, mouseY } = sketch;
    sketch.background(220);
    sketch.fill(255, 0, 0);
    sketch.noStroke();
    sketch.rectMode('center');
    sketch.rect(mouseX, mouseY, 50, 50);
};
