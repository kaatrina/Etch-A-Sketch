const conteiner = document.querySelector(".conteiner");

const btn = document.createElement("button");
btn.textContent = "Изменить размер сетки";

document.body.insertBefore(btn, conteiner);

btn.style.marginBottom = "20px";
btn.style.display = "block";
btn.style.marginLeft = "auto";
btn.style.marginRight = "auto";
btn.style.fontSize = "20px";

btn.addEventListener("click", function () {
  const userInput = Number(
    prompt("Введите количество квадратов на стороне (не больше 100):"),
  );

  if (userInput == "") {
    alert("Вы ничего не ввели, повторите запрос");
    return;
  }

  if (!Number.isInteger(userInput)) {
    alert("Введите целое число");
    return;
  }
  if (userInput < 1 || userInput > 100) {
    alert("Введите число от 1 до 100");
    return;
  }

  conteiner.innerHTML = "";

  for (let i = 0; i <= userInput * userInput - 1; i++) {
    const block = document.createElement("div");
    block.style.border = "1px solid blue";

    if (i < userInput) {
      block.style.borderTop = "2px solid blue";
    }
    if (i > userInput * userInput - userInput - 1) {
      block.style.borderBottom = "2px solid blue";
    }
    if (i % userInput === 0) {
      block.style.borderLeft = "2px solid blue";
    }
    if (i % userInput === userInput - 1) {
      block.style.borderRight = "2px solid blue";
    }

    const blockSize = 960 / userInput; // в пикселях
    block.style.width = blockSize + "px";
    block.style.height = blockSize + "px";
    conteiner.appendChild(block);

    let saturation = 0;

    block.addEventListener("mouseover", function () {
      block.style.backgroundColor = "blue";
      block.style.opacity = 0.2 + saturation;
      saturation += 0.2;
    });
  }
});

for (let i = 0; i <= 255; i++) {
  const block = document.createElement("div");
  block.style.border = "1px solid blue";

  if (i < 16) {
    block.style.borderTop = "2px solid blue";
  }
  if (i > 239) {
    block.style.borderBottom = "2px solid blue";
  }
  if (i % 16 === 0) {
    block.style.borderLeft = "2px solid blue";
  }
  if (i % 16 === 15) {
    block.style.borderRight = "2px solid blue";
  }

  const blockSize = 960 / 16; // в пикселях
  block.style.width = blockSize + "px";
  block.style.height = blockSize + "px";
  conteiner.appendChild(block);

  block.addEventListener("mouseover", function () {
    const colors = [
      "red",
      "blue",
      "green",
      "yellow",
      "purple",
      "orange",
      "pink",
      "brown",
    ];
    block.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  });
}
