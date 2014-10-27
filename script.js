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
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var rgb = 'RGB(' + x + ',' + y + ',' + z +')';
    document.body.style.backgroundColor = rgb;
    document.getElementById("id1").innerHTML = rgbToHex(x, y, z).toUpperCase();
}
