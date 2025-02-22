const car = document.getElementById("car");
const track = document.getElementById("track");

let carPositionX = 50; // Percentage from left
let trackPosition = -100; // Initial track position

// Move road continuously
function moveRoad() {
    trackPosition += 1;
    if (trackPosition >= 0) {
        trackPosition = -100; // Reset track position for looping effect
    }
    track.style.top = `${trackPosition}%`;
    requestAnimationFrame(moveRoad);
}

// Move the car left or right
document.getElementById("left-btn").addEventListener("click", () => {
    if (carPositionX > 10) carPositionX -= 5;
    updateCar();
});

document.getElementById("right-btn").addEventListener("click", () => {
    if (carPositionX < 90) carPositionX += 5;
    updateCar();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && carPositionX > 10) {
        carPositionX -= 5;
        updateCar();
    };
    if (e.key === 'ArrowRight' && carPositionX < 90){
        carPositionX += 5;
        updateCar();
    };
})

function updateCar() {
    car.style.left = `${carPositionX}%`;
}

// Start the moving road animation
moveRoad();
