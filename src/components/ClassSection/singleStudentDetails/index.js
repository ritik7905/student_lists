// styles
import classes from "./style.module.scss"

const SingleStudentDetails = (props) => {
    return (
        <section className={classes.details}>
            <div className={classes.studentName}>
                <strong>Student Name:</strong><span>{props.title}</span>
            </div>
            <div className={classes.studentClass}>
                <strong>Student Class:</strong><span>{props.class}</span>
            </div>
            <div className={classes.studentAddress}>
                <strong>Student Address:</strong><span>{props.address}</span>
            </div>
            <div className={classes.studentRoll_no}>
                <strong>Student Roll-No:</strong><span>{props.roll_no}</span>
            </div>
            <div className={classes.studentDetails}>
                <strong>Student Details:</strong><span>{props.details}</span>
            </div>
        </section>
    )
}
export default SingleStudentDetails