const Ideia = require('../models/Ideia')
const User = require('../models/User')


module.exports = class IdeiaController {
  static async showIdeias(req, res) {
    res.render('ideias/home')
  }
  
  static async dashboard(req, res) {
    const userId = req.session.userid

    const user = await User.findOne({
      where: {
        id: userId,
      },
      include: Ideia,
      plain: true
    })
    // check if user exists
    if(!user) {
      res.redirect('/login')
    }

    const ideias = user.Ideia.map((result) => result.dataValues)


    console.log(ideias, 'ideias');
    // console.log(user.Ideia[0].dataValues.title);
    // console.log(user.Ideia);

    // const ideias = await Ideia.findOne({where : {UserId: userId }})
    res.render('ideias/dashboard', {ideias})
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
