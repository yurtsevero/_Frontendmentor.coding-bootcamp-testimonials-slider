let leftClick = document.getElementsByClassName("left");
let rightClick = document.getElementsByClassName("right");
let container = document.getElementsByClassName("container");

let togglePage = () => {
  container[0].classList.toggle("active");
  container[1].classList.toggle("active");
  console.log("aksld");
};

leftClick[0].addEventListener("click", togglePage);
leftClick[1].addEventListener("click", togglePage);
rightClick[0].addEventListener("click", togglePage);
rightClick[1].addEventListener("click", togglePage);
