// Create the image element and set initial properties
function createElement() {
    const img = document.createElement("img");
    img.src = "https://i.postimg.cc/vZ48FjKX/wizard4-removebg-preview.png";
    img.id = "rizzard";
    img.style.position = "absolute";
    img.style.height = "10%";
    img.style.width = "5%";
    img.style.visibility = "hidden";
    document.body.appendChild(img);
    return img;
  }
  
  // Get random position within the visible area of the page
  function getRandomPosition() {
    const x = document.body.offsetWidth - img.offsetWidth;
    const y = document.body.offsetHeight - img.offsetHeight;
    const randomX = Math.floor(Math.random() * x);
    const randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  }
  
  // Show the image at the given position
  function pushImageToScreen(position) {
    const [x, y] = position;
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.visibility = "visible";
    main();
    removeImg();
  }
  
  // Hide the image after a delay
  function removeImg() {
    setTimeout(function() {
      img.style.visibility = "hidden";
    }, 5000);
  }
  
  // Main function to start the animation loop
  function main() {
    setTimeout(pushImageToScreen, Math.floor(Math.random() * 5000), getRandomPosition());
  }
  
  // Handle the click event on the image
  function rizzTip() {
    const rizz = [
      "Catcall her",
      "Show her your Pokémon card collection",
      "Send her Sigma TikToks to let her know you're a Sigma",
      "Legally stalk their social media profiles",
      "Give her random items from around your house as gifts"
    ];
    alert(rizz[Math.floor(Math.random() * rizz.length)]);
  }
  
  const img = createElement();
  img.addEventListener("click", rizzTip);
  main();
  