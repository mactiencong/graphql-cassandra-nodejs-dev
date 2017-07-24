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
    },
    createPerson: (name, age)=>{
        return new Promise((resolve, reject)=>{
            resolve({
                id: 9999,
                name: name,
                age: age
            })
        })
    }
}
module.exports = db;