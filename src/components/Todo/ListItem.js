import Button from '../UI/Button'
import classes from './ListItem.module.css'

const ListItem = props => {

    return (
        <li className={`${classes.item} ${props.isComplete ? classes.completed : ''}`}>
            <h2 className={`${classes['item-title']}`}>{props.title}</h2>
            <Button className={classes['item-completed']} onClick={props.onComplete}>✓
           
            </Button>

            <p className={classes['item-desc']}>{props.desc}</p>
            <Button className={classes['item-delete']} onClick={props.onDelete}>X</Button>
        </li>
    )
}
export default ListItem