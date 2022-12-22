// CRUD create read update delete

// import mongodb from 'mongodb';
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
import { MongoClient, ObjectId} from "mongodb";

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log('Error Connecting')
    }

    const db = client.db(databaseName);
    
    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // }).finally(() => {
    //     client.close();
    // })

    db.collection('tasks').deleteOne({
        description : "Complete GCCP campaign"
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        client.close();
    })
});