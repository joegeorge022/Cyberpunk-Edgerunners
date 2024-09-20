const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

let yesClickCount = 0;

function playSound() {
  const audio = new Audio('cyberpunk-sound.mp3');
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
  playSound();
});

yesBtn.addEventListener("click", () => {
  yesClickCount++;

  if (yesClickCount === 1) {
    question.innerHTML = "Go watch Cyberpunk: Edgerunners💔😔";
    gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmdxanZpb2w4Y2thMXVycnJsbG14dG5scWNkN25hcndwN2t1cGMydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nA2ZyB2qByO2pacHZI/giphy.gif";
  } else if (yesClickCount === 2) {
    window.location.href = 'https://www.youtube.com/watch?v=KvMY1uzSC1E';
  }
});

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
