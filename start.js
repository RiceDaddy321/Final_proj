var text = document.getElementById("mytext");
var iPage = `<div class="iPage page" id="iPage">itest
</div>`;


//for making the buttons behave correctly
var random_button = document.querySelector(".random");
var independent_button = document.querySelector(".independent");

random_button.addEventListener("click", function() {
    var rPage = `<div class="rPage page" id="rPage">
<img src="` + getRandomImage() + `" height=30% width=30% alt="">
</div>`;

    text.innerHTML = rPage;
    console.log("random button pressed");
    onRandom = true;
});
independent_button.addEventListener("click", function() {
    text.innerHTML = iPage;
    console.log("independent button pressed");
    onRandom = false;
});