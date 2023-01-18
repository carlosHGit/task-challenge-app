import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { TaskContext } from "./TasksContext";

const TasksProvider = ({ children }) => {

const [tasks, setTasks] = useLocalStorage('tasks', []);
const [filter, setFilter] = useState([]);
const [active, setActive] = useState(null);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, filter, setFilter, active, setActive}}>
      { children }
    </TaskContext.Provider>
  )
}

export default TasksProvider