const taskInput = document.querySelector(".task-input");
const taskContainer = document.querySelector(".task-container");
const addBtn = document.querySelector(".add-btn");
const count = document.querySelector(".count");

addBtn.addEventListener(
  "click",

  function () {
    const value = taskInput.value.trim();
    if (value === "") {
      alert("Add a task to proceed...");
    } else {
      const li = document.createElement("li");
      li.classList.add("list");
      li.innerHTML = `
    <input type="checkbox" class="task-check"/>
    ${value}
    <i class="fa-solid fa-trash"></i>
    
    `;
      taskContainer.appendChild(li);
      tasksNum();
      taskInput.value = "";
      taskInput.focus();
      const delBtn = document.querySelectorAll(".fa-trash");
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", (e) => {
          e.target.parentElement.remove();
          tasksNum();
        });
      }
      const checkBox = document.querySelectorAll(".task-check");
      for (let i = 0; i < checkBox.length; i++) {
        checkBox[i].addEventListener("click", function (e) {
          if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
            const label = e.target.parentElement;
            if (e.target.checked) {
              label.classList.add("done");
            } else {
              label.classList.remove("done");
            }
          }
        });
      }
    }
  }
);

function tasksNum() {
  count.textContent = taskContainer.children.length;
}
