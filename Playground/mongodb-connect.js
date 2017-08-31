//const  MongoClient=require ('mongodb').MongoClient;
const {MongoClient,ObjectID}=require ('mongodb')    // object de-structuring..

//     /* Object de-structuring */
// var user={name : 'nabeel',age :12};
// var {name}=user;

// console.log(name);


MongoClient.connect('mongodb://localhost:27017/Todoapp',(error,db)=>{
	
	if (error)
	{
	    return console.log('Unable to connect to  database');
	}

	console.log ('Connection successfully Established');


	// db.collection('Todo').insertOne({

	// 	text : 'Something to do',
	// 	completed : false

	// },(error,result)=>{
   
 //       if (error)
 //       {
 //       	  return console.log('Collection insertion failed');
 //       }

 //       console.log('Table insertion established');

	// });

	// db.collection('Users').insertOne({

	// name : 'Nabeel',
	// age  : '22',
	// location : 'lahore'

	// },(error,result)=>{
    
 //        if (error)
 //        {
 //        	return console.log('collection insertion failed');
 //        }

 //        console.log('Collection insertion established');
 //        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
	// });




	db.close();
});