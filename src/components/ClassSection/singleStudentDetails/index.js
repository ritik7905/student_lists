
const SingleStudentDetails = (props) => {
    return (
        <section className={classes.details}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    )
}
export default SingleStudentDetails