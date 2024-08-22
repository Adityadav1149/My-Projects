const input = document.querySelector("#userInp");
const date = document.querySelector("#userdate");
const Btn = document.querySelector("#userBtn");
const result = document.querySelector("#addTodo");
const delBtn = document.querySelector("#deleteBtn");

Btn.addEventListener("click", (e) => {
  e.defaultPrevented;
  const text = input.value;
  const userDate = date.value;
  if (input.value !== "" && date.value !== "") {
    addtext(text, userDate);
  } else {
    alert(`first enter your todo or date here...`);
  }
});

function addtext(text, userDate) {
  result.innerHTML += `
   <li>${text} <span>${userDate}</span>  <button class="deleteBtn">Delete</button> </li>
  `;

  input.value = "";
  date.value = "";
}

result.addEventListener("click", (e) => {
  // console.log(e);
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
    // console.log("Item deleted");
  }
});
