import css from "./AppBar.module.css";
import { TbAbc } from "react-icons/tb";
export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>ToDoList</h2>
      </section>
      <section className={css.section}>
        <h2 className={css.title}>Filter</h2>
        <button className={css.btn}>
          <TbAbc size={24} />
        </button>
      </section>
    </header>
  );
};
