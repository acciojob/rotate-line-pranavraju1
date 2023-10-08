//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    var line = document.getElementById("line");
    var angle = 0;
    function rotateLine() {
      angle += 2; 
      line.style.transform = "rotate(" + angle + "deg)";
    }
    setInterval(rotateLine, 20);
  });