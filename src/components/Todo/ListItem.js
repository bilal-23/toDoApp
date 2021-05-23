import { useState, useEffect } from 'react'
import Button from '../UI/Button'
import classes from './ListItem.module.css'

const ListItem = props => {
    const [isTaskCompleted,setIsTaskCompleted] = useState(props.isComplete);
    
    useEffect(()=>{
        setIsTaskCompleted(props.isComplete)
    },[props.isComplete])

    return (
        <li className={`${classes.item} ${isTaskCompleted && classes.completed}`}>
            <h2 className={`${classes['item-title']} ${isTaskCompleted && classes.completed}`}>{props.title}</h2>
            <Button className={`${classes['item-completed']} ${isTaskCompleted && classes.completed}`} onClick={props.onComplete}>✓
           
            </Button>

            <p className={classes['item-desc']}>{props.desc}</p>
            <Button className={classes['item-delete']} onClick={props.onDelete}>X</Button>
        </li>
    )
}
export default ListItem