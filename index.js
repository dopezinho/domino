//  Navbar

const hamburger = document.querySelector('.hamburger')
const navbarMenu = document.querySelector('.navbar-menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navbarMenu.classList.toggle('active')
})

const buttons = document.querySelector("#hamb-button");


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

  document.querySelector(".plus1-click-5").addEventListener("click", () => {
    totalClick1(5)   
  })
  document.querySelector(".plus1-click-10").addEventListener("click", () => {
    totalClick1(10)   
  })
  document.querySelector(".plus1-click-20").addEventListener("click", () => {
    totalClick1(20)   
  })

  function totalClick1(click) {
    const sum1 = document.getElementById('totalClicks1')
    const sumValue1 = parseInt(sum1.innerText) + click
    sum1.innerText = sumValue1
    const a0 = document.getElementById("a0")
    const a1 = document.getElementById("a1")
    const a2 = document.getElementById("a2")
    const a3 = document.getElementById("a3")
    const a4 = document.getElementById("a4")
    const a5 = document.getElementById("a5")
    const a6 = document.getElementById("a6")
    const a7 = document.getElementById("a7")
    const a8 = document.getElementById("a8")
    const a9 = document.getElementById("a9")

    const b0 = document.getElementById("b0")
    const b1 = document.getElementById("b1")
    const b2 = document.getElementById("b2")
    const b3 = document.getElementById("b3")
    const b4 = document.getElementById("b4")
    const b5 = document.getElementById("b5")
    const b6 = document.getElementById("b6")
    const b7 = document.getElementById("b7")
    const b8 = document.getElementById("b8")
    const b9 = document.getElementById("b9")

    const c0 = document.getElementById("c0")
    const c1 = document.getElementById("c1")
    const c2 = document.getElementById("c2")
    const c3 = document.getElementById("c3")
    const c4 = document.getElementById("c4")
    const c5 = document.getElementById("c5")
    const c6 = document.getElementById("c6")
    const c7 = document.getElementById("c7")
    const c8 = document.getElementById("c8")
    const c9 = document.getElementById("c9")

    const d0 = document.getElementById("d0")
    const d1 = document.getElementById("d1")
    const d2 = document.getElementById("d2")
    const d3 = document.getElementById("d3")
    const d4 = document.getElementById("d4")
    const d5 = document.getElementById("d5")
    const d6 = document.getElementById("d6")
    const d7 = document.getElementById("d7")
    const d8 = document.getElementById("d8")
    const d9 = document.getElementById("d9")

    const x1 = document.getElementById("x1")

    const v1 = document.getElementById("v1")
    const v2 = document.getElementById("v2")
    const v3 = document.getElementById("v3")
    const v4 = document.getElementById("v4")

    if(sumValue1 < 0) {
        sum1.innerText = 0
    }
    if(click === 0) {
        sum1.innerText = 0
    }

    if (sumValue1 >= 5) {
      a0.style.stroke = "#fff"
    }
    if (sumValue1 >= 10) {
      a1.style.stroke = "#fff"
    }
    if (sumValue1 >= 15) {
      a2.style.stroke = "#fff"
    }
    if (sumValue1 >= 20) {
      a3.style.stroke = "#fff"
    }
    if (sumValue1 >= 25) {
      a4.style.stroke = "#fff"
    }
    if (sumValue1 >= 30) {
      a5.style.stroke = "#fff"
    }
    if (sumValue1 >= 35) {
      a6.style.stroke = "#fff"
    }
    if (sumValue1 >= 40) {
      a7.style.stroke = "#fff"
    }
    if (sumValue1 >= 45) {
      a8.style.stroke = "#fff"
    }
    if (sumValue1 >= 50) {
      a9.style.stroke = "#fff"
      v1.style.stroke = "#fff"
    }

    if (sumValue1 >= 55) {
      b0.style.stroke = "#fff"
    }
    if (sumValue1 >= 60) {
      b1.style.stroke = "#fff"
    }
    if (sumValue1 >= 65) {
      b2.style.stroke = "#fff"
    }
    if (sumValue1 >= 70) {
      b3.style.stroke = "#fff"
    }
    if (sumValue1 >= 75) {
      b4.style.stroke = "#fff"
    }
    if (sumValue1 >= 80) {
      b5.style.stroke = "#fff"
    }
    if (sumValue1 >= 85) {
      b6.style.stroke = "#fff"
    }
    if (sumValue1 >= 90) {
      b7.style.stroke = "#fff"
    }
    if (sumValue1 >= 95) {
      b8.style.stroke = "#fff"
    }
    if (sumValue1 >= 100) {
      b9.style.stroke = "#fff"
      v2.style.stroke = "#fff"
    }
    if (sumValue1 >= 105) {
      c0.style.stroke = "#fff"
    }
    if (sumValue1 >= 110) {
      c1.style.stroke = "#fff"
    }
    if (sumValue1 >= 115) {
      c2.style.stroke = "#fff"
    }
    if (sumValue1 >= 120) {
      c3.style.stroke = "#fff"
    }
    if (sumValue1 >= 125) {
      c4.style.stroke = "#fff"
    }
    if (sumValue1 >= 130) {
      c5.style.stroke = "#fff"
    }
    if (sumValue1 >= 135) {
      c6.style.stroke = "#fff"
    }
    if (sumValue1 >= 140) {
      c7.style.stroke = "#fff"
    }
    if (sumValue1 >= 145) {
      c8.style.stroke = "#fff"
    }
    if (sumValue1 >= 150) {
      c9.style.stroke = "#fff"
      v3.style.stroke = "#fff"
    }

    if (sumValue1 >= 155) {
      d0.style.stroke = "#fff"
    }
    if (sumValue1 >= 160) {
      d1.style.stroke = "#fff"
    }
    if (sumValue1 >= 165) {
      d2.style.stroke = "#fff"
    }
    if (sumValue1 >= 170) {
      d3.style.stroke = "#fff"
    }
    if (sumValue1 >= 175) {
      d4.style.stroke = "#fff"
    }
    if (sumValue1 >= 180) {
      d5.style.stroke = "#fff"
    }
    if (sumValue1 >= 185) {
      d6.style.stroke = "#fff"
    }
    if (sumValue1 >= 190) {
      d7.style.stroke = "#fff"
    }
    if (sumValue1 >= 195) {
      d8.style.stroke = "#fff"
    }
    if (sumValue1 >= 200) {
      d9.style.stroke = "#fff"
      v4.style.stroke = "#fff"
      x1.style.stroke = "#00ff2a"
    }
  }

  document.querySelector(".send-button",).addEventListener("click", () => {
    totalClick1(0)
    totalClick2(0)
    totalClick3(0)
  })



const x = document.querySelectorAll('.a')
const v = document.querySelectorAll('.v')


function clicking() {
  for (i = 1; i <= sumValue1/5; i++) {
    x[i-1].style.stroke = '#fff'
    if (sumValue1 % 50 === 0){
      v[i/10-1].style.stroke = '#fff'
    }
    if (sumValue1 === 200) {
      x1.style.stroke = "#00ff2a"
    }
  }
}

