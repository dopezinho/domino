  let data = {Players:{},
              Winner:0,
              Day:0};
  //Plus and Minus five buttons
  const plusFiveRect1 = document.getElementById('plus-five-rect1')
  const minusFiveRect1 = document.getElementById('minus-five-rect1')
  const plusFiveRect2 = document.getElementById('plus-five-rect2')
  const minusFiveRect2 = document.getElementById('minus-five-rect2')
  const plusFiveRect3 = document.getElementById('plus-five-rect3')
  const minusFiveRect3 = document.getElementById('minus-five-rect3')
  
  
  //Functions to keep track off points by buttons
  function add5(element) {
    const player = element.parentNode.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 5;
    showPoints(ticks, circles, playerPoints);
  }

  function add10(element) {
    const player = element.parentNode.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 10;
    showPoints(ticks, circles, playerPoints);
  }

  function add20(element) {
    const player = element.parentNode.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 20;
    showPoints(ticks, circles, playerPoints);
  }

  function minus5(element) {
    const player = element.parentNode.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) - 5;
    showPoints(ticks, circles, playerPoints);
  }

  function galada(element) {
    const player = element.parentNode;
    console.log(player);
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 50;
    showPoints(ticks, circles, playerPoints);
  }

  function passar(element) {
    const player = element.parentNode;
    console.log(player);
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 10;
    showPoints(ticks, circles, playerPoints);
  }

  function carrao(element, ncarrao) {
    const player = element.parentNode;
    console.log(player);
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + ncarrao*10;
    showPoints(ticks, circles, playerPoints);
  }



  //Function to show the ticks
  function showPoints(ticks, circles, playerPoints) {
    let numCircles = 0;
    if (playerPoints.value <= 400 && playerPoints.value >= 0){
    ticks.forEach(function(tick) {
      tick.classList.remove('ticked');
    });
    circles.forEach(function(circle) {
      circle.classList.remove('ticked');
    });
    numCircles = playerPoints.value / 50;
      for (i = 1; i <= playerPoints.value/5; i++) {
        ticks[i - 1].classList.add('ticked');
        for (j = 1; j <= numCircles; j ++) {
          circles[j- 1].classList.add('ticked');
        }
      }
    }
    playerPoints.innerText = playerPoints.value;
  }


  // Function to show the options modal. the Onclick is on the HTML playerName
  function showPlayerOptions(element) {
    var modal = document.getElementById("optionsModal");
    modal.style.display = "block";

    var modalHeading = document.getElementById("modalHeading");
    modalHeading.innerText = element.innerText;

    var closeButton = document.getElementsByClassName("close")[0];

    // Close the modal when the close button is clicked
    closeButton.onclick = function() {
      modal.style.display = "none";
    };

    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  // Function to select an option. the Onclick is on the HTML modal
  let ncarrao;
  let rodadaN = 1;
  function selectOption(element) {
    console.log(element.innerText);
    switch (element.innerText) {
      case 'CARRÕES':
        var modal = document.getElementById("optionsModal");
        element.style.display = 'none';
        element.parentNode.querySelector('#baixar4').style.display = 'flex';
        element.parentNode.querySelector('#baixar5').style.display = 'flex';
        element.parentNode.querySelector('#baixar6').style.display = 'flex';
      break;
      case 'BATEU':
        addData(rodadaN);
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case 'GALOU':
        const player = element.parentNode.parentNode.querySelector('h3').innerText;
        const playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            galada(playerName);
          }
        });
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case 'PASSOU':
        const playerP = element.parentNode.parentNode.querySelector('h3').innerText;
        const playerListP = document.querySelectorAll('.playerName');
        playerListP.forEach(function(playerName) {
          if (playerName.innerText !== playerP) {
            console.log(playerP);
            console.log(playerName);
            (function(currentPlayer) {
              console.log(currentPlayer);
              passar(currentPlayer);
            })(playerName);
          }
        });
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case 'BAIXOU':
        const playerC = element.parentNode.parentNode.querySelector('h3').innerText;
        const playerListC = document.querySelectorAll('.playerName');
        playerListC.forEach(function(playerName) {
          if (playerName.innerText === playerC) {
            carrao(playerName, ncarrao);
          }
        });
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case '4':
        ncarrao = element.value;
        element.parentNode.parentNode.querySelector('#baixar').style.display = 'block';
        element.parentNode.style.display = 'none';
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case '5':
        ncarrao = element.value
        element.parentNode.parentNode.querySelector('#baixar').style.display = 'block';
        element.parentNode.style.display = 'none';
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case '6':
        ncarrao = element.value
        element.parentNode.parentNode.querySelector('#baixar').style.display = 'block';
        element.parentNode.style.display = 'none';
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
    }
  }


  function addData(rodada) {
    const players = document.querySelectorAll('.playerName');
    const points = document.querySelectorAll('.playerPoints');
    const rodadaKey = `Rodada ${rodada}`;
    const carrao = 'Número de Carrões'
    
    players.forEach(function(player, i=0) {
      const playerName = player.innerText;
      data.Players[playerName] = {
        [rodadaKey]: {}
      };
      data.Players[playerName][rodadaKey] = {
        Pontos : points[i].value,
        [carrao]: 0,
        Galadas: 0,
        Baixou: 0,
        Começou: 0,
        Bateu: 0
      }
      console.log(data);
      i+= 1;
    });
  }



