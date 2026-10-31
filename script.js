const painting =[
    {
      title: "Personal Site",
      text: "My First Website",
      link: "https://github.com/Irongolem222/Entering-dimension",
      image: "images/painting1.png",
      x: 10, y: 20, w: 18, h: 30
    },
    
    {
      title: "Receipt Challenge",
      text: "A bad piggies-themed p5.js receipt for hackclub.",
      link:"https://receipt.hackclub.com/gallery#irongolem222/receipt",
      image: "images/painting2.png",
      x:41, y: 18, w: 18, h: 30
    }

    {
      title: "Repossessed",
      text: "A little guy themed mummy platform game. I did the pixel art.",
      link: "https://irongolem222.itch.io/repossessed",
      image: "images/painting3.png",
      x: 72, y: 20, w: 18, h: 30
    }
];


const museum = document.getElementById("museum");
const infoTitle = document.getElementById("info-title");
const infoText = document.getElementById("info-text");
const infoLink = document.getElementById("info-link");

painting.forEach(function (p) {
    const btn = document.createElement("button");
    btn.className = "painting";
    btn.setAttribute("aria-label",p.title);

    btn.style.left = p.x + "%";
    btn.style.top = p.y + "%";
    btn.style.width = p.w + "%";
    btn.style.height = p.h + "%";
    btn.style.backgroundImage = "url(" + p.image + ")";

    btn.addEventListener("click", function () {
        showInfo(p, btn);
    });

    museum.appendChild(btn);
});


function showInfo(p, btn) {
    infoTitle.textContent = p.title;
    infoText.textContent =p.text;

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