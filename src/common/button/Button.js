// styles
import style from "./style.module.scss"
const Button = (props) => {
    return (
        <button className={style.btn} onClick={props.handleClick}>{props.children}</button>
    )
}

export default Button