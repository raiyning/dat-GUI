var c = document.getElementById('canvas'),
  ctx = c.getContext('2d'),
  hue = 0,
  options = {
    delay: 1000 / 60,
    saturation: 80,
    luminosity: 80
  },
  gui = new dat.GUI();

gui.close();
gui.add(options, 'delay', 10, 100);
gui.add(options, 'saturation', 0, 100);
gui.add(options, 'luminosity', 0, 100);

function draw() {
  ctx.fillStyle = 'hsl(' +
    (hue++) +
    ',' +
    options.saturation +
    '%,' +
    options.luminosity + '%)';
  ctx.fillRect(0, 0, c.width, c.height);
  window.setTimeout(draw, options.delay);
}

draw();