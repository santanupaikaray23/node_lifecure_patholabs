const express =  require('express');
const app = express();
const port =  process.env.PORT || 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser')
const cors = require('cors');
const res = require('express/lib/response');
// const res = require('express/lib/response');
app.use(cors())
const mongourl="mongodb://localhost:27017";
let db;
let col_name="dashboard"
let col_name1="dashboard1"
let col_name2="dashboard2"
let col_name3="dashboard3"
let col_name4="dashboard4"
let col_name5="dashboard5"
let col_name6="dashboard6"
let col_name7="dashboard7"
let col_name8="dashboard8"
let col_name9="dashboard9"
let col_name10="dashboard10"
let col_name11="dashboard11"

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/health',(req,res)=>{
   res.status(200).send('Health Check')
})


//Read
app.get('/Service',(req,res)=>{
    db.collection(col_name).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Insert
app.post('/addService',(req,res)=>{
    console.log(req.body)
    db.collection(col_name).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})

// app.get('/types',(req,res) =>{
//     db.collection(col_name1).find().toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })

// })
//Insert
app.post('/addtypes',(req,res)=>{
    console.log(req.body)
    db.collection(col_name1).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})
app.get('/types/:id',(req,res) => {
    var id = mongo.ObjectId(req.params.id)
    db.collection(col_name1).find({_id:id}).toArray((err,result)=>{
        if (err) throw err;
        res.send(result)


    })

})
// Read
app.get('/types',(req,res)=>{
    var query={}
    if(req.query.service){
        query={service:req.query.service,isActive:true}
    }else{
        query={isActive:true}

    }
    
    db.collection(col_name1).find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get('/booking',(req,res)=>{
    db.collection(col_name2).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/addbooking',(req,res)=>{
    console.log(req.body)
    db.collection(col_name2).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})

//Read
app.get('/servicedetails',(req,res)=>{
    db.collection(col_name3).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Insert
app.post('/addservicedetails',(req,res)=>{
    console.log(req.body)
    db.collection(col_name3).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')
    })

})

app.get('/servicedetails/:service',(req,res)=>{
    
    var service =(req.params.service)
    db.collection(col_name3).find({service:service}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})
app.get('/servicedetails/:id',(req,res)=>{
    var id = (req.params.id)
    db.collection(col_name3).find({_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Read
app.get('/placeBooking',(req,res)=>{
    db.collection(col_name4).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
    })
    //Insert
    app.post('/addplaceBooking',(req,res)=>{
        console.log(req.body)
        db.collection(col_name4).insert(req.body,(err,result) => {
            if(err) throw err;
            res.send('Data Added')
        })
    })

    //Read
// app.get('/patientType',(req,res)=>{
//     db.collection(col_name5).find().toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
// })

// //Insert
// app.post('/addpatientType',(req,res)=>{
//     console.log(req.body)
//     db.collection(col_name5).insert(req.body,(err,result)=>{
//         if(err) throw err;
//         res.send('Data Added')

//     })
// })
   //Read
//    app.get('/whatsappmessage',(req,res)=>{
//     db.collection(col_name6).find().toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
// })

// //Insert
// app.post('/addwhatsappmessage',(req,res)=>{
//     console.log(req.body)
//     db.collection(col_name6).insert(req.body,(err,result)=>{
//         if(err) throw err;
//         res.send('Data Added')

//     })
// })
app.get('/placeBooking/:id',(req,res) => {
    var id=mongo.ObjectId(req.params.id)
    db.collection(col_name4).find({_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })

})

// app.get('/paymentBooking',(req,res)=>{
//     db.collection(col_name5).find().toArray((err,result)=>{
//         if(err) throw err;
//         res.send(result)
//     })
    
//     })
//       //Insert
//       app.post('/addpaymentBooking',(req,res)=>{
//         console.log(req.body)
//         db.collection(col_name5).insert(req.body,(err,result) => {
//             if(err) throw err;
//             res.send('Data Added')
//         })
//     })
//Read
app.get('/Designation',(req,res)=>{
    db.collection(col_name7).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//Insert
app.post('/addDesignation',(req,res)=>{
    console.log(req.body)
    db.collection(col_name7).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})
//Read
app.get('/Gender',(req,res)=>{
    var query = {}
    if(req.query.service){
        query={service:req.query.service,isActive:true}
    }else{
        query = {isActive:true}

    }
    
    db.collection(col_name8).find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//GenderDetails
app.get('/Gender/:id',(req,res)=>{
    var id = mongo.ObjectId(req.params.id)
    
    db.collection(col_name8).find({_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/addGender',(req,res)=>{
    console.log(req.body)
    db.collection(col_name8).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})
//update
// app.put('/updateGender',(req,res)=>{
//     db.collection(col_name8).updateOne(
//         {_id:mongo.ObjectId(res.body._id)},
//         {
//             $set:{
                
                    
//                     service_name:req.body.service_name,
//                     service:req.body.service,
//                     isActive:true
                
//             }
//         },(err,result)=>{
//             if(err) throw err;
//             res.send('Data Updated')
//         }
//     )
// })
app.get('/Testname',(req,res)=>{
    db.collection(col_name9).find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/addTestname',(req,res)=>{
    console.log(req.body)
    db.collection(col_name9).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})
app.get('/Price',(req,res)=>{
    var query = {}
    if(req.query.service){
        query={service:req.query.service,isActive:true}
    }else{
        query = {isActive:true}

    }
    
    db.collection(col_name10).find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
//GenderDetails
app.get('/Price/:id',(req,res)=>{
    var id = mongo.ObjectId(req.params.id)
    
    db.collection(col_name10).find({_id:id}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.post('/addPrice',(req,res)=>{
    console.log(req.body)
    db.collection(col_name10).insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send('Data Added')

    })
})


//Db Connection
MongoClient.connect(mongourl,(err,client)=>{
    if(err) console.log('Error while connecting');
    db= client.db('march');
    app.listen(port,(err)=>{
        console.log(`Server is running on port ${port}`)
    })
})