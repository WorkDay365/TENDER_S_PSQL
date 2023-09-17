const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
  emailReserv: { type: DataTypes.STRING },
  owner: { type: DataTypes.INTEGER },
});

const Cabinet = sequelize.define("cabinet", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email_rec: { type: DataTypes.STRING },
  selected_tenders: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
});

const Tender = sequelize.define("tender", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  tender_description: { type: DataTypes.STRING },
  tender_status: { type: DataTypes.STRING },
});

const Type_Tender = sequelize.define("type_tender", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  type_description: { type: DataTypes.STRING },
});

const Sub_Type_Tender = sequelize.define("sub_type_tender", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING },
  type_descript: { type: DataTypes.STRING },
});

User.hasOne(Cabinet);
Cabinet.belongsTo(User);

User.hasMany(Tender);
Tender.belongsTo(User);

Type_Tender.hasMany(Tender);
Tender.belongsTo(Type_Tender);

Sub_Type_Tender.hasMany(Tender);
Tender.belongsTo(Sub_Type_Tender);

Type_Tender.hasMany(Sub_Type_Tender);
Sub_Type_Tender.belongsTo(Type_Tender);

module.exports = {
  User,
  Cabinet,
  Tender,
  Type_Tender,
  Sub_Type_Tender,
};
