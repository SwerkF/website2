AOS.init();

const colors = [
  {"--primary": "#048B9A", "--secondary": "#7A9E7E"},
  {"--primary": "#F18F01", "--secondary": "#006E90"},
  {"--primary": "#439A86", "--secondary": "#6969B3"},
  {"--primary": "#187795", "--secondary": "#2589BD"},
  {"--primary": "#97C100", "--secondary": "#436436"},
  {"--primary": "#EE7B30", "--secondary": "#846B8A"},
  {"--primary": "#679289", "--secondary": "#1D7874"},
  {"--primary": "#246A73", "--secondary": "#E3170A"},
  {"--primary": "#FF668C", "--secondary": "#607196"},
  {"--primary": "#993399", "--secondary": "#F5DEB3"},
  {"--primary": "#008080", "--secondary": "#DAB568"},
  {"--primary": "#483D8B", "--secondary": "#E5D121"},
  {"--primary": "#FF6347", "--secondary": "#006400"},
  {"--primary": "#FFA07A", "--secondary": "#4682B4"},
  {"--primary": "#DA70D6", "--secondary": "#00D66B"},
  {"--primary": "#6495ED", "--secondary": "#8B0000"},
  {"--primary": "#7B68EE", "--secondary": "#F08080"},
  {"--primary": "#9370DB", "--secondary": "#FFA500"}
]

const changeColor = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  Object.keys(color).forEach(key => {
    document.documentElement.style.setProperty(key, color[key]);
  });
}

changeColor();

const pressed = [];

const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  pressed.splice(-konamiCode.length - 1, pressed.length - konamiCode.length);
  if (pressed.join("").includes(konamiCode.join(""))) {
    KuruSound();
    const button = document.querySelector(".button-kuru");
    button.style.display = "block";
    alert("Konami Code activated!");
  } else if(e.key === "R") {
    pressed.splice(0, pressed.length);
  }
})

const KuruPlay = () => {
  const img = document.createElement("img");
  img.src = "./src/imgs/kuru.gif";
  img.style.position = "fixed";
  img.style.top = "50%";
  img.style.left = "110%";
  img.style.width = "600px";
  img.style.transform = "translate(-50%, -50%)";
  img.style.zIndex = "9999";
  img.style.transition = "all 2s ease-in";
  document.body.appendChild(img);
  setTimeout(() => {
    img.style.left = "-100%";
  }
  , 100);
  setTimeout(() => {
    KuruSound();
  }, 50);
  setTimeout(() => {
    img.remove();
  }
  , 2000);
 
}

const KuruSound = () => {
  const kuru = Math.random() < 0.5 ? "kuru" : "kuru2";
  const audio = new Audio(`./src/sounds/${kuru}.mp3`);
  audio.play();
}

const backTop = () => {
  window.scrollTo(0, 0);
}

