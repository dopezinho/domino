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
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 5;
    showPoints(ticks, circles, playerPoints);
  }

  function add10(element) {
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 10;
    showPoints(ticks, circles, playerPoints);
  }

  function add20(element) {
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 20;
    showPoints(ticks, circles, playerPoints);
  }

  function minus5(element) {
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) - 5;
    showPoints(ticks, circles, playerPoints);
  }

  function galada(element) {
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 50;
    showPoints(ticks, circles, playerPoints);
  }

  function passar(element) {
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + 10;
    showPoints(ticks, circles, playerPoints);
  }

  function carrao(element, ncarrao) {
    const player = element.parentNode.parentNode;
    const ticks = Array.from(player.querySelectorAll('path')).slice(2);
    const circles = Array.from(player.querySelectorAll('circle')).splice(1);
    const playerPoints = player.querySelector('.playerPoints');
    playerPoints.value = Number(playerPoints.innerText) + ncarrao*10;
    showPoints(ticks, circles, playerPoints);
  }

  // Function to show the ticks
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

  // Function to restart all ticks
  function deleteTicks() {
    const ticks = document.querySelectorAll('path');
    ticks.forEach(function(tick) {
      tick.classList.remove('ticked')});
    const circles = document.querySelectorAll('circle');
    circles.forEach(function(circle) {
      circle.classList.remove('ticked')});
  }

  // Reset all ticks
  function resetGame(players) {
    const playerPoints = document.querySelectorAll('.playerPoints');
    playerPoints.forEach(function(player) {
      player.value = 0;
      player.innerHTML = '0';
    });
    deleteTicks()
    players.forEach(function(player){
      player.dataset.nCarrao = 0
      player.dataset.galouCount = 0
      player.dataset.baixou = 0
      player.dataset.comecou = 0
      player.dataset.bateu = 0
      player.dataset.passou = 0
      player.dataset.fecho = 0
    })
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
          playerName.dataset.comecou = 0;
        });
        playerList.forEach(function(playerName) {
          if (playerName.innerText === player) {
            const comecou = playerName.dataset.comecou || 0;
            playerName.dataset.comecou = parseInt(comecou) + 1;
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
        player = element.parentNode.parentNode.querySelector('h3').
        innerText;
        playerList = document.querySelectorAll('.playerName');
        playerList.forEach(function(playerName) {
          if (playerName.innerText !== player)  {
              passar(playerName);
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
          playerName.dataset.comecou = 0;
          playerName.dataset.baixou = 0;
          playerName.dataset.fechou = 0;
        });
        startModal = document.querySelector('#starterModal').style.display = 'block';
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
        Começou: player.dataset.comecou,
        Bateu: player.dataset.bateu,
        Passou: player.dataset.passou,
        Fechou: player.dataset.fechou
      }
    });
    console.log(data);
    points.forEach(function(point) {
      if (point.value >= 200) {
        const player = point.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        resetGame(players)
        data = {Players:{},
                Winner:0,
                Day:0};
        rodadaN = 0;
        window.alert(`Vencedor: ${player}`) 
      }
    })
    // for (const player in data.Players) {
    //   if (points.value >= 200) {
    //     resetGame(players)
    //     data = {Players:{},
    //             Winner:0,
    //             Day:0};
    //     rodadaN = 0;
    //    window.alert(`Vencedor: ${player}`) 
    //   }
    // }
  }

  /* Mutable Screens */

  function changeScreen1() {
    const playersSelect = document.getElementById('playersSelect')
    const playersInput3 = document.getElementById('playersInput3')
    const messageGapH2 = document.getElementById('messageGapH2')
    playersSelect.style.display = 'none'
    playersInput3.style.display = 'flex'
    messageGapH2.innerHTML = 'Digite o nome dos jogadores e clique no dominó para continuar'
  }

  function changeScreen2() {
    const playersInput3 = document.getElementById('playersInput3');
    const playersTemplate = document.getElementById('playersTemplate');
    const messageGapH2 = document.getElementById('messageGapH2');
    playersInput3.style.display = 'none';
    playersTemplate.style.display = 'flex';
    messageGapH2.innerHTML = "auiiiiii let's play";
    const playerNamesInputs = document.querySelectorAll('.playerInput');
    const players = document.querySelectorAll('.playerName');
    playerNamesInputs.forEach(function(player, index) {
      players[index].innerText = player.value;
    })
    createModal(3);
  }

  /* header:hover */
  
/* fezinho's code
  const header = document.getElementById('header')
  const select2 = document.getElementById('select2')
  const select3 = document.getElementById('select3')
  const select4 = document.getElementById('select4')
  const inputHover = document.getElementById('inputHover')
  const inputSelected3 = document.getElementById('inputSelected3')
  const player1 = document.getElementById('p1')
  const player2 = document.getElementById('p2')
  const player3 = document.getElementById('p3')


  header.addEventListener('mouseenter', () => select2.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => select2.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => select3.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => select3.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => select4.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => select4.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => inputHover.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => inputHover.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => inputSelected3.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => inputSelected3.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => player1.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => player1.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => player2.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => player2.style.backgroundColor = '#232323f2')

  header.addEventListener('mouseenter', () => player.style.backgroundColor = 'transparent')
  header.addEventListener('mouseleave', () => player.style.backgroundColor = '#232323f2')
   */

  /* chat gpt code */
  
const elements = ['select2', 'select3', 'select4', 'inputHover', 'inputSelected3', 'p1', 'p2', 'p3', 'j1', 'j2', 'j3'];

elements.forEach((elementId) => {
  const element = document.getElementById(elementId);
  header.addEventListener('mouseenter', () => element.style.backgroundColor = 'transparent');
  header.addEventListener('mouseleave', () => element.style.backgroundColor = 'var(--bg-color)');
});
/* change bg */

const maua = document.getElementById('maua')
const body = document.getElementById('body')

function changeBg() {
  body.style.backgroundImage = 'url(./src/bege5.png)'
}

//create the Startedrs modal
function createModal(numPlayers) {
  // Create the main div and set its properties
  let modalDiv = document.createElement('div');
  modalDiv.id = 'starterModal';
  modalDiv.className = 'modal';
  
  // Create the modal-content div
  let contentDiv = document.createElement('div');
  contentDiv.className = 'modal-content';

  // Create the heading
  let heading = document.createElement('h3');
  heading.id = 'startedModalHeading';
  heading.innerHTML = "Quem começou?"

  // Create the ul and the li elements
  let ulElement = document.createElement('ul');
  ulElement.className = 'modalOptions';

  // Get player Names
  const playerNames = document.querySelectorAll('.playerInput')

  // Add list items
  for (let i = 1; i <= numPlayers; i++) {
      const name = playerNames[i - 1].value;
      let liElement = document.createElement('li');
      liElement.textContent = name;
      liElement.onclick = function() {
        chooseStarter(this);
      };
      ulElement.appendChild(liElement);
  }

  // Append all the elements to the content div
  contentDiv.appendChild(heading);
  contentDiv.appendChild(ulElement);

  // Append the content div to the main div
  modalDiv.appendChild(contentDiv);

  // Append the main div to the body of the document
  document.body.appendChild(modalDiv);
  modalDiv.style.display = 'block'
}

// Adiciona nos datasets quem começou
function chooseStarter(element) {
  playerList = document.querySelectorAll('.playerName');
  playerList.forEach(function(playerName) {
    if (playerName.innerText.toLowerCase() === element.innerText.toLowerCase()) {
      const comecou = playerName.dataset.comecou || 0;
      playerName.dataset.comecou = parseInt(comecou) + 1;
    }
  });      
  var modal = document.getElementById("starterModal");
  modal.style.display = "none";
}
