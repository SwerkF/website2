AOS.init();

const name = ["O", "l", "i", "w", "e", "r", "-", "S", "k", "w", "e", "r", "e", "s"];
let idx = 0;
let title = "";

function updateTitle() {
  if (idx >= name.length) {
    idx = 0;
  }
  title = name.slice(0, idx + 1).join("");
  document.title = title;
  idx++;
  setTimeout(updateTitle, 500);
}
updateTitle();
