document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button");
  const heart = document.querySelector(".button-heart i");
  const likeText = document.querySelector(".button-like p");
  const count = document.querySelector(".button-count p");
  let liked = false;

  button.addEventListener("click", () => {
    liked = !liked;
    button.style.backgroundColor = liked ? "red" : "white";
    button.style.color = liked ? "white" : "red";
    heart.classList.toggle("fa-solid", liked);
    heart.classList.toggle("fa-regular", !liked);
    heart.style.color = liked ? "white" : "red";
    likeText.style.color = liked ? "white" : "red";
    count.style.color = liked ? "white" : "black";
    count.textContent = parseInt(count.textContent) + 1;
  });
});
