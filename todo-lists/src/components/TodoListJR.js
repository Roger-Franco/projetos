// https://www.youtube.com/watch?v=sliZvy0qtnE&list=PLXik_5Br-zO_47e0Zdjog8t2z76Fhlf9M&index=37
import React, { useRef, useState } from 'react'

export const TodoListJR = () => {
  const [taskList, setTaskList] = useState([])
  const [newTask, setNewTask] = useState('')
  const idTask = useRef(0)
  const inputRef = useRef()

  function addTask(e) {
    setTaskList([...taskList, {id: idTask.current, text: newTask} ])
    idTask.current++
    setNewTask('')
    inputRef.current.focus()
  }

  function cleanListTasks() {
    setTaskList([])
    idTask.current = 0
  }

  function removeTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id))
  }
  // console.log(taskList);
  return (
    <>
    <h3>Gestor de tarefas</h3>
    <hr />
    <input ref={inputRef} placeholder='Adicione uma tarefa' onChange={(e) => setNewTask(e.target.value)} type="text" value={newTask} />
    <div>
      <button onClick={addTask}>Adicionar</button>
      <button onClick={cleanListTasks}>Limpar Tudo</button>
    </div>
    <hr />
    <p>Tarefas:</p>
      {taskList.map((item) => (
      <p key={item.id}>{item.text} - <span onClick={() => removeTask(item.id)}>[Remover]</span></p>
    ))}
    </>
  )
}
