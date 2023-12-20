import { useSelector } from "react-redux";
import { Layout } from "./Layout /Layout";
import { TaskForm } from "./Form/Form";
import { TaskList } from "./TaskList /TaskList";
import { getTasks } from "../redux/selectors";
import { AppBar } from "./AppBar/AppBar";

export const App = () => {
  const tasks = useSelector(getTasks);

  return (
    <Layout>
      <AppBar />
      <TaskForm />

      {tasks.length ? <TaskList /> : <p>Please write you ToDo</p>}
    </Layout>
  );
};
