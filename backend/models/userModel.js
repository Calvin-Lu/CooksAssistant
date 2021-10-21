import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },                                                                              
    password: {
        type: String,
        required: true
    },
    ingredients: [mongoose.Mixed],
    recipes: [mongoose.Mixed],
    substitutions: [String],
    createdAt: {
        type: Date, 
        default: Date.now()
    }
})

const UserModel = mongoose.model('UserModel', userSchema)

export default UserModel