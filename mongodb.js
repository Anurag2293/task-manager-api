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
    
    // const updatePromise = db.collection('users').updateOne({
    //     _id : new ObjectId("63a2e0b832171738ff68c4e8")
    // }, {
    //     $inc : {
    //         age : 1
    //     }
    //     // $set : {
    //     //     name : 'Aman'
    //     // }
    // });

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // }).finally(() => {
    //     client.close();
    // })

    db.collection('tasks').updateMany({
        completed : false
    }, {
        $set : {
            completed : true
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    }).finally(() => client.close());
});