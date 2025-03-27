import './Product.css'

const Product = ({ image, title, desc1, desc2, link }) => {

  return (
    <section className="product">
      <div className="product-content">
       <div className="product-content">
        <div className="product-image">
          <a href={link} className="image-link" target="_blank" rel="noopener noreferrer">
            <img src={image} alt={title} />
          </a>
        </div>
        <div className="product-info">
          <h2>{title}</h2>
          <p>{desc1}</p>
          <p>{desc2}</p>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Product
