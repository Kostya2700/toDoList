import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";

const getVisibleTasks = (tasks) => tasks;

export const TaskList = () => {
  const { tasks } = useSelector(getVisibleTasks);
  const saveArrayToLocalStorage = (array) => {
    localStorage.setItem("myArray", JSON.stringify(tasks));
    window.localStorage.setItem("myArray", JSON.stringify(tasks));
  };

  return (
    <>
      <ul className={css.list}>
        {tasks.map((task, index) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} counter={index + 1} />
          </li>
        ))}
      </ul>
    </>
  );
};
