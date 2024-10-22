document.querySelector("#pushTask").onclick = function () {
  if (document.querySelector("#newTask input").value.trim().length == 0) {
    alert("Please enter a TASK!");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class="task">
        <span id="taskName" >
            ${document.querySelector("#newTask input").value}
        </span>
        <button class="delete"><i class="ri-delete-bin-6-line"></i></button>
        </div>`;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
  }
  document.querySelector("#newTask input").value = "";
};
