"use strict";
const container = document.querySelector(".faq");
const answers = document.querySelectorAll(".answer");

function hideAnswers() {
  answers.forEach((answer) => answer.classList.remove("show"));
}

function handleClickItem(e) {
  // hideAnswers();
  if (e.target.classList.contains("question")) {
    e.stopPropagation();
    const currentItem = e.target.parentElement;
    const currentAnswer = currentItem.querySelector(".answer");
    currentAnswer.classList.toggle("show");
  }
}
container.addEventListener("click", handleClickItem);

document.addEventListener("click", hideAnswers);
