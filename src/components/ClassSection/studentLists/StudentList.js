import React from 'react'
import Button from '../../../common/button/Button'
import Card from '../../../common/Card/Card'
import { useRouter } from 'next/router'
// styles
import style from "./style.module.scss"

const StudentList = (props) => {
    console.log(props.id);
    const router = useRouter()
    const studentInfo = (e) => {
        e.preventDefault()
        // alert("Hello")
        router.push("/" + props.id)
    }
    return (
        <div className={style.student_info}>
            <Card>
                {/* <div className={style.studentImg}>
                    <img src={props.studentImg} alt="Loading..." />
                </div> */}
                <div className={style.studetntDetails}>
                    <div><span>Name:</span> {props.studentName}</div>
                    <div><span>Class:</span> {props.studentClass}</div>
                    <div><span>Address:</span> {props.studentAddress}</div>
                    <div><span>Roll-No: </span> {props.studentRoll}</div>
                    <div className={style.student_details_btn}>
                        <Button handleClick={studentInfo}>Show Details</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default StudentList