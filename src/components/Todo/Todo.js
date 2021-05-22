import { useContext } from 'react'
import Card from '../UI/Card'
import classes from './Todo.module.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TaskContext from '../../store/task-context'

const Todo = () => {
    const taskCtx = useContext(TaskContext)
    const formSubmitHandler = (title, desc) => {
        const task = { title: title, description: desc, isCompleted: false, id: Math.random().toFixed(8) }
        taskCtx.addTask(task)
    }
    return (

        <Card className={classes.todo}>
            <TodoForm onSubmitForm={formSubmitHandler} />
            <p className={classes['list-count']}>Total tasks: {taskCtx.tasks.length}</p>
            <TodoList />
        </Card>

    )
}

export default Todo;