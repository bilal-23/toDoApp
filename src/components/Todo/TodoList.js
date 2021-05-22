import React, { useContext } from 'react'
import TaskContext from '../../store/task-context'


import ListItem from './ListItem'
import classes from './TodoList.module.css'

const TodoList = () => {
    const taskCtx = useContext(TaskContext);
    const listItems = [...taskCtx.tasks]

    const deleteTaskHandler = (id) => {
        taskCtx.deleteTask(id);
    }
    const completeTaskHandler = (id) => {
        taskCtx.completeTask(id);

    }

    const list = listItems.map((item, index) => <ListItem title={item.title} desc={item.description} id={item.id} key={item.id} onComplete={completeTaskHandler.bind(null, item.id)} onDelete={deleteTaskHandler.bind(null, item.id)} isComplete={item.isCompleted} />)

    return <div className={classes.list}>

        <ul>{listItems.length > 0 ? list : <h2 className={classes.placeholder}>Add a new task</h2>}</ul>
    </div>
}

export default TodoList