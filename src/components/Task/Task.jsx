import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask } from "../../redux/tasksSlice";
import { MdClose } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export const Task = ({ task, counter, toggleModal }) => {
  const dispatch = useDispatch();
  console.log("d", dispatch);
  const handleDelete = () => dispatch(deleteTask(task.id));

  return (
    <>
      <div className={css.wrapper}>
        <div className={css.modalMain}>
          <p className={css.text}>{counter}</p>
          <p className={css.text}>{task.title}</p>
          <p className={css.text}>{task.description}</p>
        </div>
        <button className={css.btnedit}>
          <CiEdit size={24} />
        </button>
        <button className={css.btndelete} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </>
  );
};
