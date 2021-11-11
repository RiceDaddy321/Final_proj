var text = document.getElementById("mytext");
var iPage = `<div class="iPage page">
<h1>this is independent test</h1>
</div>`;
var rPage = `<div class="rPage page">
<h1>this is random test</h1>
</div>`;

var random_button = document.querySelector(".random");
var independent_button = document.querySelector(".independent");

random_button.addEventListener("click", function() {
    text.innerHTML = iPage;
});
independent_button.addEventListener("click", function() {
    text.innerHTML = rPage;//Now you get the js variable inside your form element
});
  