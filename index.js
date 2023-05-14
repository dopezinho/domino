const hamburger = document.querySelector('.hamburger')
const navbarMenu = document.querySelector('.navbar-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navbarMenu.classList.toggle('active')
})

const buttons = document.querySelector("#hamb-button");
console.log(buttons)


  buttons.addEventListener("click", () => {
    const currentState = buttons.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      buttons.setAttribute("data-state", "opened");
      buttons.setAttribute("aria-expanded", "true");
    } else {
      buttons.setAttribute("data-state", "closed");
      buttons.setAttribute("aria-expanded", "false");
    }
  });