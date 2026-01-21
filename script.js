const grid = document.getElementById("studentGrid");
const countEl = document.getElementById("count");
const tabs = document.querySelectorAll(".tab");

renderList(serverStudents);

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const status = tab.dataset.status;
    const filtered = status === "ALL"
      ? serverStudents
      : serverStudents.filter(s => s.status === status);
    renderList(filtered);
  });
});

function renderList(list) {
  grid.innerHTML = "";
  countEl.textContent = list.length;

  list.forEach(student => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="name">${student.name}</div>
      <div>${student.className}</div>
      <div class="status ${student.status}">${student.status}</div>
      `;

    grid.appendChild(card);
  });
}
