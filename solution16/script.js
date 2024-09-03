const plus1 = document.getElementById('plus-1');
const plus2 = document.getElementById('plus-2');
const plus3 = document.getElementById('plus-3');
const plus4 = document.getElementById('plus-4');

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

const minus1 = document.getElementById("minus-1");
const minus2 = document.getElementById("minus-2");
const minus3 = document.getElementById("minus-3");
const minus4 = document.getElementById("minus-4");


plus1.addEventListener('click', () => {
    answer1.classList.add("active");
    minus1.classList.add("active");
    plus1.classList.add("hidden");
});

plus2.addEventListener('click', () => {
    answer2.classList.add("active");
    minus2.classList.add("active");
    plus2.classList.add("hidden");
});

plus3.addEventListener('click', () => {
    answer3.classList.add("active");
    minus3.classList.add("active");
    plus3.classList.add("hidden");
});

plus4.addEventListener('click', () => {
    answer4.classList.add("active");
    minus4.classList.add("active");
    plus4.classList.add("hidden");
});



minus1.addEventListener('click', () => {
    answer1.classList.remove("active");
    minus1.classList.remove("active");
    plus1.classList.remove("hidden");
});

minus2.addEventListener('click', () => {
    answer2.classList.remove("active");
    minus2.classList.remove("active");
    plus2.classList.remove("hidden");
});

minus3.addEventListener('click', () => {
    answer3.classList.remove("active");
    minus3.classList.remove("active");
    plus3.classList.remove("hidden");
});

minus4.addEventListener('click', () => {
    answer4.classList.remove("active");
    minus4.classList.remove("active");
    plus4.classList.remove("hidden");
});
