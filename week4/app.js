// ---------- 1. Dynamic list (index.html) ----------
const events = [
  { id: 1, title: "Coding Night", date: "Oct 20", place: "Lab 3" },
  { id: 2, title: "Web Workshop", date: "Oct 27", place: "Room B12" },
  { id: 3, title: "Career Talk", date: "Nov 3", place: "Main Hall" },
  { id: 4, title: "Hackathon", date: "Nov 10", place: "Lab 1" },
  { id: 5, title: "Game Night", date: "Nov 17", place: "Cafeteria" },
  { id: 6, title: "Demo Day", date: "Nov 24", place: "Auditorium" }
];

const list = document.querySelector("#event-list");

function renderEvents() {
  list.innerHTML = "";
  for (const item of events) {
    const article = document.createElement("article");

    const h2 = document.createElement("h2");
    h2.textContent = item.title;

    const p = document.createElement("p");
    p.textContent = item.date + " · " + item.place;

    article.append(h2, p);
    list.append(article);
  }
}

if (list) {
  renderEvents();
}

// ---------- 2. Form validation (signup.html) ----------
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