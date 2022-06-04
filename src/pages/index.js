// styles
import StudentData from '../components/ClassSection/studentData/StudentData'
import styles from '../styles/Home.module.scss'

const studentData = [
  {
    id: "1",
    title: "Student 1",
    description: "student Content here.",
    studentImage: "https://cdn.pixabay.com/photo/2022/05/10/11/12/tree-7186835__480.jpg"
  },
  {
    id: "2",
    title: "Student 2",
    description: "student Content here.",
    studentImage: "https://cdn.pixabay.com/photo/2022/05/05/23/12/agriculture-7177221__340.jpg"
  },
  {
    id: "3",
    title: "Student 3",
    description: "student Content here.",
    studentImage: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg"
  },
  {
    id: "4",
    title: "Student 4",
    description: "student Content here.",
    studentImage: "https://cdn.pixabay.com/photo/2016/11/08/04/49/jungle-1807476__340.jpg"
  },
]
const Home = () => {
  return (
    <div className={styles.homePage}>
      <StudentData studentData={studentData} />
    </div>
  )
}

export default Home
