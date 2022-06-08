// styles
import Button from "../../../common/button/Button"
import style from "./style.module.scss"
import { useRef } from "react"
import { useRouter } from 'next/router'
const StudentForm = (props) => {
  const router = useRouter()
  const nameInput = useRef()
  const classInput = useRef()
  const rollnoInput = useRef()
  const addressInput = useRef()
  const detailsInput = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const studentName = nameInput.current.value;//Take ref
    const studentClass = classInput.current.value;//Take ref
    const studentAddress = addressInput.current.value;//Take ref
    const studentroll = rollnoInput.current.value;//Take ref
    const studentDetails = detailsInput.current.value;//Take ref
    // passs student data
    const studentGivenData = {
      name: studentName,
      class: studentClass,
      address: studentAddress,
      roll_no: studentroll,
      details: studentDetails
    }
    console.log("Student Data", studentGivenData);
    router.push('/')
    props.createStudents(studentGivenData)//Send Data to form Create stuudents
  }
  return (
    <div className={style.student_form}>
      <form onSubmit={handleSubmit}>
        <div className={style.form_content}>
          <div className={style.student_name}>
            <label htmlFor="Name">Student Name:</label>
            <input type="text" placeholder='Enter your name..' ref={nameInput} />
          </div>
          <div className={style.student_class}>
            <label htmlFor="class">Student Class:</label>
            <input type="number" placeholder='Enter your class..' ref={classInput} />
          </div>
          <div className={style.student_roll_no}>
            <label htmlFor="roll-no">Student Roll-no:</label>
            <input type="number" placeholder='Enter your roll-no..' ref={rollnoInput} />
          </div>
          <div className={style.student_details}>
            <label htmlFor="address">Student Details:</label>
            <textarea name="msg" cols="30" rows="5" placeholder='Type your details...' ref={detailsInput}></textarea>
          </div>
          <div className={style.student_address}>
            <label htmlFor="address">Student Address:</label>
            <textarea name="msg" cols="30" rows="5" placeholder='Type your address...' ref={addressInput}></textarea>
          </div>
          <div className={style.create_btn}>
            <Button>Create Student</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default StudentForm