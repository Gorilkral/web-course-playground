const list = document.querySelector("#event-list");
const statusText = document.querySelector("#status");
let events = [];

function renderEvents(items) {
  list.innerHTML = "";
  for (const item of items) {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = item.title;

    const p = document.createElement("p");
    p.textContent = item.date + " · " + item.place;

    article.append(h2, p);
    list.append(article);
  }
}

async function loadEvents() {
  statusText.textContent = "Loading events...";
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("HTTP " + response.status);

    events = await response.json();

    if (events.length === 0) {
      renderEvents(events);
      statusText.textContent = "No events found.";
      return;
    }

    statusText.textContent = "";
    renderEvents(events);
  } catch (error) {
    list.innerHTML = "";
    statusText.textContent = "Could not load events. Try again.";
    console.error(error);
  }
}

if (list) {
  loadEvents();
}

const form = document.querySelector("#signup-form");

if (form) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const success = document.querySelector("#success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    success.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    let valid = true;

    if (name === "") {
      nameError.textContent = "Please enter your name.";
      valid = false;
    } else if (name.length < 2) {
      nameError.textContent = "Name must be at least 2 characters.";
      valid = false;
    }

    if (email === "") {
      emailError.textContent = "Please enter your email.";
      valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      emailError.textContent = "Please enter a valid email, like name@example.com.";
      valid = false;
    }

    if (!valid) return;

    success.textContent = "Thanks, " + name + "! You are registered.";
    form.reset();
  });
}