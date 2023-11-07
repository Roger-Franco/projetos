import questoes from "../bancoDeQuestoes";

export default (req, res) => {
  const idSelecionado = +req.query.id
  // const questao = questoes.find((quest) => quest.id === idSelecionado)
  const unicaQuestaoouNada = questoes.filter((questao) => questao.id === idSelecionado)

  if(unicaQuestaoouNada.length === 1) {
    const questaoSelecionada = unicaQuestaoouNada[0].embaralharRespostas()
    // const obj = questaoSelecionada.responderCom(0).paraObjeto() // simulando uma resposta
    res.status(200).json(questaoSelecionada.paraObjeto())
  } else {
    res.status(204).send()
  }
}