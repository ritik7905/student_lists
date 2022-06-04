import { MongoClient } from "mongodb";

const studentApi = async (req, res) => {
    if (req.method == 'POST') {
        const data = req.body;
        const client = await MongoClient.connect('mongodb+srv://ritik7905:vydmlGXjmOn4xjwd@mystudent.f21p7.mongodb.net/myStudent?retryWrites=true&w=majority');
        const db = client.db();
        const studentCollection = db.collection('myStudents');
        const result = await studentCollection.insertOne(data);
        console.log("======", result);
        client.close();
        res.status(200).json({
            message: "Student Added Successfully",
        })
    }
}

export default studentApi