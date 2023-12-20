import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask } from "../../redux/tasksSlice";
import { MdClose } from "react-icons/md";

export const Task = ({ task, counter, toggleModal }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.modalMain}>
          <p className={css.text}>{counter}</p>
          <p className={css.text}>{task.title}</p>
          <p className={css.text}>{task.description}</p>
        </div>
        <input
          type="checkbox"
          className={css.checkbox}
          checked={task.completed}
        />

        <button className={css.btn} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </>
  );
};
