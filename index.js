for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
      var innerVariable = this.innerHTML;
      makeSound(innerVariable);
    }

  );
}
document.addEventListener("keypress", function(event) {
  makeSound(event.key);

});
function makeSound(key){
switch (key) {
  case "a":
    var tom1 = new Audio('tom-1.mp3');
    tom1.play();
    break;
  case "w":
    var tom3 = new Audio('tom-3.mp3');
    tom3.play();
    break;
  case "l":
    var tom2 = new Audio('tom-2.mp3');
    tom2.play();
    break;
  case "s":
    var tom4 = new Audio('tom-4.mp3');
    tom4.play();
    break;
  case "d":
    var crash = new Audio('crash.mp3');
    crash.play();
    break;
  case "j":
    var kick = new Audio('kick-bass.mp3');
    kick.play();
    break;
  case "k":
    var snare = new Audio('snare.mp3');
    snare.play();
    break;
  default:
}
}
