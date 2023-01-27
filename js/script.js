const joke = document.querySelector(".joke"),
  btn = document.querySelector(".btn");

const apiKey = "DTHeCY/RkrAS4StQJnMZPg==K4V8hk75KXns8s1a";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
  contentType: "application/json",
};
const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  try {
    joke.textContent = "Loading Joke ... 🤣";
    btn.disabled = true;
    btn.textContent = "Loading ...";
    const res = await fetch(apiUrl, options);
    const data = await res.json();

    btn.disabled = false;
    btn.textContent = "Smile";

    joke.textContent = data[0].joke;
  } catch (error) {
    joke.textContent = "Some thing error, please try again";
    btn.disabled = false;
    btn.textContent = "Smile";
  }
}
btn.addEventListener("click", getJoke);
