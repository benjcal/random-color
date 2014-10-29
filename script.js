// copied from http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

//originaly mine :-)
function randomColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var rgb = 'RGB(' + r + ',' + g + ',' + b +')';
    document.body.style.backgroundColor = rgb;
    document.getElementById("id1").innerHTML = rgbToHex(r, g, b).toUpperCase();
    console.log(rgb)
}
