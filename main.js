const text = document.getElementById("rotating-text");

let texts = [  "snacks",  "drinks",  "friends"];

let index = 0;

function updateText() {
  text.style.opacity = 0;
  setTimeout(function() {
    text.innerHTML = texts[index];
    text.style.opacity = 1;
    index = (index + 1) % texts.length;
  }, 1000);
}

setInterval(updateText, 3500);