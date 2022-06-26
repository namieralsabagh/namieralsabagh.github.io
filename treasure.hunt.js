var chest = 0;
var bomb = 0;
var playGame = true;




const treasure = (boxId) => {
  if (playGame === true) {
    if (chest === boxId) {
      alert("you found the booty");
      document.getElementById(boxId).innerHTML = "&#x1f308";
      playGame = false;
    } else if (bomb === boxId){
      alert("you found the bomb");
      document.getElementById(boxId).innerHTML = "&#x2620";
      playGame = false;
    } else {
      document.getElementById(boxId).innerHTML = "&#x1f332";
    }


  }


}
while (chest == bomb) {
    chest = Math.floor(Math.random() * 25);
    bomb = Math.floor(Math.random() * 25);
  }
