// CRUD create read update delete

import mongodb from 'mongodb';
const MongoClient = mongodb.MongoClient;
// import { MongoClient } from "mongodb";

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser : true }, (error, client) => {
    if (error) {
        return console.log('Error Connecting')
    }

    // console.log('Connected Successfully');
    const db = client.db(databaseName);
    
    db.collection('users').insertOne({
        name : 'Anurag',
        age : 27
    }, async (error, result) => {
        if (error) {
            return console.log('Unable to insert user');
        }
        console.log('Inserted Documents : ');

        const insertedDocs = await db.collection('users').find({"_id": result.insertedId}).toArray();
        console.log(insertedDocs);
    })
})