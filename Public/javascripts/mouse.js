const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = window.innerWidth;
canvas2.height = 538;
const particlesArray2 = [];

window.addEventListener('resize', function(){
	canvas2.width = window.innerWidth;
	canvas2.height = 538;
});

const mouse2 = {
	x: undefined,
	y: undefined,
}
canvas2.addEventListener('click', function(event){
	mouse2.x = event.x;
	mouse2.y = event.y;
   for (let i = 0; i < 40; i++){
    particlesArray2.push(new Particle2());
  }
});

canvas2.addEventListener('mousemove', function(event){
	mouse2.x = event.x;
	mouse2.y = event.y;
      for (let i = 0; i < 3; i++){
    particlesArray2.push(new Particle2());
  }
});


class Particle2 {
	constructor(){
		this.x = mouse2.x;
		this.y = mouse2.y;
		this.size = Math.random() * 8 + 1;
		this.speedX = Math.random() * 3 - 1.5;
		this.speedY = Math.random() * 3 - 1.5;
	}
	update(){
		if (this.size > 0.3) this.size -= 0.1;
		this.x += this.speedX;
		this.y += this.speedY;
	}
    draw(){
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx2.fillStyle = '#44b9bb';
        ctx2.fill();
        ctx2.strokeStyle = '#7694e4';
        ctx2.stroke();
    }
}

function handleParticles2(){
	for (let i = 0; i < particlesArray2.length; i++){
		particlesArray2[i].update();
		particlesArray2[i].draw();
		if (particlesArray2[i].size <= 0.4){
			particlesArray2.splice(i, 1);
			i--;
		}
	}
}

function animate2(){
	ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
	handleParticles2();
	requestAnimationFrame(animate2);
}
animate2();
















