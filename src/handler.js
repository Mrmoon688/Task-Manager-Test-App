import {
  addList,
  deleteList,
  doneList,
  editList,
  updateDoneTaskTotal,
  updateTaskTotal,
} from "./list.js";
import { listGroup } from "./selector.js";

//FIXME: Handler - 3
export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");

  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter") {
    addList(taskInput.value);
  }
};
export const addTaskBtnHandler = () => {
  // console.log(taskInput.value.trim() ? true : false);
  if (taskInput.value.trim()) {
    addList(taskInput.value);
  } else {
    alert("You must input content text");
  }
};

export const listGroupEnterHandler = (event) => {
  if (event.key === "Enter") {
    editList();
  }
};

export const deleteAllHandler = () => {
  if (confirm("Are U Sure to delete all list ?")) {
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => {
      list.remove();
      updateDoneTaskTotal();
      updateTaskTotal();
    });
  }
};

export const doneAllList = () => {
  if (confirm("Are U Sure to done all list ?")) {
    const allList = listGroup.querySelectorAll(".list");
    // console.log(allList);
    allList.forEach((list) => {
      list.querySelector(".list-done-check").checked = true;
      doneList(list.id);
    });
  }
};
