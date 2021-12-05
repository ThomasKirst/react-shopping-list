import './Todo.css'

export default function Todo({ title, isDone }) {
  return (
    <label>
      <input type="checkbox" checked={isDone} /> {title}
    </label>
  )
}
