import './Header.css'

function Header() {

  return (
    <>
      <div className="header">
        <button className="back-btn" aria-label="戻る">{'\u25C1'}</button>
        <button className="menu-btn" aria-label="メニュー">
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
      </div>
    </>
  )
}

export default Header