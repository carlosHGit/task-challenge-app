import { useContext } from 'react'
import { getAlertTemplate, getStats } from '../helpers';
import { TaskContext } from '../context/TasksContext';

const useTasks = () => {

  const { tasks, setTasks, filter, setFilter, active, setActive } = useContext( TaskContext );
  const { all, completed, missing } = getStats( tasks || []);

  const filterTasks = ( by, filter ) => {

    if( by === 'reset' ){ 
      return setFilter(tasks);
    }

    setActive(by);

    if(by === 0) return setFilter( tasks.filter(ele => ele.description.includes(filter)));
    if(by === 1) return setFilter( tasks.filter(ele => ele.labels.find(ele => ele.value.includes(filter))));
    if(by === 2) return setFilter( tasks.filter(ele => ele.state === filter));
  }

  const deleteTask = ( id ) => {
    const newTasks = tasks.filter((task) =>  task.id !== id);
    setTasks(newTasks);
  }

  const deleteAllTasks = () => setTasks([]);
    
  const checkTask = ( id ) => {

    const newTasksCheck = tasks.map(( task ) => {
      if ( task.id === id ){
          task.state = !task.state;
      }

      return task;
    });

    return setTasks( newTasksCheck );

  }

  const updateTask = ( id, state , description, onClose ) => {

    const showInfo = description.trim();

    if ( !showInfo ) {

      return toast( getAlertTemplate( 'You have to write a task first', 'warning' ));
    }

    const newTasksUpdate = tasks.map(( task ) => {
      
      if ( task.id === id ){
        task.description = description;
        task.state = state;
      }
      return task;
    });

    setTasks(newTasksUpdate);

    onClose();
  }

  const addTask = ( task ) => {
    setTasks([...tasks, task]);
  }

  return (
    { 
      tasks, 
      setTasks,
      deleteTask,
      deleteAllTasks,
      checkTask,
      updateTask,
      addTask,
      all, 
      completed, 
      missing,
      filterTasks,
      filter, 
      setFilter,
      active,
      setActive 
    }
  )
}

export default useTasks;
