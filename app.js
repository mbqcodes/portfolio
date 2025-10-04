//Copiar correo


const copyBtn = document.getElementById('copy-email');
const emailText = document.getElementById('email-text');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText.textContent)
        .then(() => {
            copyBtn.textContent = "¡Copiado!";
            setTimeout(() => copyBtn.textContent = "Copiar", 1500);
        })
        .catch(err => console.error('Error al copiar: ', err));
});


//Cursor


const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

let isHover = false;
let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;

  if (isHover) {
    outlineX = mouseX;
    outlineY = mouseY;
    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
  }
});

function animateOutline() {
  if (!isHover) {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    cursorOutline.style.left = `${outlineX}px`;
    cursorOutline.style.top = `${outlineY}px`;
  }

  requestAnimationFrame(animateOutline);
}

animateOutline();

const interactivos = document.querySelectorAll("button, a, input, textarea, select, .project-card, .skill-card");

interactivos.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    isHover = true;
    cursorDot.classList.add("active");
    cursorOutline.classList.add("active");
  });

  el.addEventListener("mouseleave", () => {
    isHover = false;
    cursorDot.classList.remove("active");
    cursorOutline.classList.remove("active");
  });
});


// White Mode


let whiteMode = localStorage.getItem("white-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableWhiteMode = () => {
  document.body.classList.add("white-mode")
  localStorage.setItem("white-mode", "active")
}

const disableWhiteMode = () => {
  document.body.classList.remove("white-mode")
  localStorage.setItem("white-mode", null)
}

if(whiteMode === "active") enableWhiteMode()

themeSwitch.addEventListener("click", () => {
  whiteMode = localStorage.getItem("white-mode")
  whiteMode !== "active" ? enableWhiteMode() : disableWhiteMode()
})




