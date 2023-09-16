var level = 8
var myArray = ['tom-1','tom-2','tom-3','tom-4','snare','crash','kick-bass'];
var keys=['w','a','s','d','j','k','l'];
 


for ( var i = 0; i <document.querySelectorAll(".drum").length; i++ ){
    clickAudio(i);
    keyAudio(i);
}


function clickAudio(level){
    document.querySelectorAll(".drum")[level].addEventListener("click",function() {
        playAudio(level);
    });

}

function keyAudio (level) {
    document.addEventListener("keypress", function (event) {
      if (event.key.toLowerCase() === keys[level]) {
          playAudio(level);
      }
    });
}

function playAudio(level){
    var audio = new Audio( 'sounds/' + myArray[level] + '.mp3');
    audio.play();
}
