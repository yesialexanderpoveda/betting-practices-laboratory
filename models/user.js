const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        avatar: {
            type: String,
            default: 'avatar.png'
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        roles: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rol'

        }]

    }, {
    timestamps: true,
    versionKey: false
}
)

userScheme.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
}

userScheme.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


module.exports = mongoose.model('user', userScheme)