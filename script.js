// Create particle effect
const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;

// Create particles
for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size (small)
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Initial position
    resetParticle(particle);
    
    particlesContainer.appendChild(particle);
    
    // Animate
    animateParticle(particle);
}

function resetParticle(particle) {
    // Random position
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
    
    return {
        x: posX,
        y: posY
    };
}

function animateParticle(particle) {
    // Initial position
    const pos = resetParticle(particle);
    
    // Random animation properties
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    // Animate with GSAP-like timing
    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        // Move in a slight direction
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30; // Move upwards
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        // Reset after animation completes
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}

// Mouse interaction
document.addEventListener('mousemove', (e) => {
    // Create particles at mouse position
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    // Create temporary particle
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Small size
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Position at mouse
    particle.style.left = `${mouseX}%`;
    particle.style.top = `${mouseY}%`;
    particle.style.opacity = '0.6';
    
    particlesContainer.appendChild(particle);
    
    // Animate outward
    setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        
        // Remove after animation
        setTimeout(() => {
            particle.remove();
        }, 2000);
    }, 10);
    
    // Subtle movement of gradient spheres
    const spheres = document.querySelectorAll('.gradient-sphere');
    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
    
    spheres.forEach(sphere => {
        const currentTransform = getComputedStyle(sphere).transform;
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Some random colors
const colors = ["#1B1B1B"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');
    
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
});
