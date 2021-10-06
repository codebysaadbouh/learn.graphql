const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: ID
        firstname: String
        lastname: String
        email: String
        password: String
    }

    type Query {
        getAllUsers: [User]
    }

    input RegisterInput {
        firstname: String, 
        lastname: String,
        email: String,
        password: String,
    }


    type Mutation {
        createUser(user: RegisterInput) : User
    }
`;

module.exports = typeDefs;