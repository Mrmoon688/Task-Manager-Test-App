import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selector.js";

const observer = () => {
  //   console.log("I'm observer");
  const job = () => {
    // console.log("U change in");
    updateDoneTaskTotal();
    updateTaskTotal();
  };
  const observerOption = {
    childList: true,
    subtree: true,
    attributes:true,
  };
  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOption);
};
export default observer;
