//FIXME: listener - 2

import {
  addTaskBtnHandler,
  deleteAllHandler,
  doneAllList,
  listGroupHandler,
  taskInputHandler,
} from "./handler.js";
import {
  addTaskBtn,
  deleteAll,
  doneAll,
  listGroup,
  taskInput,
} from "./selector.js";

const listener = () => {
  addTaskBtn.addEventListener("click", addTaskBtnHandler);
  listGroup.addEventListener("click", listGroupHandler);
  taskInput.addEventListener("keyup", taskInputHandler);
  listGroup.addEventListener("click", listGroupHandler);
  deleteAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllList);
};

export default listener;
