const spotlight = document.querySelector('[data-element="spotlight-cover"]');
const Button = document.querySelector('button');
let randomX, randomY; // Declare variables for random positions

// Function to randomize Button position
function randomizeButtonPosition() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  
  randomX = Math.floor(Math.random() * (viewportWidth - Button.offsetWidth));
  randomY = Math.floor(Math.random() * (viewportHeight - Button.offsetHeight));
  
  Button.style.left = `${randomX}px`;
  Button.style.top = `${randomY}px`;
}

// Randomize Button position on load
randomizeButtonPosition();

function move(e) {
  spotlight.style.setProperty("--spotlight1-x", e.clientX + "px");
  spotlight.style.setProperty("--spotlight1-y", e.clientY + "px");

  // Check if mouse cursor is near the random position
  const tolerance = 100; // Adjust this as needed
  if (e.clientX >= randomX - tolerance && e.clientX <= randomX + tolerance &&
      e.clientY >= randomY - tolerance && e.clientY <= randomY + tolerance) {
    Button.style.zIndex = "5";
    console.log('Location found');
  } else {
    Button.style.zIndex = ""; // Reset zIndex when not near
  }
}

if (window.matchMedia("(hover: hover)").matches) {
  spotlight.addEventListener("mousemove", move);
}

function checkViewportWidth() {
  if (window.innerWidth <= 768) {
    alert("You are in mobile view!");
  }
}

// Check width on load
checkViewportWidth();

// Check width on resize
window.addEventListener('resize', checkViewportWidth);
