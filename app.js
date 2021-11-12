const axios = require('axios').default;

var text = document.getElementById("mytext");
var iPage = `<div class="iPage page" id="iPage">itest
</div>`;
var rPage = `<div class="rPage page" id="rPage">rtest
</div>`;

//get a random image from the api
// async function getRandomImage() {
//     try {
//         //get response from api
//         const response = await axios.get('https://api.thedogapi.com/v1/images/search');

//         const dogImageUrl = response.url;

//         //for debugging
//         console.log("here is the image url: ", dogImageUrl);

//         return dogImageUrl;
//     }catch (errors) {
//         console.error(errors);
//         console.log("oops...something went wrong.");
//     }
// }

//for making the buttons behave correctly
var random_button = document.querySelector(".random");
var independent_button = document.querySelector(".independent");
random_button.addEventListener("click", function() {
    text.innerHTML = iPage;
    console.log("random button pressed");
    onRandom = true;
});
independent_button.addEventListener("click", function() {
    text.innerHTML = rPage;
    console.log("independent button pressed");
    onRandom = false;
});
  