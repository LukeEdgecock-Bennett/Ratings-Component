

let submitButton = document.getElementById("submit");
let selectRatingContainer = document.getElementById("selectRating");
let thankYouSection = document.getElementById("thankyouSplash");




submitButton.addEventListener("click", () => {
    let selectedRadio = document.querySelector('input[type="radio"]:checked');

    if(selectedRadio === null)
    {
        return;
    }

   let ratingsContainer =  document.getElementById("selectedRatingContaienr");

   let userText = document.createElement('p');

   userText.textContent = `You selected ${selectedRadio.value} out of 5`;

   ratingsContainer.appendChild(userText);

   selectRatingContainer.style.display = "none"
   thankYouSection.style = "";

})
