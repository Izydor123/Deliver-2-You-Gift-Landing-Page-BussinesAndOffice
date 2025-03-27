import './Header.css'
import logo from '../assets/Deliever2You-1250x1250.png'

const Header = ({ title, desc1, desc2 }) => {

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
        {logo ? (
            <img src={logo} alt="Deliver2You Corporate Gifts" className="logo" key="logo" />
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="header-text">
          <h1>{title}</h1>
          <p>{desc1}</p>
          <p>{desc2}</p>
        </div>
        <div className="logo-container"></div>
      </div>
    </header>
  )
}

export default Header
