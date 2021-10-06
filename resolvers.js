const User = require('./models/User.model')

const resolvers = {
    Query: {

        getAllUsers: async () =>{
            return await User.find(); 
        }
    },
    Mutation: {
        createUser: async (parent, args, context, info) => {
            const {firstname, lastname, email, password} = args.user
            const user = new User({firstname, lastname, email, password})
            await user.save()
            return user; 
        }
    }
}

module.exports =resolvers; 