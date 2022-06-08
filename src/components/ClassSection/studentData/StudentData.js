import React from 'react'
import StudentList from '../studentLists/StudentList';
// styles
import style from "./style.module.scss"

const StudentData = (props) => {
    console.log(props.studentData);
    return (
        <div className={style.students_data}>
            {
                props.studentData && props.studentData.map((item) => {
                    return (
                        <StudentList key={item.id}
                            id={item.id}
                            studentName={item.name}
                            studentClass={item.class}
                            studentAddress={item.address}
                            studentRoll={item.roll_no}
                        />
                    )
                })
            }
        </div>
    )
}

export default StudentData