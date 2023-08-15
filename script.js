window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = scrollY / maxScroll;

  const colors = [
    [255, 209, 102], // FFD166 in RGB
    [255, 186, 8],   // FFBA08 in RGB
    [255, 43, 10],   // FF2B0A in RGB
    [184, 24, 0]     // B81800 in RGB
  ];

  let currentColor;

  if (scrollPercentage <= 0.25) {
    currentColor = blendColors(colors[0], colors[1], scrollPercentage / 0.25);
  } else if (scrollPercentage <= 0.5) {
    currentColor = blendColors(colors[1], colors[2], (scrollPercentage - 0.25) / 0.25);
  } else {
    currentColor = blendColors(colors[2], colors[3], (scrollPercentage - 0.5) / 0.5);
  }

  const backgroundColor = `rgb(${Math.round(currentColor[0])}, ${Math.round(currentColor[1])}, ${Math.round(currentColor[2])})`;
  document.body.style.backgroundColor = backgroundColor;

  const taskbar = document.getElementById('taskbar');
  const menuItems = taskbar.querySelectorAll('li');
  const sections = document.querySelectorAll('section');

  const sideNav = this.document.getElementsByClassName('sidenav');
  sideNav.style.display = 'block';

  let currentSectionIndex = findCurrentSectionIndex(scrollY, sections);

  menuItems.forEach((item, index) => {
    item.classList.toggle('active', index === currentSectionIndex);
  });

  const scrollPercentageForButton = (scrollY / maxScroll) * 100;
  updateProgressBar(scrollPercentageForButton);

  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  scrollToTopBtn.style.display = scrollY > 300 ? 'block' : 'none';
});

function blendColors(color1, color2, ratio) {
  return color1.map((value, index) => (1 - ratio) * value + ratio * color2[index]);
}
// Get the elements
const readMoreBtn = document.querySelector('.read-more-btn');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

function flipCard() {
  const cardInner = document.querySelector('.card-inner');
  cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
}

// Search function
function searchContent() {
  console.log('searching...');
  let input = prompt('What are you looking for?');

  if (input === null || input === '') {
    alert('Please enter a valid search term');
  } else { 
    let body = document.body.innerText;
    if (body.includes(input)) {
      alert('Found it!', body.charCodeAt(input));
    } else {
      alert('Sorry, no results found');
    }
  }
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  window.onscroll = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
