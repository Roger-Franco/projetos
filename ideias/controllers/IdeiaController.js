const Ideia = require('../models/Ideia')
const User = require('../models/User')


module.exports = class IdeiaController {
  static async showIdeias(req, res) {
    res.render('ideias/home')
  }
  
  static async dashboard(req, res) {
    res.render('ideias/dashboard')
  }

  static createIdeia(req, res) {
    res.render('ideias/create')
  }

  static async createIdeiaPost(req, res) {

    const {title} = req.body

    const ideia = {
      title: req.body.title,
      UserId: req.session.userid
    }
    try {
      
      await Ideia.create(ideia)
  
      req.flash('message', 'Pensamento criado com sucesso!')
  
      req.session.save(() => {
        res.redirect('/ideias/dashboard')
      })
    
    } catch (error) {
      console.log('Aconteceu um erro ' + error);
    }
  }
}
