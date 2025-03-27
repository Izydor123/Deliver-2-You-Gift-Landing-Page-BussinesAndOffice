import './Catalogue.css'

const Catalogue = ({ text, link }) => {
  return (
    <section className="catalogue-section">
      <div className="catalogue-content">
        <div className="catalogue-info">
          <h2>Nosso Catálogo</h2>
          <p>
           {text}
          </p>
        </div>
        <div className="catalogue-button-container">
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="catalogue-button"
          >
            Ver Catálogo
          </a>
        </div>
      </div>
    </section>
  )
}

export default Catalogue