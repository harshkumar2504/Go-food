const mongoose = require('mongoose');
const mongoURI = 'mongodb://hk842003:Harsh2504@ac-xjqurql-shard-00-00.vlnr2ki.mongodb.net:27017,ac-xjqurql-shard-00-01.vlnr2ki.mongodb.net:27017,ac-xjqurql-shard-00-02.vlnr2ki.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-3g9n8q-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB =async() =>{
  mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetched_data =  mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(function(err, data){
                if(err) console.log(err);
                else console.log();
            })
        }
    });
}

module.exports = mongoDB;

