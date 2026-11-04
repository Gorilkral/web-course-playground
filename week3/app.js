let tasks = [
    { id: 1, title: "Read MDN", done: false },
    { id: 2, title: "Do the Lab", done: true },
    { id: 3, title: "Submit the Lab", done: false },
];

const list = document.querySelector("#task-list");

function render() {
    list.innerHTML = "";
    for (const task of tasks) {
        const li = document.createElement("li");
        li.textContent = task.title;
        li.dataset.id = task.id;
        if (task.done) li.classList.add("done");
        list.append(li);
    }
}
render();