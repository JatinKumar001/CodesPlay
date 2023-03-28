// get the element
const text = document.querySelector('.typing-text');
const body = document.querySelector('body'),
  sidebar = body.querySelector('.container'),
  sidebar2 = body.querySelector('.imgs'),
  sidebar3 = body.querySelector('.images2'),
  toggle = body.querySelector(".toggle");

// make a words array
const words = [
  "Web Developer",
  "Gamer",
  "coder",
  "Designer",
  "Adventurer"
];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {

  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }

    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {

    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }

  }
}


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  sidebar2.classList.toggle("close");
  sidebar3.classList.toggle("close");
});


$(".card").click(function () {
  $(".card").removeClass("active");
  $(this).addClass("active");
  if ($(".card.active").hasClass("dontshow")){
    $(".left").addClass("dont");
    $(".container").addClass("dont");
  }
  else{
    $(".left").removeClass("dont");
    $(".container").removeClass("dont");
  }
});

$(".card").click(function () {
  if($(".card.active").hasClass("navshow")){
    $(".profile").addClass("navshow");
  }
  else{
    $(".profile").removeClass("navshow");
  }
});

$(".home1").click(function () {
  $(".card").removeClass("active");
  $(".home2").addClass("active");
  if ($(".card.active").hasClass("dontshow")){
    $(".left").addClass("dont");
    $(".container").addClass("dont");
  }
  else{
    $(".left").removeClass("dont");
    $(".container").removeClass("dont");
  }

  if($(".card.active").hasClass("navshow")){
    $(".profile").addClass("navshow");
  }
  else{
    $(".profile").removeClass("navshow");
  }
});

$(".about1").click(function () {
  $(".card").removeClass("active");
  $(".about2").addClass("active");
  if ($(".card.active").hasClass("dontshow")){
    $(".left").addClass("dont");
    $(".container").addClass("dont");
  }
  else{
    $(".left").removeClass("dont");
    $(".container").removeClass("dont");
  }

  if($(".card.active").hasClass("navshow")){
    $(".profile").addClass("navshow");
  }
  else{
    $(".profile").removeClass("navshow");
  }
});

$(".project1").click(function () {
  $(".card").removeClass("active");
  $(".project2").addClass("active");
  if ($(".card.active").hasClass("dontshow")){
    $(".left").addClass("dont");
    $(".container").addClass("dont");
  }
  else{
    $(".left").removeClass("dont");
    $(".container").removeClass("dont");
  }

  if($(".card.active").hasClass("navshow")){
    $(".profile").addClass("navshow");
  }
  else{
    $(".profile").removeClass("navshow");
  }
});

$(".contact1").click(function () {
  $(".card").removeClass("active");
  $(".contact2").addClass("active");
  if ($(".card.active").hasClass("dontshow")){
    $(".left").addClass("dont");
    $(".container").addClass("dont");
  }
  else{
    $(".left").removeClass("dont");
    $(".container").removeClass("dont");
  }

  if($(".card.active").hasClass("navshow")){
    $(".profile").addClass("navshow");
  }
  else{
    $(".profile").removeClass("navshow");
  }
});

function myFunction() {
  var copyText = document.getElementById("myInput");
  console.log(copyText);

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  document.getElementById('copy').style.cssText = 'display: flex; color: aqua; position: absolute; top: 80px;';
  setTimeout(() => {
    document.getElementById('copy').style.cssText = 'display: none;';
  }, 2000);
}