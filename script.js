const painting = [
  {
    title: "Personal Site",
    text: "My First Website",
    link: "https://github.com/Irongolem222/Entering-dimension",
    x: 13.3, y: 18.4, w: 16.3, h: 14.1
  },
  {
    title: "Receipt Challenge",
    text: "A bad piggies-themed p5.js receipt for hackclub.",
    link: "https://receipt.hackclub.com/gallery#irongolem222/receipt",
    x: 73.6, y: 16.9, w: 7.3, h: 37.0
  },
  {
    title: "Repossessed",
    text: "A little guy themed mummy platform game. I did the pixel art.",
    link: "https://irongolem222.itch.io/repossessed",
    x: 40.8, y: 37.0, w: 20.5, h: 23.4
  },
  {
    title: "Error 404",
    text: "Nothing here yet.",
    x: 21.2, y: 44.0, w: 12.4, h: 25.3
  },
  {
    title: "Upcoming",
    text: "Something new is coming soon.",
    x: 43.8, y: 16.7, w: 11.6, h: 15.0
  },
  {
    title: "Upcoming",
    text: "Something new is coming soon.",
    x: 52.8, y: 72.3, w: 20.8, h: 12.6
  }
];

const museum = document.getElementById("museum");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");
const infoLink = document.getElementById("info-link");

painting.forEach(function (p) {
  const btn = document.createElement("button");
  btn.className = "painting";
  btn.setAttribute("aria-label", p.title);

  btn.style.left = p.x + "%";
  btn.style.top = p.y + "%";
  btn.style.width = p.w + "%";
  btn.style.height = p.h + "%";

  btn.addEventListener("click", function () {
    showInfo(p, btn);
  });

  museum.appendChild(btn);
});

function showInfo(p, btn) {
  infoTitle.textContent = p.title;
  infoText.textContent = p.text;

  if (p.link) {
    infoLink.href = p.link;
    infoLink.hidden = false;
  } else {
    infoLink.hidden = true;
  }

  document.querySelectorAll(".painting").forEach(function (b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");
}