// styles
import { MongoClient } from 'mongodb'
import StudentData from '../components/ClassSection/studentData/StudentData'
import styles from '../styles/Home.module.scss'

const studentData = [
  {
    id: "1",
    title: "Student 1",
    studentClass: "2nd",
    studentAddress: "G-45/18, laxmi Park",
    studentRoll: "40",
    description: "student Content here.",
  },
  {
    id: "2",
    title: "Student 2",
    studentClass: "2nd",
    studentAddress: "G-45/18, laxmi Park",
    studentRoll: "40",
    description: "student Content here.",
  },
  {
    id: "3",
    title: "Student 3",
    studentClass: "2nd",
    studentAddress: "G-45/18, laxmi Park",
    studentRoll: "40",
    description: "student Content here.",
  },
  {
    id: "4",
    title: "Student 4",
    studentClass: "2nd",
    studentAddress: "G-45/18, laxmi Park",
    studentRoll: "40",
    description: "student Content here.",
  },
]
const Home = (props) => {
  return (
    <div className={styles.homePage}>
      {/* <StudentData studentData={studentData} /> */}
      <StudentData studentData={props.classStudents} />
    </div>
  )
}

export default Home


export const getStaticProps = async () => {
  const client = await MongoClient.connect('mongodb+srv://ritik7905:vydmlGXjmOn4xjwd@mystudent.f21p7.mongodb.net/myStudent?retryWrites=true&w=majority');
  const db = client.db();
  const studentCollection = db.collection('myStudents');
  const result = await studentCollection.find().toArray();
  console.log("======", result);
  client.close();

  return {
    props: {
      classStudents: result.map(student => ({
        name: student.name,
        address: student.address,
        class: student.class,
        roll_no: student.roll_no,
        id: student._id.toString()
      }))
    }
  }

}