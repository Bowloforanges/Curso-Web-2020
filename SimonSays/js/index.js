var buttons = ["green", "red", "yellow", "blue"];
var sequence = [];
var count = 0;

console.clear();
generateNextInSequence();


function reset() {
  sequence = [];
  count = 0;
}

function lightUp(mySequence) {

  for (var i = 0; i < mySequence.length; i++) {

    var color = buttons[mySequence[i]];

    var currButton = document.getElementById("#" + color);
    var imgArray = ["img/" + color + "-released.png", "img/" + color + "-glow.png", "img/" + color + "-released.png"];
    var j = 0;

    var timer = setInterval(function() {

      if(j >= imgArray.length) {
        clearInterval(timer);
        return;
      }

      $("#" + color + " img").attr("src", imgArray[j++]);

    }, 500);


  }
  imgArray = [];

}

function generateNextInSequence() {
  sequence.push(Math.floor(Math.random() * 4));
  lightUp(sequence);
}

$(".btn").click(function(e) {

  let userChoice = -1;
  console.log(sequence);
  switch (e.currentTarget.id) {

    case "green":
      userChoice = 0;
      break;
    case "red":
      userChoice = 1;
      break;
    case "yellow":
      userChoice = 2;
      break;
    case "blue":
      userChoice = 3;
      break;
    default:
      userChoice = -1;
  }

  if(userChoice = sequence[count]) {

    if(count == (sequence.length - 1)){
      generateNextInSequence();
      console.log("new value added");
      count = 0;
    } else{
      count ++;
      console.log("correct");
    }

  } else {
    reset();
    console.log("you lose");
  }

});
