// CRUD create read update delete

// import mongodb from 'mongodb';
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;
import { MongoClient, ObjectId} from "mongodb";

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();
console.log(id.id.length)
console.log(id.toHexString().length);
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log('Error Connecting')
    }

    // console.log('Connected Successfully');
    const db = client.db(databaseName);
    
    // db.collection('users').insertOne({
    //     _id: id,
    //     name : 'Anurag',
    //     age : 27
    // }, async (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log('Inserted Documents : ');

    //     const insertedDocs = await db.collection('users').find({"_id": result.insertedId}).toArray();
    //     console.log(insertedDocs);

    //     client.close();
    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Jen',
    //         age : 27
    //     },
    //     {
    //         name : 'Gunther',
    //         age : 28
    //     }
    // ], async (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log('Inserted Docs successfully.');

    //     client.close()
    // });


    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Chant Hare Krishna Mahamantra',
    //         completed: false
    //     },
    //     {
    //         description : 'Complete GCCP campaign',
    //         completed: false
    //     },
    //     {
    //         description : 'Restart Node Project',
    //         completed : true
    //     }
    // ], async (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result)

    //     client.close()
    // })
});