const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Cabinet} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: process.env.LIVE_TOKEN}
    )
}
class UserController {

    async registration(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Не коректний логін чи пароль'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Користувач з таким догином вже існує'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})
        const cabinet = await Cabinet.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async login(req, res) {

    }

    async check(req, res, next) {
       
        const {id} = req.query
        if (!id) {
           return next(ApiError.badRequest('не задан ID'))
        }
        res.json(id)
    }
}

module.exports = new UserController()