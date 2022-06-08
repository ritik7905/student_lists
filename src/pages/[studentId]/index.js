import { MongoClient, ObjectId } from 'mongodb'
import React from 'react'
import SingleStudentDetails from '../../components/ClassSection/singleStudentDetails'
// styles
import style from "./style.module.scss"

const StudentDetails = (props) => {
  return (
    <div className={style.single_student_details}>
      <h1>Selected Student details</h1>
      <div className={style.student_info}>
        <SingleStudentDetails title={props.studentDetails.name}
          class={props.studentDetails.class} address={props.studentDetails.address} roll_no={props.studentDetails.roll_no} details={props.studentDetails.details}
        />
      </div>
    </div>
  )
}

export default StudentDetails


export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://ritik7905:vydmlGXjmOn4xjwd@mystudent.f21p7.mongodb.net/myStudent?retryWrites=true&w=majority');
  const db = client.db();
  const studentCollection = db.collection('myStudents');
  const result = await studentCollection.find().toArray();
  console.log("======", result);
  client.close();
  return {
    fallback: true,
    paths: result.map(student => ({
      params: { studentId: student._id.toString() },

    }))
  }
}



//To get the Data from the Server
export async function getStaticProps(context) {
  const StudentId = context.params.studentId;

  const client = await MongoClient.connect('mongodb+srv://ritik7905:vydmlGXjmOn4xjwd@mystudent.f21p7.mongodb.net/myStudent?retryWrites=true&w=majority');
  const db = client.db();
  const studentCollection = db.collection('myStudents');
  const result = await studentCollection.findOne({ _id: ObjectId(StudentId) });
  console.log("======", result);
  client.close();

  return {
    props: {
      studentDetails: {
        id: result._id.toString(),
        name: result.name,
        class: result.class,
        address: result.address,
        roll_no: result.roll_no,
        details: result.details

      }
    }
  }

}