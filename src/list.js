import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
export const tasks = ["Programming Book", " Cooking Book", " eating Book"];
//TODO: update list total
export const updateTaskTotal = () => {
  //!count list and update
  const list = document.querySelectorAll(".list");
  taskTotal.innerText = list.length;
};

// TODO: Update done list
export const updateDoneTaskTotal = () => {
  //!count list and update
  const list = document.querySelectorAll(".list input:checked");
  doneTaskTotal.innerText = list.length;
};

//TODO: create new list
export const createNewList = (currentTask) => {
  const list = listTemplate.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".list-task").innerText = currentTask;

  return list;
};

export const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.classList.add("animate__animated", "animate__hinge");
      currentList.addEventListener("animationend", () => {
        currentList.remove();
        updateDoneTaskTotal();
        updateTaskTotal();
      });
    }
    // if (window.confirm("Are you sure to delete?")) {
    //   currentList.classList.add("animate__animated","animate__hinge");
    //   currentList.addEventListener("animationend", () => {
    //     currentList.remove();
    //     updateDoneTaskTotal();
    //     updateTaskTotal();
    //   });
    // }
  });
};
// TODO: process
export const addList = (text) => {
  //!mount list to list Group
  listGroup.append(createNewList(text));
  taskInput.value = null;
  updateTaskTotal();
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);

  const newTaskInput = document.createElement("input");
  const currentTask = listTask.innerText;
  newTaskInput.className =
    "border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none";
  listTask.after(newTaskInput);
  newTaskInput.value = currentTask;
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
    updateDoneTaskTotal();
    updateTaskTotal();
  });
  newTaskInput.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      listEditBtn.removeAttribute("disabled");
      listDoneCheck.removeAttribute("disabled");

      listTask.innerText = newTaskInput.value;
      listTask.classList.remove("hidden");
      newTaskInput.remove();
      updateDoneTaskTotal();
      updateTaskTotal();
    }
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);

  const listEditBtn = currentList.querySelector(".list-edit-btn");
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  updateDoneTaskTotal();
  listTask.classList.toggle("line-through");
  currentList.classList.toggle("opacity-20");

  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
};
