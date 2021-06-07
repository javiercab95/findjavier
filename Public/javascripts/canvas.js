const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 538;
let numberOfParticles = 200;
const particlesArray = [];

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = (Math.random() * 15) + 2;
        this.speedX = (Math.random() * 3) - 1.5;
        this.speedY =  (Math.random() * 3) - 1.5;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = '#44b9bb';
        ctx.fill();
        ctx.strokeStyle = '#3aa1b8';
        ctx.stroke();
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x + this.size > canvas.width || this.x - this.size < 0){
                this.speedX = -this.speedX;
        }
        if (this.y + this.size > canvas.height || this.y + this.size < 0){
                this.speedY = -this.speedY;
        }
        this.draw();
    }
}
function init(){
    for (let i = 0; i < numberOfParticles; i++){
        particlesArray.push(new Particle());
    }
}
function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
    }
    requestAnimationFrame(animate);
}
init();
animate();

window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
  canvas.height = 538;
  particlesArray = [];
  init();
})
