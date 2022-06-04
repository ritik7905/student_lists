import React from 'react'
import StudentForm from '../../components/ClassSection/studentForm/StudentForm'
import { useRouter } from 'next/router'
//styles
import style from "./style.module.scss"

const CreateStudent = () => {
    const router = useRouter()
    const newStudentEntry = async (enteredStudent) => {
        // console.log(enteredStudent);
        const response = await fetch('../api/newStudentAdd', {
            method: 'POST',
            body: JSON.stringify(enteredStudent),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await response.json();
        console.log(data);
        console.log("Data", enteredStudent);
        // router.push('/')
    }
    return (
        <div className={style.createStudent}>
            <StudentForm createStudents={newStudentEntry} />
        </div>
    )
}

export default CreateStudent