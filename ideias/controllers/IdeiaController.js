const Ideia = require('../models/Ideia')
const User = require('../models/User')


module.exports = class IdeiaController {
  static async  showIdeias(req, res) {
    res.render('ideias/home')
  }
}