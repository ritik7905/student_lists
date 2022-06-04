// import { MongoClient, ObjectId } from 'mongodb'
import React from 'react'
import SingleStudentDetails from '../../components/ClassSection/singleStudentDetails'

const StudentDetails = (props) => {
  return (
    <div>
      {/* <SingleStudentDetails /> */}
      gdgdfg
    </div>
  )
}

export default StudentDetails


export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          studentId: '1'
        }
      },
      {
        params: {
          studentId: '2'
        }
      }
    ]
  }
}



export async function getStaticProps(context) {
  const StudentId = context.params.blogId;
  return {
    props: {
      studentDetails: {
        id: '1',
        title: 'Student One',
        description: 'Student Description'
      }
    }
  }

}