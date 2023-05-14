function createElement() {
    const img = document.createElement("img");
    img.src = "https://i.postimg.cc/vZ48FjKX/wizard4-removebg-preview.png";
    img.id = "rizzard";
    img.style.position = "absolute";
    document.body.appendChild(img);
    img.style.height = "10%";
    img.style.width = "5%";
    img.style.visibility = "hidden";
    return img;
}

const img = createElement();

function getRandomPosition() {
    var x = document.body.offsetWidth - 50;
    var y = document.body.offsetHeight - 50;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX,randomY];
  }

function pushImageToScreen(position) {
    img.style.left = position[0] + "px";
    img.style.top = position[1] + "px";
    img.style.visibility = "visible";
    main();
    removeImg();
}


function removeImg() {
    setTimeout(function() {img.style.visibility = "hidden";}, 5000);
}


function main() {
    setTimeout(pushImageToScreen, Math.floor(Math.random() * 50000), getRandomPosition());
}

img.addEventListener("click", rizzTip);

function rizzTip() {
    alert("this is a rizz tip");
}

main();