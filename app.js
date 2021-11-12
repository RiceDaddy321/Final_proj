const axios = require("axios");

function showImage(res)
{
    document.getElementById("mytext").innerHTML = `
    <div class="rPage page" id="rPage">
        <img src="${res.url}" height=100px width=300px alt="">
    </div>
    `;
}
//get a random image from the api
async function getRandomImage() {
    axios.get('https://api.thedogapi.com/v1/images/search', {
        timeOut: 5000
    })
    .then(res => showImage(res))
    .catch(err => console.error(err));
}

// Event listeners
document.querySelector('.random').addEventListener('click', getRandomImage());



  