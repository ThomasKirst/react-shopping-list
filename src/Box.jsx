import './Box.css'

function Box ( { color='papayawhip', children }) {
  return <div className="box" style={ {background: color } }>{children}</div>
}

export default Box;