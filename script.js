
if (!String.format) {
  String.format = function(format) {
    var args = Array.prototype.slice.call(arguments, 1);
    return format.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
        ? args[number] 
        : match
      ;
    });
  };
}
function rangeChangeColor() {
    var red = document.getElementById("red").value, green = document.getElementById("green").value, blue = document.getElementById("blue").value;
    var title = document.getElementById("title");
    var redtitle = document.getElementById("redtitle");
    var greentitle = document.getElementById("greentitle");
    var bluetitle = document.getElementById("bluetitle");
    title.style.backgroundColor = String.format("rgb({0}, {1}, {2})", red, green, blue);
}
function numUpdate() {
    var red = document.getElementById("red").value, green = document.getElementById("green").value, blue = document.getElementById("blue").value;
    rednum = document.getElementById("redtitle");
    greennum = document.getElementById("greentitle");
    bluenum = document.getElementById("bluetitle");
    rednum.innerHTML = "Red: " + red;
    greennum.innerHTML = "Green: " + green;
    bluenum.innerHTML = "Blue: " + blue;
}
/*
function rangeUpdate() {
    var red = document.getElementById("rednum").value, green = document.getElementById("greennum").value, blue = document.getElementById("bluenum").value;
    redrange = document.getElementById("red");
    greenrange = document.getElementById("green");
    bluerange = document.getElementById("blue");
    redrange.value = red;
    greenrange.value = green;
    bluerange.value = blue;
}*/
function update() {
    rangeChangeColor();
    //rangeUpdate();
    numUpdate();
}
setInterval(update, 10);