const containers = document.querySelectorAll('.starfield');
const numStars = 200;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStar(container) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = `${getRandomInt(0, container.clientWidth)}px`;
  star.style.top = `${getRandomInt(0, container.clientHeight)}px`;
  star.style.animationDelay = `${getRandomInt(0, 20)}s`;
  return star;
}

export default function addStars() {
  containers.forEach((container) => {
    for (let i = 0; i < numStars; i += 1) {
      container.appendChild(createStar(container));
    }
  });
}
