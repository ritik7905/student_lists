// styles
import classes from "./style.module.scss"

const SingleStudentDetails = (props) => {
    return (
        <section className={classes.details}>
            <h1>{props.title}</h1>
            <p>{props.class}</p>
        </section>
    )
}
export default SingleStudentDetails