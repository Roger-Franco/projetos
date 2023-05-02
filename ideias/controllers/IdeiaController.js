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

    let emptyIdeias = false

    if(ideias.length === 0 ) {
      emptyIdeias = true
    }

    // const ideias = await Ideia.findOne({where : {UserId: userId }})
    res.render('ideias/dashboard', {ideias, emptyIdeias})
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

  static async deleteIdeia(req, res) {
    const id = req.body.id

    const UserId = req.session.userid

    try {
      await Ideia.destroy({where: {id: id, UserId: UserId}})
      req.flash('message', 'Pensamento removido com sucesso!')
  
      req.session.save(() => {
        res.redirect('/ideias/dashboard')
      })
      
    } catch (error) {
      console.log('Aconteceu um erro ' + error);
    }
  }

  static async updateIdeia(req, res) {
    const id = req.params.id

    const ideia = await Ideia.findOne({ where: {id: id }, raw: true})

    // console.log(ideia, 'ideia-edit');

    res.render('ideias/edit', {ideia})
  }

  static async updateIdeiaSave(req, res) {
    const id = req.body.id
    const ideia = {
      title: req.body.title
    }

    try {
      await Ideia.update(ideia, {where: {id: id}})
    req.flash('message', 'Pensamento atualizado com sucesso!')
  
    req.session.save(() => {
      res.redirect('/ideias/dashboard')
    })
    } catch (error) {
      console.log('Aconteceu um erro ' + error);
    }
    
  }
}
