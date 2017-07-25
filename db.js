var cassandra = require("cassandra-driver");
var client = new cassandra.Client({contactPoints:["127.0.0.1:9042"], keyspace: "maticokp"});
var db = {
    getPersonDetail: (id)=>{
        console.log("DB: get Person with ID="+id);
        return new Promise((resolve, reject)=>{
            client.execute("select * from Person where id="+id, (err, result)=>{
                if(err) return reject(err);
                if(result.rows.length<1) return reject("Nodata");
                return resolve(result.rows[0]);
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