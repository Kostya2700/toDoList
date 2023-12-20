import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./Task.module.css";
import { deleteTask, updateTask } from "../../redux/tasksSlice";
import { MdClose } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export const Task = ({ task, counter }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    setEditedTask(task);
  };

  const handleSave = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  return (
    <>
      <div className={css.wrapper}>
        {isEditing ? (
          <div className={css.modalMain}>
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
            />
            <textarea
              value={editedTask.description}
              onChange={(e) =>
                setEditedTask({ ...editedTask, description: e.target.value })
              }
            ></textarea>
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div className={css.modalMain}>
            <p className={css.text}>{counter}</p>
            <p className={css.text}>{task.title}</p>
            <p className={css.text}>{task.description}</p>
          </div>
        )}
        <button className={css.btnedit} onClick={handleEditToggle}>
          <CiEdit size={24} />
        </button>
        <button className={css.btndelete} onClick={handleDelete}>
          <MdClose size={24} />
        </button>
      </div>
    </>
  );
};
