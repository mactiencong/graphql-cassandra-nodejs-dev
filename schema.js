var db = require("./db.js");
var graphql = require('graphql');
// import {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLNonNull
// } from 'graphql';
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
            resolve(parent, {id}) {
                return db.getPersonDetail(id);
            }
        }
    })
})
const Schema = new graphql.GraphQLSchema({
    query: GraphQuery
})
module.exports.Schema = Schema;