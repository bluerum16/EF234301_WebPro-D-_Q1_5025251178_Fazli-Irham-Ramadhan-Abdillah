const teks = "Hi, Welcome to my Website";
const speed = 70;
let index = 0;

function typeWritter() {
    if(index < teks.length) {
        document.getElementById("typing-teks").innerHTML += teks.charAt(index);
        index++;
        setTimeout(typeWritter, speed);
    }
}

window.onload = typeWritter;