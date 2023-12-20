import css from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "../../redux/selectors";
import { Task } from "../Task/Task";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter((task) => !task.completed);
    case statusFilters.completed:
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getVisibleTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <>
      <ul className={css.list}>
        {visibleTasks.tasks.map((task, index) => (
          <li className={css.listItem} key={task.id}>
            <Task task={task} counter={index + 1} />
          </li>
        ))}
      </ul>
    </>
  );
};
