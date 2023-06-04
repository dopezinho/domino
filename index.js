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
  function selectOption(self) {
    console.log(self.innerText);
    switch (self.innerText) {
      case 'Carrões':
        var inputValue = self.querySelector('input').value;
        console.log(inputValue);
      break;
      case 'Bater':
        console.log('Ok, bateu');
      break;
      case 'Galou':
        console.log(self.parentNode.parentNode);
      break;
    }
  }


