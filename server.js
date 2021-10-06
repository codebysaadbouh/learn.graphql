const express = require('express')
require('dotenv/config');
const Port = process.env.Port || 4000;
const connectDB = require('./database/Connection')
const Hostname = process.env.Localhost || '127.0.0.1';
const {ApolloServer} = require('apollo-server-express')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')



async function startServer(){
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app: app});

    app.use((req, res) => {
        res.send('Hello from express apollo server');
    })

    connectDB();

    app.listen(Port,Hostname, ()=> {
        console.log(`🚀 🚀 Server started on http://${Hostname}:${Port}`);
        console.log(`Stop server with Ctrl + C`);
    })
}

startServer();