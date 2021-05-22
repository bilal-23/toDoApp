import classes from './Button.module.css'

const Button = props => {

    const classNames = `${props.className} ${classes.btn}`
    return (
        <button className={classNames} onClick={props.onClick}>{props.children}</button>
    )
}

export default Button;