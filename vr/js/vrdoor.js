
var timer;
var timer2;

console.log(document.cookie);
console.log(typeof(document.cookie));
var door = document.getElementById('door');
var teleporter = document.getElementsByClassName('teleporter');
var camera = document.getElementById('camera');
var thisRoom = document.getElementsByTagName("a-scene");
// console.log(typeof(thisRoom[0].id));
if(thisRoom[0].id === "mainRoom" && document.cookie === "lastRoom=rightRoom") {
  camera.setAttribute('position', "7.5 1.8 -11");
  camera.setAttribute('rotation', "0 90 0")
}
// console.log(teleporter);
// console.log(typeof(teleporter));
// console.log(door.getAttribute('rotation'));
{let i = 0;
  function doorMove() {
    if (door.getAttribute('rotation').y === 0) {
      timer = setInterval(function() {
        if (door.getAttribute('rotation').y < 90) {
          door.setAttribute('rotation', "0 " + i + " 0");
          // console.log(door.getAttribute('rotation'));
          i+= 0.5;
        } else {clearInterval(timer);}
      }, 5);
    } else if(door.getAttribute('rotation').y === 90) {
      timer = setInterval(function() {
        if (door.getAttribute('rotation').y > 0) {
        door.setAttribute('rotation', "0 " + i + " 0");
        i-=0.5;
      } else {clearInterval(timer);}
      // clearInterval(timer2);
    }, 5);
    }
    // console.log(door.getAttribute('rotation').y);
  }
}

function teleport() {
  // console.log(this.getAttribute('position'));
  camera.setAttribute('position', this.getAttribute('position'));
}
door.addEventListener("click", doorMove);
for(var i = 0; i < teleporter.length; i++) {
  teleporter[i].addEventListener("click", teleport);
}
// door.addEventListener("mouseleave", timer2 = window.setInterval(doorClose, 100));

// console.log(thisRoom[0].id);

window.addEventListener("unload", function(event) {
  document.cookie="lastRoom=" + thisRoom[0].id;
    // console.log(document.cookie);
  });
