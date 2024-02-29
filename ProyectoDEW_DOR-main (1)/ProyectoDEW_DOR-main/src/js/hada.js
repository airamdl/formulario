const numberParticles = 5;

const blockElement = document.querySelector(".navi");
const audio = document.querySelector(".navi_speak");

function generateRandomIntegerInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= numberParticles; i++) {
	blockElement.innerHTML += `   
    <div class="particle " style=${`left:${
					i * 80
				}px;top:${generateRandomIntegerInRange(100, 200)}px;width:${
					i * 5
				}px;height:${i * 5}px;animation-delay:${generateRandomIntegerInRange(
					1,
					3
				)}s `} ></div> `;
}

blockElement.addEventListener("click", () => {
	audio.play();
});