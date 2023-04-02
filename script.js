const txt = "hello world!! I'm";
const typedTag = document.getElementById("effect");
const insertSpan = document.querySelector(".insert");
const speed = 200;
let charIndex = 0;
console.log(typedTag, insertSpan)
function typeWriter() {
    if (charIndex < txt.length) {
        if(!insertSpan.classList.contains("typing")) {insertSpan.classList.add("typing");}
        typedTag.textContent += txt.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        insertSpan.classList.remove("typing");
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(txt.length) setTimeout(typeWriter, 200);
});
