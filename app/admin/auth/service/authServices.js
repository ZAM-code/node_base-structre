// pakages
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');
const Promise = require('bluebird')



// routes
let User_model = require("./../Model/User");
//code

let registration = (data) => {
    let password = bcrypt.hashSync(data.password, 8)
    let email = data.email.toLowerCase()
    let User = new User_model({ ...data, email, password })
    return User.save()
        .then(user => {
            return { user }
        }, err => {
            return err.message
        })
}

const login = (data) => {
    var email = data.email.toLowerCase()
    return User_model.findOne({ email: email })
        .then(user => {
            if (user && bcrypt.compareSync(data.password, user.password)) {
                const token = authToken(user)
                return Promise.resolve({ token: token, user: user })
            }
            else {
                return Promise.reject(ES.authError('Authentication Failed'))
            }
        })
}

let authToken = (user) => {
    return jwt.sign(
        {
            email: user.email,
            _id: user._id,
            shop_name: user.shop_name
        },
        process.env.SECRET_KEY
    )
}

module.exports = { registration, login }

