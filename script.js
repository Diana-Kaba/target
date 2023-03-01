let text = document.getElementById("wrap").innerHTML;

let arrLinks = [];
let reg = /https?:\/\/[^"]+/gi;

for (let i = 0; i < text.length; i++) {
  if (reg.test(text[i])) {
    arrLinks += text[i];
  }
}

text.innerHTML = arrLinks;
