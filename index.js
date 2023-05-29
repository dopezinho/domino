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
  
  function clicking() {
    const scoreBorder = document.getElementById("x1")
    const scorePoints = document.querySelectorAll(".cls-10")
    
        for (i = 1; i <= sumValue1/5; i++) {
            scoreBorder[i-1].style.stroke = "#fff"
            if (sumValue1 % 50 === 0) {
                scorePoints[i/10-1].style.stroke = "#fff"
            }
            if (sumValue1 === 200) {
                scoreBorder.style.stroke = "#00ff2a"
            }
        }
    }

  function totalClick1(click) {
    const sum1 = document.getElementById('totalClicks1')
    const sumValue1 = parseInt(sum1.innerText) + click
    sum1.innerText = sumValue1

    const drawedPoints = document.querySelectorAll('.cls-10')

      switch(sumValue1) {
        case 5: drawedPoints[0].style.stroke = "#fff"
        break;
        case 10: drawedPoints[1].style.stroke = "#fff"
        break;
        case 15: drawedPoints[2].style.stroke = "#fff"
        break;
        case 20: drawedPoints[3].style.stroke = "#fff"
        break;
        case 25: drawedPoints[4].style.stroke = "#fff"
        break;
        case 30: drawedPoints[5].style.stroke = "#fff"
        break;
        case 35: drawedPoints[6].style.stroke = "#fff"
        break;
        case 40: drawedPoints[7].style.stroke = "#fff"
        break;
        case 45: drawedPoints[8].style.stroke = "#fff"
        break;
        case 50: drawedPoints[9].style.stroke = "#fff"
        break;
        case 55: drawedPoints[10].style.stroke = "#fff"
        break;
        case 60: drawedPoints[11].style.stroke = "#fff"
        break;
        case 65: drawedPoints[12].style.stroke = "#fff"
        break;
        case 70: drawedPoints[13].style.stroke = "#fff"
        break;
        case 75: drawedPoints[14].style.stroke = "#fff"
        break;
        case 80: drawedPoints[15].style.stroke = "#fff"
        break;
        case 85: drawedPoints[16].style.stroke = "#fff"
        break;
        case 90: drawedPoints[17].style.stroke = "#fff"
        break;
        case 95: drawedPoints[18].style.stroke = "#fff"
        break;
        case 100: drawedPoints[19].style.stroke = "#fff"
        break;
        case 105: drawedPoints[20].style.stroke = "#fff"
        break;
        case 110: drawedPoints[21].style.stroke = "#fff"
        break;
        case 115: drawedPoints[22].style.stroke = "#fff"
        break;
        case 120: drawedPoints[23].style.stroke = "#fff"
        break;
        case 125: drawedPoints[24].style.stroke = "#fff"
        break;
        case 130: drawedPoints[25].style.stroke = "#fff"
        break;
        case 135: drawedPoints[26].style.stroke = "#fff"
        break;
        case 140: drawedPoints[27].style.stroke = "#fff"
        break;
        case 145: drawedPoints[28].style.stroke = "#fff"
        break;
        case 150: drawedPoints[29].style.stroke = "#fff"
        break;
        case 155: drawedPoints[30].style.stroke = "#fff"
        break;
        case 160: drawedPoints[31].style.stroke = "#fff"
        break;
        case 165: drawedPoints[32].style.stroke = "#fff"
        break;
        case 170: drawedPoints[33].style.stroke = "#fff"
        break;
        case 175: drawedPoints[34].style.stroke = "#fff"
        break;
        case 180: drawedPoints[35].style.stroke = "#fff"
        break;
        case 185: drawedPoints[36].style.stroke = "#fff"
        break;
        case 190: drawedPoints[37].style.stroke = "#fff"
        break;
        case 195: drawedPoints[38].style.stroke = "#fff"
        break;
        case 200: drawedPoints[39].style.stroke = "#fff"
        break;
      }

      if(sumValue1 < 0) {
          sum1.innerText = 0
      }
      if(click === 0) {
          sum1.innerText = 0
      }  
      clicking()
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

