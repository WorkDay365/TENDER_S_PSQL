const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "11"},
})

const Cabinet = sequelize.define('cabinet', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email_rec: {type: DataTypes.STRING,},
})

const Tender = sequelize.define('tender', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, },
    Img: {type: DataTypes.STRING,},
    description:{type: DataTypes.STRING,},
    tender_status:{type: DataTypes.STRING}, 
})

const Type_Tender = sequelize.define('type_tender', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true,},
})

User.hasOne(Cabinet)
Cabinet.belongsTo(User)

User.hasMany(Tender)
Tender.belongsTo(User)

Type_Tender.hasMany(Tender)
Tender.belongsTo(Type_Tender)

module.exports = {
    User, 
    Cabinet,
    Tender,
    Type_Tender

}