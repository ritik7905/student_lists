import React from 'react'
import StudentList from '../studentLists/StudentList';
// styles
import style from "./style.module.scss"

const StudentData = (props) => {
    // console.log(props.studentData);
    return (
        <div className={style.students_data}>
            {
                props.studentData.map((item) => {
                    return (
                        <StudentList key={item.id}
                            id={item.id}
                            studentImg={item.studentImage}
                            studentName={item.title}
                            studentDetails={item.description}
                        />
                    )
                })
            }
        </div>
    )
}

export default StudentData