// styles
import styles from "./style.module.scss"
const Card = (props) => {
    return (
        <div className={styles.cardParent}>{props.children}</div>
    )
}

export default Card