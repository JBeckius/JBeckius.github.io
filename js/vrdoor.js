var timer;
var timer2 = window.setInterval(message(2), 2000);

function message(msg) {
  console.log(msg);
}
var door = document.getElementById('door');
console.log(door.getAttribute('rotation'));
{let i = 0;
  function doorOpen() {
    while (door.getAttribute('rotation').y < 90) {
      door.setAttribute('rotation', "0 " + i + " 0");
      console.log(door.getAttribute('rotation'));
      i++;
    }
  }
  function doorClose() {
    while (door.getAttribute('rotation').y > 0) {
      door.setAttribute('rotation', "0 " + i + " 0");
      i--;
    }
  }
}
door.addEventListener("mouseenter", timer = window.setInterval(doorOpen, 100000));
door.addEventListener("mouseleave", timer = window.setInterval(doorClose, 1000));
