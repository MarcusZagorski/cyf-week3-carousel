var fruits;

fruits = [
  "https://i.ibb.co/GHCPBVN/thanos.png",
  "https://i.ibb.co/4VVywSG/spiderman.png",
  "https://i.ibb.co/swH0bhb/batman.png",
];

document.getElementById("next").addEventListener("click", (event) => {
  let element_picture_display = document.getElementById("picture-display");
  fruits.push(fruits[0]);
  element_picture_display.setAttribute("src", fruits.shift());
});

document.getElementById("previous").addEventListener("click", (event) => {
  let element_picture_display2 = document.getElementById("picture-display");
  fruits.unshift(fruits.slice(-1)[0]);
  element_picture_display2.setAttribute("src", fruits.pop());
});
