  let data = {Players:{},
              Winner:0,
              Day:0};
<<<<<<< HEAD
  

=======


  //Plus and Minus five buttons
  const plusFiveRect1 = document.getElementById('plus-five-rect1')
  const minusFiveRect1 = document.getElementById('minus-five-rect1')
  const plusFiveRect2 = document.getElementById('plus-five-rect2')
  const minusFiveRect2 = document.getElementById('minus-five-rect2')
  const plusFiveRect3 = document.getElementById('plus-five-rect3')
  const minusFiveRect3 = document.getElementById('minus-five-rect3')
  
>>>>>>> 739ea13f0a6790c2d931aeeb8e7785a29a2eb65f

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
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 50;
    showPoints(ticks, circles, playerPoints);
  }

  function passar(element) {
    const player = element.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 10;
    showPoints(ticks, circles, playerPoints);
  }

  function carrao(element, ncarrao) {
    const player = element.parentNode;
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
    var player;
    var playerList;
    switch (element.innerText) {
      case 'CARRÕES':
        var modal = document.getElementById("optionsModal");
        element.style.display = 'none';
        element.parentNode.querySelector('#baixar4').style.display = 'flex';
        element.parentNode.querySelector('#baixar5').style.display = 'flex';
        element.parentNode.querySelector('#baixar6').style.display = 'flex';
      break;
      case 'BATEU':
        player = element.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const bateu = playerName.dataset.bateu || 0;
            playerName.dataset.bateu = parseInt(bateu) + 1;
          }
        });
        addData(rodadaN);
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
        rodadaN += 1;
        //reset datasets
        playerList.forEach(function(playerName) {
          playerName.dataset.bateu = 0;
          playerName.dataset.nCarrao = 0;
          playerName.dataset.galouCount = 0; 
          playerName.dataset.passou = 0;
          playerName.dataset.baixou = 0;
          playerName.dataset.fechou = 0;
        });
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const bateu = playerName.dataset.bateu || 0;
            playerName.dataset.bateu = parseInt(bateu) + 1;
          }
        });
      break;
      case 'GALOU':
        player = element.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const galouCount = playerName.dataset.galouCount || 0;
            playerName.dataset.galouCount = parseInt(galouCount) + 1;
            galada(playerName);
          }
        });      
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
        
      break;
      case 'PASSOU':
        player = element.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText !== player) {

            (function(currentPlayer) {
              passar(currentPlayer);
            })(playerName);
          }
          else {
            const passou = playerName.dataset.passou || 0;
            playerName.dataset.passou = parseInt(passou) + 1;
          }
        });
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case 'BAIXOU':
        player = element.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const baixou = playerName.dataset.baixou || 0;
            playerName.dataset.baixou = parseInt(baixou) + 1;
            carrao(playerName, ncarrao);
          }
        });
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
      break;
      case 'FECHOU':
        player = element.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const fechou = playerName.dataset.fechou || 0;
            playerName.dataset.fechou = parseInt(fechou) + 1;
          }
        });
        addData(rodadaN);
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
        rodadaN += 1;
        //reset datasets
        playerList.forEach(function(playerName) {
          playerName.dataset.bateu = 0;
          playerName.dataset.nCarrao = 0;
          playerName.dataset.galouCount = 0; 
          playerName.dataset.passou = 0;
          playerName.dataset.baixou = 0;
          playerName.dataset.fechou = 0;
        });
      break;
      case '4':
        ncarrao = element.value;
        element.parentNode.parentNode.querySelector('#baixar').style.display = 'block';
        element.parentNode.style.display = 'none';
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
        player = element.parentNode.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const nCarrao = playerName.dataset.nCarrao || 0;
            playerName.dataset.nCarrao = parseInt(nCarrao) + ncarrao;
          }
          })
      break;
      case '5':
        ncarrao = element.value
        element.parentNode.parentNode.querySelector('#baixar').style.display = 'block';
        element.parentNode.style.display = 'none';
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
        player = element.parentNode.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const nCarrao = playerName.dataset.nCarrao || 0;
            playerName.dataset.nCarrao = parseInt(nCarrao) + ncarrao;
          }
          })
      break;
      case '6':
        ncarrao = element.value
        element.parentNode.parentNode.querySelector('#baixar').style.display = 'block';
        element.parentNode.style.display = 'none';
        var modal = document.getElementById("optionsModal");
        modal.style.display = "none";
        player = element.parentNode.parentNode.parentNode.querySelector('h3').innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const nCarrao = playerName.dataset.nCarrao || 0;
            playerName.dataset.nCarrao = parseInt(nCarrao) + ncarrao;
          }
          })
      break;
    }
  }


  function addData(rodada) {
    const players = document.querySelectorAll('.playerName');
    const points = document.querySelectorAll('.playerPoints');
    var rodadaKey = `Rodada ${rodada}`;
    const carrao = 'Número de Carrões'
    players.forEach(function(player, index) {
      const playerName = player.innerText;
      data.Players[playerName] = {
        ...data.Players[playerName],
        [rodadaKey]: {}
      };  
      data.Players[playerName][rodadaKey] = {
        Pontos : points[index].value,
        [carrao]: player.dataset.nCarrao,
        Galadas: player.dataset.galouCount,
        Baixou: player.dataset.baixou,
        Começou: 0,
        Bateu: player.dataset.bateu,
        Passou: player.dataset.passou,
        Fechou: player.dataset.fechou
      }
    });

    for (const player in data.Players) {
      const points = data.Players[player][rodadaKey].Pontos;
      if (points >= 200) {
        /////////Oq deve acontecer quando alguem ganha
       window.alert(`Vencedor: ${player}`) 
      }
    }
  }

