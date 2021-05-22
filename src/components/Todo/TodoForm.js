import { useRef } from 'react'
import Button from '../UI/Button'
import classes from './TodoForm.module.css'

const TodoForm = props => {
    const titleRef = useRef()
    const descRef = useRef()

    const formSubmitHandler = (e) => {
        e.preventDefault()
        props.onSubmitForm(titleRef.current.value, descRef.current.value);
        titleRef.current.value = ''; descRef.current.value = '';
        descRef.current.blur()
    }

    return <form className={classes.form} onSubmit={formSubmitHandler}>
        <div className={classes['form-group']}>
            <label>Title</label>
            <input type='text' ref={titleRef} />
        </div>
        <div className={classes['form-group']}>
            <label>Description</label>
            <input type='text' ref={descRef} />
        </div>
        <Button className={classes['form-btn']}>Add Task</Button>
    </form >
}

export default TodoForm