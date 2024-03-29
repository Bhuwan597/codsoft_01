const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')

const userModel = mongoose.Schema(
    {
        fullName: {type: String, required:true},
        email: {type: String, required:true, unique:true},
        password: {type: String, required:true},
    }, {
        timestamps: true,
    }
)
userModel.pre('save', async function(next){
    if(!this.isModified){
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userModel.methods.matchPassword = async function(enteredpassword){
    const flag = await bcrypt.compare(enteredpassword, this.password)
    return flag
}


const User = mongoose.model('User', userModel)

module.exports = User;