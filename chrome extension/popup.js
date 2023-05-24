document.getElementById('img').addEventListener('click', change);


function change() {
    console.log("hi");
    var image = document.getElementById('img');
    if (image.src.match("icons/onslider.png")) {
        image.src = "icons/offslider.png";
        document.getElementById('p').innerHTML = "OFF";
    } 
    else {
        image.src = "icons/onslider.png";
        document.getElementById('p').innerHTML = "ON";
    } }