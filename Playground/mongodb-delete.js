const {MongoClient,ObjectID}=require ('mongodb')    // object de-structuring..


MongoClient.connect('mongodb://localhost:27017/Todoapp',(error,db)=>{
	
	if (error)
	{
	    return console.log('Unable to connect to  database');
	}

	console.log ('Connection successfully Established');


	//deleteMany

	// db.collection('Todo').deleteMany({text :'eat lunch'}).then((result)=>{
 
 //     console.log(result);

	// },(error)=>{

 //      console.log('Error in deleting Many')
	// });


	//deleteOne

	// db.collection('Todo').deleteOne({completed : false}).then((result)=>{

	// 	console.log(result);
	// });


	//findOneanddelete

	// db.collection('Todo').findOneAndDelete({completed : false}).then((result)=>{

	// 	console.log(result);
	// });

    db.collection('Users').deleteMany({name: 'Nabeel'}).then((result)=>{
    	console.log(result);
    });

    db.collection('Users').deleteOne({_id: new ObjectID('59a6337a5700fc130805d440')}).then((success)=>{
    	console.log(success);
    });
});