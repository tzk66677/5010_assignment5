let agents = [];
let count = 100;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
  
  for (let i = 0; i < count; i++) {
    agents.push(createAgent(random(width), random(height)));
  }
}

function draw() {
  background(0);
  
  // Draw connections between nearby agents
  agents.forEach(a => {
    agents.forEach(b => {
      if (a !== b && dist(a.x, a.y, b.x, b.y) < 40) {
        stroke(a.hue, 30, 100, 0.2);
        line(a.x, a.y, b.x, b.y);
      }
    });
  });
  
  // Update and draw agents
  agents.forEach(a => a.update());
  agents.forEach(a => a.draw());
}

// Function to create an agent with properties
function createAgent(x, y) {
  return {
    x: x,
    y: y,
    tx: random(1000),
    ty: random(1000),
    speed: random(0.5, 2),
    size: random(3, 8),
    hue: random(360),
    
    update() {
      // Noise-based movement
      let vx = map(noise(this.tx), 0, 1, -1, 1) * this.speed;
      let vy = map(noise(this.ty), 0, 1, -1, 1) * this.speed;

      // Left-click to push away nearby agents
      if (mouseIsPressed && mouseButton === LEFT) {
        let dx = this.x - mouseX;
        let dy = this.y - mouseY;
        let distance = dist(this.x, this.y, mouseX, mouseY);
        
        if (distance < 150) {
          let force = map(distance, 0, 150, 3, 0); // Stronger force when closer
          vx += dx * 0.05 * force;
          vy += dy * 0.05 * force;
        }
      }
      
      this.x += vx;
      this.y += vy;
      
      // Update noise parameters
      this.tx += 0.01;
      this.ty += 0.02;
      
      // Wrap around edges
      if (this.x > width) this.x = 0;
      if (this.x < 0) this.x = width;
      if (this.y > height) this.y = 0;
      if (this.y < 0) this.y = height;
    },
    
    draw() {
      fill(this.hue, 70, 100);
      noStroke();
      ellipse(this.x, this.y, this.size);
    }
  };
}

// Middle mouse button (scroll wheel) to add a new agent
function mousePressed() {
  if (mouseButton === CENTER) {
    agents.push(createAgent(mouseX, mouseY));
  }
}
