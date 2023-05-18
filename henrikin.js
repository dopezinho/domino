const x = document.querySelectorAll('.x')
x[0]
x[1]
x[2]

function clicking() {
    for (i = 1; i <= sumValue1/5; i++) {
        x[i-1].style.stroke = '#fff'
    }
}

switch(sumValue1) {
    case 5:
}

const x = document.querySelectorAll(".a")
const v = document.querySelectorAll(".v")

function clicking() {
    for (i = 1; i<= sumValue1/5; i++) {
        x[i-1].style.stroke = "#fff"
        if (sumValue1 % 50 === 0) {
            v[i/10-1].style.stroke = "#fff"
        }
        if (sumValue1 === 200) {
            x1.style.stroke = "#00ff2a"
        }
    }
}