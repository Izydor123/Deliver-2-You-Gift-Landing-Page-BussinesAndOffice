import './ProductsList.css'

const ProductsList = ({ data, title }) => {
  return (
    <section className="products-list">
      <div className="products-header">
        <h2>{title}</h2>
      </div>
      <div className="products-grid">
        {data.map(item => (
          <div key={item.id} className="product-item">
            <a href={item.link} className="product-link">
              <img src={item.image} alt={item.text} className="product-image" />
            </a>
            <p className="product-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductsList