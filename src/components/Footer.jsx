import './Footer.css'
import { FaLinkedin, FaFacebookF, FaInstagramSquare, FaYoutube  } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contate-nos</h4>
          <p>Email: <a href="mailto:geral@deliver2yougift.com">geral@deliver2yougift.com</a></p>
          <p>Telefone: <a href="tel:00351912224405">+351 912 224 405</a></p>
          <p>Morada: Estrada Principal da Rocha Nova, 1- Nascente Santo António dos Olivais, Coimbra 3020-249</p>
          
          <div className="social-links">
            <a href="https://www.facebook.com/Deliver2youGift" target='_blank' aria-label="Facebook" className="social-icon">
              <FaFacebookF  size={27} />
            </a>
            <a href="https://www.instagram.com/deliver2yougift/" target='_blank' aria-label="Instagram" className="social-icon">
              <FaInstagramSquare  size={27} />
            </a>
            <a href="https://www.linkedin.com/company/deliver2yougift/" target='_blank' aria-label="LinkedIn" className="social-icon">
              <FaLinkedin size={27} />
            </a>
            <a href="https://www.youtube.com/@Deliver2youGift" target='_blank' aria-label="Youtube" className="social-icon">
              <FaYoutube  size={27} />
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Deliver 2 You Gift | Todos os direitos reservados</p>
      </div>
    </footer>
  )
}

export default Footer