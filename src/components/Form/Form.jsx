import { useDispatch } from "react-redux";
import css from "./Form.module.css";
import { addTask } from "../../redux/tasksSlice";
import { nanoid } from "nanoid";
import { Button } from "../Button/Button";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const forms = event.currentTarget;
    if (
      (forms.elements.title.value || forms.elements.description.value) === ""
    ) {
      return console.log("123");
    }
    dispatch(
      addTask({
        title: forms.elements.title.value,
        description: forms.elements.description.value,
        id: nanoid(),
      })
    );
    forms.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.labelField}>
        Title
        <input
          className={css.field}
          title="Please enter your title task."
          type="text"
          name="title"
          placeholder="Enter title"
          required
        />
      </label>

      <label className={css.labelField}>
        Description
        <input
          className={css.field}
          type="text"
          name="description"
          placeholder="Enter description"
          title="Please enter Description."
          required
        />
      </label>

      <Button type="submit">Create</Button>
    </form>
  );
};
