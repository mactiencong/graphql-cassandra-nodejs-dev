var cassandra = require("cassandra-driver");
//var client = new cassandra.Client({contactPoints:[]})
var db = {
  getPersonDetail: (id)=>{
        console.log("DB: get Person with ID="+id);
        return new Promise((resolve, reject)=>{
            resolve({
                id: 1,
                name: "matico",
                age: 29
            })
        })
  }  
}
module.exports = db;