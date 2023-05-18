function clicking() {
    for (i = 1; i <= sumValue1/5; i++) {
        x[i-1].style.stroke = '#fff'
    }
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