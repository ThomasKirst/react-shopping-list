import Headline from './Headline'
import Button from './Button'
import Todo from './Todo'

import './App.css'

function App() {
  const todos = [
    { title: 'Milk', isDone: false },
    { title: 'Sugar', isDone: false },
    { title: 'Coffee', isDone: false },
    { title: 'Beer', isDone: false },
  ]

  return (
    <div className="App">
      <Headline>Hello, this is a headline!</Headline>

      {todos.map((todo, _index) => (
        <Todo key={_index} title={todo.title} isDone={todo.isDone} />
      ))}

      <Button>Click me</Button>
    </div>
  )
}

export default App
