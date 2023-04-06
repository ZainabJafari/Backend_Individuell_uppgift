// const mongoose = require('mongoose')
// const { Schema } = mongoose;

// const userSchema = new Schema({
//     firstName:      {type: String, required: true},
//     lastName:       {type: String, required: true},
//     email:          {type: String, required: true, unique: true },
//     passwordHash:   {trsype: String, required: true},
// }, {timestamps : true})


// createUser.virtual('displayName').get(function(){
//     return this.firstName + ' ' + this.lastName;
// })

// module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:        {type: String, required: true},
    lastName:    {type: String, required: true},
    email:       {type: String, required: true},
    passwordHash:    {type: String, required: true}
})


userSchema.virtual('displayName').get(function(){
    return this.firstName + ' ' + this.lastName;
})

const User = mongoose.model('User', userSchema)

module.exports = User;