//  Navbar

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

  //  Increment and Decrement buttons

  document.querySelector(".minus1-click",).addEventListener("click", () => {
    totalClick1(-5)
  })
  document.querySelector(".minus2-click",).addEventListener("click", () => {
    totalClick2(-5)
  })
  document.querySelector(".minus3-click",).addEventListener("click", () => {
    totalClick3(-5)
  })

  document.querySelector(".plus1-click").addEventListener("click", () => {
    totalClick1(5)
  })
  document.querySelector(".plus2-click").addEventListener("click", () => {
    totalClick2(5)
  })
  document.querySelector(".plus3-click").addEventListener("click", () => {
    totalClick3(5)
  })

  document.querySelector(".reset1-click").addEventListener("click", () => {
    totalClick1(0)
  })
  document.querySelector(".reset2-click").addEventListener("click", () => {
    totalClick2(0)
  })
  document.querySelector(".reset3-click").addEventListener("click", () => {
    totalClick3(0)
  })

  function totalClick1(click) {
    const sum1 = document.getElementById('totalClicks1')
    const sumValue1 = parseInt(sum1.innerText) + click
    sum1.innerText = sumValue1

    if(sumValue1 < 0) {
        sum1.innerText = 0
    }
    if(click === 0) {
        sum1.innerText = 0
    }
  }
  function totalClick2(click) {
    const sum2 = document.getElementById('totalClicks2')
    const sumValue2 = parseInt(sum2.innerText) + click
    sum2.innerText = sumValue2

    if(sumValue2 < 0) {
        sum2.innerText = 0
    }
    if(click === 0) {
        sum2.innerText = 0
    }
  }
  function totalClick3(click) {
    const sum3 = document.getElementById('totalClicks3')
    const sumValue3 = parseInt(sum3.innerText) + click
    sum3.innerText = sumValue3

    if(sumValue3 < 0) {
        sum3.innerText = 0
    }
    if(click === 0) {
        sum3.innerText = 0
    }
  }