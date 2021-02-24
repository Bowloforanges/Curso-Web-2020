//  EVENT LISTENERS

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clickHandler);
}

document.addEventListener("keydown", keyHandler);

//  EVENT HANDLER FUNCTIONS

function keyHandler(e){

  playSound(e.key);
  toggleStyle(e.key);

}

function clickHandler() {

  playSound(this.innerHTML);
  toggleStyle(this.innerHTML);

}

//  OTHER FUNCTIONS

function toggleStyle(myKey){

  var activeButton = document.querySelector("." + myKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){

    activeButton.classList.remove("pressed");

  }, 100);

}

function playSound(myKey){

  switch (myKey) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.load();
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.load();
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.load();
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.load();
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.load();
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.load();
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.load();
      tom4.play();
      break;

    default:
      console.log(myKey);

  }


}
