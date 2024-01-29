const animEl = document.querySelectorAll(".anim");

window.addEventListener("scroll", scrollAnim);

scrollAnim();

async function scrollAnim() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  animEl.forEach((anim) => {
    const top = anim.getBoundingClientRect().top;

    if (top < triggerBottom) {
      anim.classList.add("show");
    } else {
      anim.classList.remove("show");
    }
  });
}
