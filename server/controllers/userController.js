const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Cabinet } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: process.env.LIVE_TOKEN,
  });
};
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    console.log("++++++++++++++++++++++");
    console.log(email);
    try {
      if (!email || !password) {
        return next(ApiError.badRequest("Не коректний логін чи пароль"));
      }
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(
          ApiError.badRequest("Користувач з таким логином вже існує")
        );
      }
      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      const cabinet = await Cabinet.create({ userId: user.id });
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      console.log("--------------------------");
      next(ApiError.badRequest(e.message));
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return next(ApiError.internal("Користувач не знвйден"));
      }
      let comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return next(ApiError.internal("Указан невірний пароль"));
      }
      const token = generateJwt(user.id, user.email, user.role);
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async check(req, res, next) {
    try {
      const token = generateJwt(req.user.id, req.user.email, req.user.role);
      return res.json({ token });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}

module.exports = new UserController();
