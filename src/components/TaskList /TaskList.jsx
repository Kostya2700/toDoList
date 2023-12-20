import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [sortedTasks, setSortedTasks] = useState([...tasks]);
  const [isSorted, setIsSorted] = useState(true);

  useEffect(() => {
    const sortTasks = () => {
      let sorted;
      if (!isSorted) {
        sorted = [...tasks].sort((a, b) => a.title.localeCompare(b.title));
      } else {
        sorted = [...tasks];
      }
      setSortedTasks(sorted);
    };

    sortTasks();
  }, [tasks, isSorted]);

  const sortByAlphabet = () => {
    setIsSorted(!isSorted);
  };

  return (
    <>
      <button className={css.sortButton} onClick={sortByAlphabet}>
        {isSorted ? "Sort Default" : "Sort Alphabetically"}
      </button>
      <ul className={css.list}>
        {sortedTasks.map((task, index) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} counter={index + 1} />
          </li>
        ))}
      </ul>
    </>
  );
};
