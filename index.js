  // Consts
  const minusClick_1 = document.querySelector(".minus1-click");
  const plusClick5_1 = document.querySelector(".plus1-click-5");
  const plusClick10_1 = document.querySelector(".plus1-click-10");
  const plusClick20_1 = document.querySelector(".plus1-click-20");
  const minusClick_2 = document.querySelector(".minus2-click");
  const plusClick5_2 = document.querySelector(".plus2-click-5");
  const plusClick10_2 = document.querySelector(".plus2-click-10");
  const plusClick20_2 = document.querySelector(".plus2-click-20");
  const minusClick_3 = document.querySelector(".minus3-click");
  const plusClick5_3 = document.querySelector(".plus3-click-5");
  const plusClick10_3 = document.querySelector(".plus3-click-10");
  const plusClick20_3 = document.querySelector(".plus3-click-20");
  const ticks_1 = document.querySelectorAll('.cls-10');
  const circles_1 = document.querySelectorAll('.cls-11');
  const player1Points = document.getElementById('totalClicks1');
  const ticks_2 = document.querySelectorAll('.cls-20');
  const circles_2 = document.querySelectorAll('.cls-22');
  const player2Points = document.getElementById('totalClicks2');
  const ticks_3 = document.querySelectorAll('.cls-30');
  const circles_3 = document.querySelectorAll('.cls-33');
  const player3Points = document.getElementById('totalClicks3');


  //Lets
  let totalPoints1 = 0;
  let totalPoints2 = 0;
  let totalPoints3 = 0;


  function add5_1() {
    totalPoints1 += 5;
    showPoints_1();
  }

  function add10_1() {
    totalPoints1 += 10;
    showPoints_1();
  }

  function add20_1() {
    totalPoints1 += 20;
    showPoints_1();
  }

  function minus5_1() {
    totalPoints1 -= 5;
    showPoints_1();
  }

  function add5_2() {
    totalPoints2 += 5;
    showPoints_2();
  }

  function add10_2() {
    totalPoints2 += 10;
    showPoints_2();
  }

  function add20_2() {
    totalPoints2 += 20;
    showPoints_2();
  }

  function minus5_2() {
    totalPoints2 -= 5;
    showPoints_2();
  }

  function add5_3() {
    totalPoints3 += 5;
    showPoints_3();
  }

  function add10_3() {
    totalPoints3 += 10;
    showPoints_3();
  }

  function add20_3() {
    totalPoints3 += 20;
    showPoints_3();
  }

  function minus5_3() {
    totalPoints3 -= 5;
    showPoints_3();
  }

  
  function showPoints_1() {
    let numCircles = 0
    if (totalPoints1 <= 400 && totalPoints1 >= 0){
    ticks_1.forEach(function(tick) {
      tick.classList.remove('ticked');
    });
    circles_1.forEach(function(circle) {
      circle.classList.remove('ticked');
    });
    numCircles = totalPoints1 / 50;
      for (i = 1; i <= totalPoints1/5; i++) {
        ticks_1[i - 1].classList.add('ticked');
        for (j = 1; j <= numCircles; j ++) {
          circles_1[j- 1].classList.add('ticked');
        }
      }
    }
    player1Points.innerText = totalPoints1;
  }

  function showPoints_2() {
    let numCircles = 0
    if (totalPoints2 <= 400 && totalPoints2 >= 0){
    ticks_2.forEach(function(tick) {
      tick.classList.remove('ticked');
    });
    circles_2.forEach(function(circle) {
      circle.classList.remove('ticked');
    });
    numCircles = totalPoints2 / 50;
      for (i = 1; i <= totalPoints2/5; i++) {
        ticks_2[i - 1].classList.add('ticked');
        for (j = 1; j <= numCircles; j ++) {
          circles_2[j- 1].classList.add('ticked');
        }
      }
    }
    player2Points.innerText = totalPoints2;
  }

  function showPoints_3() {
    let numCircles = 0
    if (totalPoints3 <= 400 && totalPoints3 >= 0){
    ticks_3.forEach(function(tick) {
      tick.classList.remove('ticked');
    });
    circles_3.forEach(function(circle) {
      circle.classList.remove('ticked');
    });
    numCircles = totalPoints3 / 50;
      for (i = 1; i <= totalPoints3/5; i++) {
        ticks_3[i - 1].classList.add('ticked');
        for (j = 1; j <= numCircles; j ++) {
          circles_3[j- 1].classList.add('ticked');
        }
      }
    }
    player3Points.innerText = totalPoints3;
  }
