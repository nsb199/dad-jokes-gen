const jokeBtn = document.getElementById('jokeBtn');
const jokeContainer = document.getElementById('jokeContainer');
const loading = document.getElementById('loading');

jokeBtn.addEventListener('click', fetchJoke);

async function fetchJoke() {
  try {
    loading.style.display = 'block'; // Show loading message
    jokeContainer.innerText = ''; // Clear previous joke
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Failed to fetch joke. Please try again.');
    }
    const data = await response.json();
    displayJoke(data.joke);
  } catch (error) {
    console.error('Error fetching joke:', error);
    jokeContainer.innerHTML = `<div class="error">${error.message} <span class="smiley">&#128514;</span></div>`;
  } finally {
    loading.style.display = 'none'; // Hide loading message
  }
}

function displayJoke(joke) {
  jokeContainer.innerHTML = `<div class="joke">${joke}</div>`;
}
