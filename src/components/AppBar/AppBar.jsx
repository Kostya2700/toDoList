import css from "./AppBar.module.css";
export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>ToDoList</h2>
      </section>
    </header>
  );
};
