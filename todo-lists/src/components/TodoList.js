import React, { useState } from 'react'

export const TodoList = () => {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('')
  // const taskListObject = useRef()

  function handleAddItem(e) {
    e.preventDefault()
    setTaskList([...taskList, {id: Math.random(), task: newTask}])
    setNewTask('')
  }

  function handleInput(e) {
    setNewTask(e.target.value)

  }

  function handleCleanList() {
    setTaskList([])
  }

  function deleteTask(id) {
    setTaskList(taskList.filter((item) => item.id !== id))
  }

  console.log(taskList);
  // console.log(taskListObject);
  return (
    <>
    <h3>Gestor de tarefas</h3>
    <hr />
    <form action="" onSubmit={handleAddItem}>
    <input placeholder='Adicione uma tarefa' onChange={handleInput} type="text" value={newTask} />
    <div>
      <button type='submit'>Adicionar</button>
      <button onClick={handleCleanList}>Limpar Tudo</button>
    </div>
    </form>
    <hr />
    <p>Tarefas:</p>
    <p>
      {taskList.map((item, index) => (
        <div key={index}>
      <p>{item.task}</p>
      <button onClick={() => deleteTask(item.id)}>Deletar</button>
      </div>
    ))}
    </p>
    </>
  )
}
