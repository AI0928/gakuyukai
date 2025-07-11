import './Title.css'

function Title({ text = "Gakuyukai" }) {

  return (
    <>
        <div className="title">{text}</div>
    </>
  )
}

export default Title