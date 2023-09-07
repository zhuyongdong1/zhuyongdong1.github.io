let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bobbyH2-icon.png") {
    myImage.setAttribute("src", "images/bobbyh2.jpg");
  } else {
    myImage.setAttribute("src", "images/bobbyH2-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

