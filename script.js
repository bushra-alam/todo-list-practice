const input = document.querySelector("#input")
const btn = document.querySelector(".btn")
const todoList = document.querySelector(".todoLists")

const getTodoListFromLS = () => {
  return JSON.parse(localStorage.getItem("todoValue")) || []
}

const setTodoListToLS = (todos) => {
  localStorage.setItem("todoValue", JSON.stringify(todos))
}

const addList = (todo) => {
  const li = document.createElement("li")
  li.innerHTML = todo.toUpperCase()


  li.addEventListener("click", () => {
    li.remove()
    removeFromLocalStorage(todo)
  })

  todoList.append(li)
}

const removeFromLocalStorage = (todo) => {
  let todos = getTodoListFromLS()
  todos = todos.filter(item => item !== todo)
  setTodoListToLS(todos)
}

const showTodoList = () => {
  const todos = getTodoListFromLS()
  todos.forEach((todo) => addList(todo))
}

btn.addEventListener("click", () => {
  let newTodo = input.value.trim()
  if (!newTodo) return

  let todos = getTodoListFromLS()

  if (todos.includes(newTodo)) {
    input.value = "" 
    return
  }

  todos.push(newTodo)
  setTodoListToLS(todos)
  addList(newTodo)
  input.value = ""
})


showTodoList()
