  // Consts
  const minusClick = document.querySelector(".minus1-click");
  const plusClick5 = document.querySelector(".plus1-click-5");
  const plusClick10 = document.querySelector(".plus1-click-10");
  const plusClick20 = document.querySelector(".plus1-click-20");
  const ticks = document.querySelectorAll('.cls-10');
  const circles = document.querySelectorAll('.cls-11');
  const player1Points = document.getElementById('totalClicks1');


  //Lets
  let totalPoints1 = 0;


  function add5() {
    totalPoints1 += 5;

    showPoints();
  }
  function add10() {
    totalPoints1 += 10;

    showPoints();
  }
  function add20() {
    totalPoints1 += 20;

    showPoints();
  }
  function minus5() {
    totalPoints1 -= 5;

    showPoints();
  }

  
  function showPoints() {
    let numCircles = 0
    ticks.forEach(function(tick) {
      tick.classList.remove('ticked');
    });
    circles.forEach(function(circle) {
      circle.classList.remove('ticked');
    });
    numCircles = totalPoints1 / 50;
    for (i = 1; i <= totalPoints1/5; i++) {
      ticks[ticks.length - (i)].classList.add('ticked');
      for (j = 1; j <= numCircles; j ++) {
        circles[circles.length - j].classList.add('ticked');
      }
    }
    player1Points.innerText = totalPoints1;
  }
