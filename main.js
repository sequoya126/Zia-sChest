const track = document.getElementById('galleryTrack');
const modal = document.getElementById('photoModal');
const closeBtn = document.getElementById('closeBtn');
const cursor = document.querySelector('.cursor-glow');


// Open Modal logic
let count = 0;
const counterDisplay = document.getElementById('tapCounter');
track.addEventListener('click', (e) => {
  // 1. Debugging: Increase the counter no matter what is clicked inside the track
  count++;
  counterDisplay.innerText = count;
  console.log("Track clicked! Total taps:", count);

  // 2. Identify the specific box
  const item = e.target.closest('.photo-item');
  
  if (!item) {
    console.log("Clicked the track, but not a specific box.");
    return;
  }

  // 3. If it is a box, try to open the modal
  console.log("Box identified:", item.getAttribute('data-title'));
  
  document.getElementById('modalTitle').innerText = item.getAttribute('data-title');
  document.getElementById('modalPrice').innerText = item.getAttribute('data-price');
  document.getElementById('modalDesc').innerText = item.getAttribute('data-desc');
  document.getElementById('modalImage').style.backgroundColor = item.style.backgroundColor;

  track.style.animationPlayState = 'paused';
  modal.style.display = 'flex';
});

// Close Modal logic
function closeModal() {
  modal.style.display = 'none';
  track.style.animationPlayState = 'running';
}

closeBtn.addEventListener('click', closeModal);

// Close on outside click
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.transform = `translate(${posX}px, ${posY}px)`;
  requestAnimationFrame(animate);
}
animate();
