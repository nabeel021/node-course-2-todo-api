const {MongoClient,ObjectID}=require ('mongodb')    // object de-structuring..


MongoClient.connect('mongodb://localhost:27017/Todoapp',(error,db)=>{
	
	if (error)
	{
	    return console.log('Unable to connect to  database');
	}

	console.log ('Connection successfully Established');

	// db.collection('Todo').find({_id :new ObjectID('59a74f07a277f990027d5084')}).toArray().then((docs)=>{

	//    console.log('Todos');
	//    console.log(JSON.stringify(docs,undefined,2));

	// },(error) =>
	// {
	//    console.log('Error in finding the data');
	// });


	// db.collection('Todo').find().count().then((count)=>{
 
 //        console.log(`Total ${count}`);

	// },(error)=>{
    
 //        console.log('Error in counting the collections');

	// });


	db.collection('Users').find({name: 'Nabeel'}).toArray().then((docs)=>{
 
        console.log(JSON.stringify(docs,undefined,2));

	},(error)=>{
    
        console.log('Error in finding the collections with nabeel');

	});

  
});