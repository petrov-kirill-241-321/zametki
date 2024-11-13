const list = document.querySelector(".main__list");
const inputText = document.querySelector(".main__input");
const button = document.querySelector(".main__button");

let notes = [];

button.addEventListener("click", function () {
  notes.push({ title: inputText.value, completed: false });
  just_do_it();
});

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("success")) {
    const index = Number(event.target.dataset.index);
    notes[index]["completed"] = true;
    for (let i = 0; i < notes.length; i++) {
      const elem = `
                    <span class ="${
                      notes[index]["completed"] ? "text-decoration" : ""
                    }">${notes[index].title}</span>
                    <div class="buttons">
                      <button class="btn success btn-small ${
                        notes[index]["completed"] ? "btn-success" : "warning"
                      }" data-index ="${index}">✓</button>
                      <button class="btn btn-small btn-danger" data-index ="${index}">x</button>
                    </div>
                  `;
      const li = document.querySelectorAll(".main__item");
      li[index].innerHTML = elem;
    }
  } else if (event.target.classList.contains("btn-danger")) {
    const index = Number(event.target.dataset.index);
    notes.splice(index, 1);

    just_do_it();
  }
});

function just_do_it() {
  list.innerHTML = "";

  for (let i = 0; i < notes.length; i++) {
    if (inputText.value) {
      const elem = `<li class="main__item">
                  <span class ="${
                    notes[i]["completed"] ? "text-decoration" : ""
                  }">${notes[i].title}</span>
                  <div class="buttons">
                    <button class="btn success btn-small ${
                      notes[i]["completed"] ? "btn-success" : "warning"
                    }" data-index ="${i}">✓</button>
                    <button class="btn btn-small btn-danger" data-index ="${i}">x</button>
                  </div>
                </li>`;
      console.log(notes[i]["completed"]);
      list.insertAdjacentHTML("beforeend", elem);
    }
  }
}
