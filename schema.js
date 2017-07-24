var db = require("./db.js");
var graphql = require('graphql');
var Person = new graphql.GraphQLObjectType({
    name: "Person",
    fields: ()=>({
        id: {
            type: graphql.GraphQLInt
        },
        name: {
            type: graphql.GraphQLString
        },
        age: {
            type: graphql.GraphQLInt
        }
    })
})
var GraphQuery = new graphql.GraphQLObjectType({
    name: "Query",
    fields: ()=>({
        person: {
            type: Person,
            args: {
                id: {
                    type: new graphql.GraphQLNonNull(graphql.GraphQLInt)
                }
            },
            resolve(parent, params, option) {
                return db.getPersonDetail(params.id);
            }
        },
        create: {
            type: Person,
            args: {
                name: {
                    type: graphql.GraphQLString
                },
                age: {
                    type: graphql.GraphQLInt
                }
            },
            resolve(parent, params, option) {
                console.log(params);
                console.log(option);
                return db.createPerson(params.name, params.age);
            }
        }
    })
})
const Schema = new graphql.GraphQLSchema({
    query: GraphQuery
})
module.exports.Schema = Schema;