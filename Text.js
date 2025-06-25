let inputText = document.getElementById("input-text");
let characterCount = document.querySelector("#char-count");
let wordCount = document.getElementById("word-count");
let sentenceCount = document.getElementById("sentence-count");
let paragraphCount = document.getElementById("paragraph-count");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

inputText.addEventListener("input", () => {
    characterCount.value = inputText.value.length;  
    
    const words = inputText.value.match(/\b\w+\b/g);
    wordCount.value = words ? words.length : 0;
        
    const sentences = inputText.value.match(/[^\.!?]*[\.!?]/g);
    sentenceCount.value = sentences ? sentences.length : 0;
        
    const paragraphs = inputText.value.split(/\n{2,}/);
    paragraphCount.value = paragraphs ? paragraphs.length : 0;
});

btn1.addEventListener("click", () => {
    let inputText1 = inputText.value.toUpperCase();
    inputText.value = inputText1;
});

btn2.addEventListener("click", () => {
    let inputText1 = inputText.value.toLowerCase();
    inputText.value = inputText1;
});

btn3.addEventListener("click", () => {
    let inputText1 = inputText.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    inputText.value = inputText1;
});

btn4.addEventListener("click", () => {
    let inputText1 = inputText.value.replace(/\s+/g, "");
    inputText.value = inputText1;
});

btn5.addEventListener("click", () => {
    let inputText1 = inputText.value.replace(/\r\n/g, " ");
    inputText.value = inputText1;
});