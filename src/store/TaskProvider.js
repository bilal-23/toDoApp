import { useReducer } from 'react'
import TaskContext from './task-context'

const defaultTaskState = []

const taskReducer = (state, action) => {
    if (action.type === 'ADD') {
        const newTaskList = [action.task, ...state];
        return newTaskList;
    }
    if (action.type === 'DELETE') {
        const newTaskList = [...state]
        const taskIndex = newTaskList.findIndex(task => task.id === action.id)
        newTaskList.splice(taskIndex, 1);
        return newTaskList
    }
    if (action.type === 'MARK_COMPLETE') {
        const newTaskList = [...state]
        const taskIndex = newTaskList.findIndex(task => task.id === action.id)
        const task = newTaskList[taskIndex];
        const updatedTask = { ...task, isCompleted: !task.isCompleted }
        newTaskList[taskIndex] = updatedTask;
        return newTaskList
    }

    return defaultTaskState;
}
const TaskProvider = props => {
    const [taskState, dispatchtaskState] = useReducer(taskReducer, defaultTaskState)

    const addTaskHandler = (task) => {
        dispatchtaskState({ type: 'ADD', task: task })
    }
    const deleteTaskHandler = (id) => {
        dispatchtaskState({ type: 'DELETE', id: id })
    }
    const completeTaskHandler = (id) => {
        dispatchtaskState({ type: 'MARK_COMPLETE', id: id })
    }

    const taskContext = {
        tasks: taskState,
        addTask: addTaskHandler,
        deleteTask: deleteTaskHandler,
        completeTask: completeTaskHandler
    }

    return (
        <TaskContext.Provider value={taskContext}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskProvider
