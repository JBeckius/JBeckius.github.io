var timer;
var timer2;

function message(msg) {
  console.log(msg);
}
var door = document.getElementById('door');
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
    console.log(door.getAttribute('rotation').y);
  }
}
door.addEventListener("click", doorMove);
// door.addEventListener("mouseleave", timer2 = window.setInterval(doorClose, 100));
