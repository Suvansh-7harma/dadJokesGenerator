const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "EShe44UyqazTbKiECxyZtw==xpxZh9hIIui7cldQ";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeEl.innerText = "This one Crazy... Haha";
    btnEl.disabled = true;
    btnEl.innerText = "Boom !";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Once more !";

    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Once more !";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);

